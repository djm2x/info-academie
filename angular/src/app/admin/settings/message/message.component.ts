import { Component, OnInit, ViewChild, EventEmitter, Inject, OnDestroy } from '@angular/core';
import { merge, Subscription, Subject } from 'rxjs';
import { UpdateComponent } from './update/update.component';
import { UowService } from 'src/app/services/uow.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { DeleteService } from 'src/app/components/delete/delete.service';
import { Message } from 'src/app/models/models';

import { FormControl } from '@angular/forms';
import { startWith } from 'rxjs/operators';
import { MyrouteService } from '../../myroute.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit, OnDestroy {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  update = new EventEmitter();
  isLoadingResults = true;
  resultsLength = 0;
  isRateLimitReached = false;

  subs: Subscription[] = [];

  dataSource: Message[] = [];
  selectedList: Message[] = [];

  displayedColumns = [/*'select',*/  'object', 'message', 'vu', 'date', 'user', 'senderName', 'receiver', 'cours', 'option'];

  panelOpenState = false;

  object = new FormControl('');
  message = new FormControl('');
  idUser = new FormControl(0);
  senderName = new FormControl('');
  idReceiver = new FormControl(0);
  idCours = new FormControl(0);


  users = this.uow.users.get();
  receivers = this.uow.users.get();
  // courss = this.uow.courss.get();




  constructor(public uow: UowService, public dialog: MatDialog
    , private mydialog: DeleteService, @Inject('BASE_URL') private url: string, public breadcrumb: MyrouteService) {
    this.breadcrumb.name = 'Messages';
  }

  ngOnInit() {
    const sub = merge(...[this.sort.sortChange, this.paginator.page, this.update]).pipe(startWith(null as any)).subscribe(
      r => {
        r === true ? this.paginator.pageIndex = 0 : r = r;
        !this.paginator.pageSize ? this.paginator.pageSize = 10 : r = r;
        const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
        this.isLoadingResults = true;
        this.getPage(
          startIndex,
          this.paginator.pageSize,
          this.sort.active ? this.sort.active : 'id',
          this.sort.direction ? this.sort.direction : 'desc',
          this.object.value === '' ? '*' : this.object.value,
          this.message.value === '' ? '*' : this.message.value,
          this.idUser.value === 0 ? 0 : this.idUser.value,
          // this.senderName.value === '' ? '*' : this.senderName.value,
          // this.idReceiver.value === 0 ? 0 : this.idReceiver.value,
          // this.idCours.value === 0 ? 0 : this.idCours.value,

        );
      }
    );

    this.subs.push(sub);

  }

  reset() {
    this.object.setValue('');
    this.message.setValue('');
    this.idUser.setValue(0);
    this.senderName.setValue('');
    this.idReceiver.setValue(0);
    this.idCours.setValue(0);

    this.update.next(true);
  }



  search() {
    this.update.next(true);
  }

  getPage(startIndex, pageSize, sortBy, sortDir, object, message, idUser/*, senderName, idReceiver, idCours,*/) {
    const sub = this.uow.messages.getAll(startIndex, pageSize, sortBy, sortDir, object, message, idUser/*, senderName, idReceiver, idCours,*/).subscribe(
      (r: any) => {
        console.log(r.list);
        this.dataSource = r.list;
        this.resultsLength = r.count;
        this.isLoadingResults = false;
      }
    );

    this.subs.push(sub);
  }



  openDialog(o: Message, text, bool) {
    const dialogRef = this.dialog.open(UpdateComponent, {
      width: '1100px',
      disableClose: true,
      data: { model: o, title: text, visualisation: bool }
    });

    return dialogRef.afterClosed();
  }

  add() {
    this.openDialog(new Message(), `Ajouter ${this.breadcrumb.name}`, false).subscribe(result => {
      if (result) {
        this.update.next(true);
      }
    });
  }

  edit(o: Message) {
    this.openDialog(o, `Modifier ${this.breadcrumb.name}`, false).subscribe((result: Message) => {
      if (result) {
        this.update.next(true);
      }
    });
  }

  detail(o: Message) {
    this.openDialog(o, `Détail ${this.breadcrumb.name}`, true).subscribe((result: Message) => {
      if (result) {
        this.update.next(true);
      }
    });
  }

  async delete(id: number) {
    const r = await this.mydialog.openDialog(this.breadcrumb.name).toPromise();
    if (r === 'ok') {
      const sub = this.uow.messages.delete(id).subscribe(() => this.update.next(true));

      this.subs.push(sub);
    }
  }

  displayImage(urlImage: string, id: number) {
    if (!urlImage) {
      return 'assets/404.png';
    }
    if (urlImage && urlImage.startsWith('http')) {
      return urlImage;
    }

    return `${this.url}/messages/${id}/${urlImage.replace(';', '')}`;
  }

  imgError(img: any) {
    img.src = 'assets/404.png';
  }

  //check box
  //
  isSelected(row: Message): boolean {
    return this.selectedList.find(e => e.id === row.id) ? true : false;
  }

  check(row: Message) {
    const i = this.selectedList.findIndex(o => row.id === o.id);
    const existe: boolean = i !== -1;

    existe ? this.selectedList.splice(i, 1) : this.selectedList.push(row);
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected(): boolean {
    const numSelected = this.selectedList.length;
    const numRows = this.dataSource.length;

    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ? this.selectedList = [] : this.selectedList = Array.from(this.dataSource);
  }

  async deleteList() {
    const r = await this.mydialog.openDialog('role').toPromise();
    if (r === 'ok') {
      const sub = this.uow.messages.deleteRange(this.selectedList).subscribe(() => {
        this.selectedList = [];
        this.update.next(true);
      });

      this.subs.push(sub);
    }
  }

  ngOnDestroy(): void {
    this.subs.forEach(e => {
      e.unsubscribe();
    });
  }

}

