import { Component, OnInit, ViewChild, EventEmitter, Inject, OnDestroy, Input } from '@angular/core';
import { merge, Subscription, Subject } from 'rxjs';
import { UpdateCoursComponent } from './update/update.component';
import { UowService } from 'src/app/services/uow.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { DeleteService } from 'src/app/components/delete/delete.service';
import { Cours } from 'src/app/models/models';

import { FormControl } from '@angular/forms';
import { startWith } from 'rxjs/operators';
import { DownloadSheetComponent } from 'src/app/manage-files/download-sheet/download-sheet.component';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.scss']
})
export class CoursComponent implements OnInit, OnDestroy {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  update = new EventEmitter();
  isLoadingResults = true;
  resultsLength = 0;
  isRateLimitReached = false;

  subs: Subscription[] = [];

  dataSource: Cours[] = [];
  selectedList: Cours[] = [];

  displayedColumns = [/*'select',*/  'nom', 'semester', 'filesUrl', 'videosUrl', 'niveauScolaire', 'branche', 'option'];

  panelOpenState = false;

  nom = new FormControl('');
  nomAr = new FormControl('');
  idNiveauScolaire = 0;
  @Input() parentObs = new Subject<number>();
  idBranche = new FormControl(0);
  branches;

  constructor(public uow: UowService, public dialog: MatDialog
    , private mydialog: DeleteService, @Inject('BASE_URL') private url: string
    , private bottomSheet: MatBottomSheet) {
  }

  async ngOnInit() {
    this.parentObs.subscribe(r => {
      this.idNiveauScolaire = r;

      this.branches = this.uow.branches.getByForeignkey('idNiveauScolaire', this.idNiveauScolaire);

      this.update.next(true);
    });

    console.log('pere : ', this.idNiveauScolaire);
    const sub = merge(...[this.sort.sortChange, this.paginator.page, this.update, this.idBranche.valueChanges])
      .pipe(startWith(null as any)).subscribe(async r => {
        r === true ? this.paginator.pageIndex = 0 : r = r;
        !this.paginator.pageSize ? this.paginator.pageSize = 10 : r = r;
        const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
        this.isLoadingResults = true;
        this.getPage(
          startIndex,
          this.paginator.pageSize,
          this.sort.active ? this.sort.active : 'id',
          this.sort.direction ? this.sort.direction : 'desc',
          this.nom.value === '' ? '*' : this.nom.value,
          this.nomAr.value === '' ? '*' : this.nomAr.value,
          this.idNiveauScolaire === 0 ? 0 : this.idNiveauScolaire,
          this.idBranche.value === 0 ? 0 : this.idBranche.value,

        );
      }
      );



    this.subs.push(sub);
  }

  reset() {
    this.nom.setValue('');
    this.nomAr.setValue('');
    // this.idNiveauScolaire.setValue(0);

    this.update.next(true);
  }



  search() {
    this.update.next(true);
  }

  showPieceJoin(elementUrl, id: number) {
    // const url = `${this.url}/examen/${fileName}`;
    // window.open(url);
    this.bottomSheet.open(DownloadSheetComponent, {
      disableClose: false,
      data: { elementUrl, folder: 'cours', id }
    });
  }

  // toList(urls: string): string[] {
  //   if (urls) {
  //     const l = urls.split(';');
  //     l.pop();

  //     return l;
  //   } else {
  //     return [];
  //   }

  // }

  // openLink(elementUrl: string, id: number) {
  //   if (elementUrl.includes('http')) {
  //     window.open(elementUrl, '_blanc');
  //   } else {
  //     const url = `${this.url}/cours/${id}/${elementUrl}`;
  //     window.open(url, '_blanc');
  //   }
  // }

  getPage(startIndex, pageSize, sortBy, sortDir, nom, nomAr, idNiveauScolaire, idBranche) {
    const sub = this.uow.cours.getAll(startIndex, pageSize, sortBy, sortDir, nom, nomAr, idNiveauScolaire, idBranche).subscribe(
      (r: any) => {
        console.log(r.list);
        this.dataSource = r.list;
        this.resultsLength = r.count;
        this.isLoadingResults = false;
      }
    );

    this.subs.push(sub);
  }



  openDialog(o: Cours, text, bool) {
    const dialogRef = this.dialog.open(UpdateCoursComponent, {
      width: '1100px',
      disableClose: true,
      data: { model: o, title: text, visualisation: bool }
    });

    return dialogRef.afterClosed();
  }

  add() {
    const o = new Cours();
    o.idNiveauScolaire = this.idNiveauScolaire;
    o.idBranche = this.idBranche.value;
    this.openDialog(o, `Ajouter Cours`, false).subscribe(result => {
      if (result) {
        this.update.next(true);
      }
    });
  }

  edit(o: Cours) {
    o.idNiveauScolaire = this.idNiveauScolaire;
    o.idBranche = this.idBranche.value === 0 ? o.idBranche : this.idBranche.value;
    this.openDialog(o, `Modifier Cours`, false).subscribe((result: Cours) => {
      if (result) {
        this.update.next(true);
      }
    });
  }

  detail(o: Cours) {
    this.openDialog(o, `Détail Cours`, true).subscribe((result: Cours) => {
      if (result) {
        this.update.next(true);
      }
    });
  }

  async delete(o: Cours) {
    const r = await this.mydialog.openDialog('Cours').toPromise();
    if (r === 'ok') {
      const sub = this.uow.cours.delete(o.id).subscribe(() => this.update.next(true));

      if (o.filesUrl && o.filesUrl !== '') {
        const deletes = o.filesUrl.slice(0, -1).split(';').map(e => `cours_${o.id}/${e}`);

        const d = await this.uow.files.deleteFiles(deletes, 'cours').toPromise();

      }

      this.subs.push(sub);
    }
  }

  displayImage(urlImage: string) {
    if (!urlImage) {
      return 'assets/404.png';
    }
    if (urlImage && urlImage.startsWith('http')) {
      return urlImage;
    }

    return `${this.url}/cours/${urlImage.replace(';', '')}`;
  }

  imgError(img: any) {
    img.src = 'assets/404.png';
  }

  //check box
  //
  isSelected(row: Cours): boolean {
    return this.selectedList.find(e => e.id === row.id) ? true : false;
  }

  check(row: Cours) {
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
      const sub = this.uow.cours.deleteRange(this.selectedList).subscribe(() => {
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

