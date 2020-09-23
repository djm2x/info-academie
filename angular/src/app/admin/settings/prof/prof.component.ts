import { Component, OnInit, ViewChild, EventEmitter, Inject, OnDestroy } from '@angular/core';
import { merge, Subscription, Subject } from 'rxjs';
import { UpdateComponent } from './update/update.component';
import { UowService } from 'src/app/services/uow.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { DeleteService } from 'src/app/components/delete/delete.service';
import { Prof } from 'src/app/models/models';
import { ExcelService } from 'src/app/shared/excel.service';
import { FormControl } from '@angular/forms';
import { startWith } from 'rxjs/operators';
import { MyrouteService } from '../../myroute.service';

@Component({
  selector: 'app-prof',
  templateUrl: './prof.component.html',
  styleUrls: ['./prof.component.scss']
})
export class ProfComponent implements OnInit, OnDestroy {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  update = new EventEmitter();
  isLoadingResults = true;
  resultsLength = 0;
  isRateLimitReached = false;

  subs: Subscription[] = [];

  dataSource: Prof[] = [];
  selectedList: Prof[] = [];

  displayedColumns = [/*'select',*/  'experience', 'approche', 'intro', 'videoUrl', 'cvUrl', 'prixHrWeb', 'prixHrHome', 'prixHrWebGroupe', 'prixHrHomeGroupe', 'sTypeActivites', 'sActivites', 'sTypeCours', 'sLieuCours', 'sNiveauScolaires', 'user', 'option'];

  panelOpenState = false;

  experience = new FormControl('');
approche = new FormControl('');
intro = new FormControl('');
videoUrl = new FormControl('');
cvUrl = new FormControl('');
prixHrWeb = new FormControl(0);
prixHrHome = new FormControl(0);
prixHrWebGroupe = new FormControl(0);
prixHrHomeGroupe = new FormControl(0);
idsTypeActivites = new FormControl('');
idsActivites = new FormControl('');
idsTypeCours = new FormControl('');
idsLieuCours = new FormControl('');
idsNiveauScolaires = new FormControl('');
idUser = new FormControl('');


  sTypeActivitess = this.uow.sTypeActivitess.get();
sActivitess = this.uow.sActivitess.get();
sTypeCourss = this.uow.sTypeCourss.get();
sLieuCourss = this.uow.sLieuCourss.get();
sNiveauScolairess = this.uow.sNiveauScolairess.get();
users = this.uow.users.get();


  dataSubject = new Subject();
  isListTabSelected = true;
  isChartTabSelected = true;
  listTabSelectedEvent = new Subject();
  chartTabSelectedEvent = new Subject();

  constructor(public uow: UowService, public dialog: MatDialog, private excel: ExcelService
    , private mydialog: DeleteService, @Inject('BASE_URL') private url: string, public breadcrumb: MyrouteService ) { 
      this.breadcrumb.name = 'Profs';
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
          this.experience.value === '' ? '*' : this.experience.value,
this.approche.value === '' ? '*' : this.approche.value,
this.intro.value === '' ? '*' : this.intro.value,
this.videoUrl.value === '' ? '*' : this.videoUrl.value,
this.cvUrl.value === '' ? '*' : this.cvUrl.value,
this.prixHrWeb.value === 0 ? 0 : this.prixHrWeb.value,
this.prixHrHome.value === 0 ? 0 : this.prixHrHome.value,
this.prixHrWebGroupe.value === 0 ? 0 : this.prixHrWebGroupe.value,
this.prixHrHomeGroupe.value === 0 ? 0 : this.prixHrHomeGroupe.value,
this.idsTypeActivites.value === '' ? '*' : this.idsTypeActivites.value,
this.idsActivites.value === '' ? '*' : this.idsActivites.value,
this.idsTypeCours.value === '' ? '*' : this.idsTypeCours.value,
this.idsLieuCours.value === '' ? '*' : this.idsLieuCours.value,
this.idsNiveauScolaires.value === '' ? '*' : this.idsNiveauScolaires.value,
this.idUser.value === '' ? '*' : this.idUser.value,

        );
      }
    );

    const sub2 = merge(...[this.chartTabSelectedEvent, this.update]).pipe(startWith(null as any)).subscribe(r => {

      if (this.isChartTabSelected) {
        this.getAllForStatistique(
          this.experience.value === '' ? '*' : this.experience.value,
this.approche.value === '' ? '*' : this.approche.value,
this.intro.value === '' ? '*' : this.intro.value,
this.videoUrl.value === '' ? '*' : this.videoUrl.value,
this.cvUrl.value === '' ? '*' : this.cvUrl.value,
this.prixHrWeb.value === 0 ? 0 : this.prixHrWeb.value,
this.prixHrHome.value === 0 ? 0 : this.prixHrHome.value,
this.prixHrWebGroupe.value === 0 ? 0 : this.prixHrWebGroupe.value,
this.prixHrHomeGroupe.value === 0 ? 0 : this.prixHrHomeGroupe.value,
this.idsTypeActivites.value === '' ? '*' : this.idsTypeActivites.value,
this.idsActivites.value === '' ? '*' : this.idsActivites.value,
this.idsTypeCours.value === '' ? '*' : this.idsTypeCours.value,
this.idsLieuCours.value === '' ? '*' : this.idsLieuCours.value,
this.idsNiveauScolaires.value === '' ? '*' : this.idsNiveauScolaires.value,
this.idUser.value === '' ? '*' : this.idUser.value,

        );
      }
    }
    );

    this.subs.push(sub);
    this.subs.push(sub2);
  }

  reset() {
    this.experience.setValue('');
this.approche.setValue('');
this.intro.setValue('');
this.videoUrl.setValue('');
this.cvUrl.setValue('');
this.prixHrWeb.setValue(0);
this.prixHrHome.setValue(0);
this.prixHrWebGroupe.setValue(0);
this.prixHrHomeGroupe.setValue(0);
this.idsTypeActivites.setValue('');
this.idsActivites.setValue('');
this.idsTypeCours.setValue('');
this.idsLieuCours.setValue('');
this.idsNiveauScolaires.setValue('');
this.idUser.setValue('');

    this.update.next(true);
  }

  generateExcel() {
    this.excel.json_to_sheet(this.dataSource);
  }

  search() {
    this.update.next(true);
  }

  getPage(startIndex, pageSize, sortBy, sortDir, experience, approche, intro, videoUrl, cvUrl, prixHrWeb, prixHrHome, prixHrWebGroupe, prixHrHomeGroupe, idsTypeActivites, idsActivites, idsTypeCours, idsLieuCours, idsNiveauScolaires, idUser,) {
    const sub = this.uow.profs.getAll(startIndex, pageSize, sortBy, sortDir,  experience, approche, intro, videoUrl, cvUrl, prixHrWeb, prixHrHome, prixHrWebGroupe, prixHrHomeGroupe, idsTypeActivites, idsActivites, idsTypeCours, idsLieuCours, idsNiveauScolaires, idUser,).subscribe(
      (r: any) => {
        console.log(r.list);
        this.dataSource = r.list;
        this.resultsLength = r.count;
        this.isLoadingResults = false;
      }
    );

    this.subs.push(sub);
  }

  getAllForStatistique( experience, approche, intro, videoUrl, cvUrl, prixHrWeb, prixHrHome, prixHrWebGroupe, prixHrHomeGroupe, idsTypeActivites, idsActivites, idsTypeCours, idsLieuCours, idsNiveauScolaires, idUser,) {
    const sub = this.uow.profs.getAllForStatistique( experience, approche, intro, videoUrl, cvUrl, prixHrWeb, prixHrHome, prixHrWebGroupe, prixHrHomeGroupe, idsTypeActivites, idsActivites, idsTypeCours, idsLieuCours, idsNiveauScolaires, idUser,).subscribe(
      (r: any[]) => {
        console.log(r);
        const barChartLabels = r.map(e => e.name);
        const barChartData = [
          { data: [], label: 'name' },
        ];

        r.forEach(e => {
          barChartData[0].data.push(e.value);
        });

        this.dataSubject.next({barChartLabels, barChartData, title: 'Prof'});
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

  openDialog(o: Prof, text, bool) {
    const dialogRef = this.dialog.open(UpdateComponent, {
      width: '1100px',
      disableClose: true,
      data: { model: o, title: text, visualisation: bool }
    });

    return dialogRef.afterClosed();
  }

  add() {
    this.openDialog(new Prof(), `Ajouter ${this.breadcrumb.name}`, false).subscribe(result => {
      if (result) {
        this.update.next(true);
      }
    });
  }

  edit(o: Prof) {
    this.openDialog(o, `Modifier ${this.breadcrumb.name}`, false).subscribe((result: Prof) => {
      if (result) {
        this.update.next(true);
      }
    });
  }

  detail(o: Prof) {
    this.openDialog(o, `Détail ${this.breadcrumb.name}`, true).subscribe((result: Prof) => {
      if (result) {
        this.update.next(true);
      }
    });
  }

  async delete(id: number) {
    const r = await this.mydialog.openDialog(this.breadcrumb.name).toPromise();
    if (r === 'ok') {
      const sub = this.uow.profs.delete(id).subscribe(() => this.update.next(true));

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

    return `${this.url}/profs/${urlImage.replace(';', '')}`;
  }

  imgError(img: any) {
    img.src = 'assets/404.jpg';
  }

  //check box
  //
  isSelected(row: Prof): boolean {
    return this.selectedList.find(e => e.id === row.id) ? true : false;
  }

  check(row: Prof) {
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
      const sub = this.uow.profs.deleteRange(this.selectedList).subscribe(() => {
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

