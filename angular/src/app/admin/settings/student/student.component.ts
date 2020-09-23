import { Component, OnInit, ViewChild, EventEmitter, Inject, OnDestroy } from '@angular/core';
import { merge, Subscription, Subject } from 'rxjs';
import { UpdateComponent } from './update/update.component';
import { UowService } from 'src/app/services/uow.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { DeleteService } from 'src/app/components/delete/delete.service';
import { Student } from 'src/app/models/models';
import { ExcelService } from 'src/app/shared/excel.service';
import { FormControl } from '@angular/forms';
import { startWith } from 'rxjs/operators';
import { MyrouteService } from '../../myroute.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit, OnDestroy {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  update = new EventEmitter();
  isLoadingResults = true;
  resultsLength = 0;
  isRateLimitReached = false;

  subs: Subscription[] = [];

  dataSource: Student[] = [];
  selectedList: Student[] = [];

  displayedColumns = [/*'select',*/  'ecole', 'niveau', 'nomParent', 'prenomParent', 'tel1Parent', 'tel2Parent', 'user', 'option'];

  panelOpenState = false;

  ecole = new FormControl('');
niveau = new FormControl('');
nomParent = new FormControl('');
prenomParent = new FormControl('');
tel1Parent = new FormControl('');
tel2Parent = new FormControl('');
idUser = new FormControl(0);


  users = this.uow.users.get();


  dataSubject = new Subject();
  isListTabSelected = true;
  isChartTabSelected = true;
  listTabSelectedEvent = new Subject();
  chartTabSelectedEvent = new Subject();

  constructor(public uow: UowService, public dialog: MatDialog, private excel: ExcelService
    , private mydialog: DeleteService, @Inject('BASE_URL') private url: string, public breadcrumb: MyrouteService ) { 
      this.breadcrumb.name = 'Students';
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
          this.ecole.value === '' ? '*' : this.ecole.value,
this.niveau.value === '' ? '*' : this.niveau.value,
this.nomParent.value === '' ? '*' : this.nomParent.value,
this.prenomParent.value === '' ? '*' : this.prenomParent.value,
this.tel1Parent.value === '' ? '*' : this.tel1Parent.value,
this.tel2Parent.value === '' ? '*' : this.tel2Parent.value,
this.idUser.value === 0 ? 0 : this.idUser.value,

        );
      }
    );

    const sub2 = merge(...[this.chartTabSelectedEvent, this.update]).pipe(startWith(null as any)).subscribe(r => {

      if (this.isChartTabSelected) {
        this.getAllForStatistique(
          this.ecole.value === '' ? '*' : this.ecole.value,
this.niveau.value === '' ? '*' : this.niveau.value,
this.nomParent.value === '' ? '*' : this.nomParent.value,
this.prenomParent.value === '' ? '*' : this.prenomParent.value,
this.tel1Parent.value === '' ? '*' : this.tel1Parent.value,
this.tel2Parent.value === '' ? '*' : this.tel2Parent.value,
this.idUser.value === 0 ? 0 : this.idUser.value,

        );
      }
    }
    );

    this.subs.push(sub);
    this.subs.push(sub2);
  }

  reset() {
    this.ecole.setValue('');
this.niveau.setValue('');
this.nomParent.setValue('');
this.prenomParent.setValue('');
this.tel1Parent.setValue('');
this.tel2Parent.setValue('');
this.idUser.setValue(0);

    this.update.next(true);
  }

  generateExcel() {
    this.excel.json_to_sheet(this.dataSource);
  }

  search() {
    this.update.next(true);
  }

  getPage(startIndex, pageSize, sortBy, sortDir, ecole, niveau, nomParent, prenomParent, tel1Parent, tel2Parent, idUser,) {
    const sub = this.uow.students.getAll(startIndex, pageSize, sortBy, sortDir,  ecole, niveau, nomParent, prenomParent, tel1Parent, tel2Parent, idUser,).subscribe(
      (r: any) => {
        console.log(r.list);
        this.dataSource = r.list;
        this.resultsLength = r.count;
        this.isLoadingResults = false;
      }
    );

    this.subs.push(sub);
  }

  getAllForStatistique( ecole, niveau, nomParent, prenomParent, tel1Parent, tel2Parent, idUser,) {
    const sub = this.uow.students.getAllForStatistique( ecole, niveau, nomParent, prenomParent, tel1Parent, tel2Parent, idUser,).subscribe(
      (r: any[]) => {
        console.log(r);
        const barChartLabels = r.map(e => e.name);
        const barChartData = [
          { data: [], label: 'name' },
        ];

        r.forEach(e => {
          barChartData[0].data.push(e.value);
        });

        this.dataSubject.next({barChartLabels, barChartData, title: 'Student'});
      }
    );

    this.subs.push(sub);
  }

  selectedIndexChange(index: number) {
    // this.isListTabSelected = index === 0;
    // this.isChartTabSelected = index === 1;
    // this.listTabSelectedEvent.next(index === 0);
    // this.chartTabSelectedEvent.next(index === 1);
  }

  openDialog(o: Student, text, bool) {
    const dialogRef = this.dialog.open(UpdateComponent, {
      width: '1100px',
      disableClose: true,
      data: { model: o, title: text, visualisation: bool }
    });

    return dialogRef.afterClosed();
  }

  add() {
    this.openDialog(new Student(), `Ajouter ${this.breadcrumb.name}`, false).subscribe(result => {
      if (result) {
        this.update.next(true);
      }
    });
  }

  edit(o: Student) {
    this.openDialog(o, `Modifier ${this.breadcrumb.name}`, false).subscribe((result: Student) => {
      if (result) {
        this.update.next(true);
      }
    });
  }

  detail(o: Student) {
    this.openDialog(o, `Détail ${this.breadcrumb.name}`, true).subscribe((result: Student) => {
      if (result) {
        this.update.next(true);
      }
    });
  }

  async delete(id: number) {
    const r = await this.mydialog.openDialog(this.breadcrumb.name).toPromise();
    if (r === 'ok') {
      const sub = this.uow.students.delete(id).subscribe(() => this.update.next(true));

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

    return `${this.url}/students/${urlImage.replace(';', '')}`;
  }

  imgError(img: any) {
    img.src = 'assets/404.jpg';
  }

  //check box
  //
  isSelected(row: Student): boolean {
    return this.selectedList.find(e => e.id === row.id) ? true : false;
  }

  check(row: Student) {
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
      const sub = this.uow.students.deleteRange(this.selectedList).subscribe(() => {
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

