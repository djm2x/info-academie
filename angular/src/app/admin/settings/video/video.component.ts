import { Component, OnInit, ViewChild, EventEmitter, Inject, OnDestroy } from '@angular/core';
import { merge, Subscription, Subject } from 'rxjs';
import { UpdateComponent } from './update/update.component';
import { UowService } from 'src/app/services/uow.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { DeleteService } from 'src/app/components/delete/delete.service';
import { Video } from 'src/app/models/models';

import { FormControl } from '@angular/forms';
import { startWith } from 'rxjs/operators';
import { MyrouteService } from '../../myroute.service';
import { FileUploadService } from 'src/app/services/file.upload.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit, OnDestroy {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  update = new EventEmitter();
  isLoadingResults = true;
  resultsLength = 0;
  isRateLimitReached = false;

  subs: Subscription[] = [];

  dataSource: Video[] = [];
  selectedList: Video[] = [];

  displayedColumns = [/*'select',*/  'title', 'order', 'date', 'urlVideo', 'option'];

  panelOpenState = false;

  title = new FormControl('');
  order = new FormControl(0);
  urlVideo = new FormControl('');






  constructor(public uow: UowService, public dialog: MatDialog
    , private mydialog: DeleteService, @Inject('BASE_URL') private url: string
    , public breadcrumb: MyrouteService, private service: FileUploadService) {
    this.breadcrumb.name = 'Videos';
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
          this.title.value === '' ? '*' : this.title.value,
          this.order.value === 0 ? 0 : this.order.value,
          this.urlVideo.value === '' ? '*' : this.urlVideo.value,

        );
      }
    );

    this.subs.push(sub);
  }

  reset() {
    this.title.setValue('');
    this.order.setValue(0);
    this.urlVideo.setValue('');

    this.update.next(true);
  }



  search() {
    this.update.next(true);
  }

  getPage(startIndex, pageSize, sortBy, sortDir, title, order, urlVideo,) {
    const sub = this.uow.videos.getAll(startIndex, pageSize, sortBy, sortDir, title, order, urlVideo,).subscribe(
      (r: any) => {
        console.log(r.list);
        this.dataSource = r.list;
        this.resultsLength = r.count;
        this.isLoadingResults = false;
      }
    );

    this.subs.push(sub);
  }



  openDialog(o: Video, text, bool) {
    const dialogRef = this.dialog.open(UpdateComponent, {
      width: '1100px',
      disableClose: true,
      data: { model: o, title: text, visualisation: bool }
    });

    return dialogRef.afterClosed();
  }

  add() {
    this.openDialog(new Video(), `Ajouter ${this.breadcrumb.name}`, false).subscribe(result => {
      if (result) {
        this.update.next(true);
      }
    });
  }

  edit(o: Video) {
    this.openDialog(o, `Modifier ${this.breadcrumb.name}`, false).subscribe((result: Video) => {
      if (result) {
        this.update.next(true);
      }
    });
  }

  detail(o: Video) {
    this.openDialog(o, `Détail ${this.breadcrumb.name}`, true).subscribe((result: Video) => {
      if (result) {
        this.update.next(true);
      }
    });
  }

  async delete(o: Video) {
    const r = await this.mydialog.openDialog(this.breadcrumb.name).toPromise();
    if (r === 'ok') {
      this.service.deleteFiles([o.urlVideo.replace(';', '')], 'videos').subscribe(rr => console.log(rr));
      const sub = this.uow.videos.delete(o.id).subscribe(() => this.update.next(true));
      this.subs.push(sub);
    }
  }

  displayImage(urlImage: string) {
    if (!urlImage) {
      return 'assets/404.jpg';
    }
    if (urlImage && urlImage.startsWith('http')) {
      return urlImage;
    }

    return `${this.url}/videos/${urlImage.replace(';', '')}`;
  }

  imgError(img: any) {
    img.src = 'assets/404.jpg';
  }

  //check box
  //
  isSelected(row: Video): boolean {
    return this.selectedList.find(e => e.id === row.id) ? true : false;
  }

  check(row: Video) {
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
      const sub = this.uow.videos.deleteRange(this.selectedList).subscribe(() => {
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

