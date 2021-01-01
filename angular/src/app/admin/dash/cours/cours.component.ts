import { Component, OnInit, ViewChild, EventEmitter, Inject, OnDestroy, Input } from '@angular/core';
import { merge, Subscription, Subject } from 'rxjs';
import { UowService } from 'src/app/services/uow.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { DeleteService } from 'src/app/components/delete/delete.service';
import { Branche, Cours, NiveauScolaire } from 'src/app/models/models';

import { FormControl } from '@angular/forms';
import { startWith } from 'rxjs/operators';
import { DownloadSheetComponent } from 'src/app/manage-files/download-sheet/download-sheet.component';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { SessionService } from 'src/app/shared';
import { DataService } from './data.service';
import { Router } from '@angular/router';

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

  displayedColumns = [/*'select',*/  'nom', 'semester', 'filesUrl', 'videosUrl', 'niveauScolaire', 'branche'];

  panelOpenState = false;

  nom = new FormControl('');
  nomAr = new FormControl('');
  idNiveauScolaire = new FormControl(0);
  idBranche = new FormControl(0);
  niveauScolaires = this.uow.niveauScolaires.get();
  branches = null;

  cours: Cours[] = [];

  constructor(public uow: UowService, public dialog: MatDialog, public session: SessionService
    , private bottomSheet: MatBottomSheet, public data: DataService, private router: Router) {
  }

  async ngOnInit() {
    if (this.session.isStudent) {
      // const sub = null;

      // this.subs.push(sub);

      this.cours = await this.uow.cours.getByNiveauAndBranche(+this.session.niveau.id, +this.session.branche.id).toPromise();
    }


  }

  detail(e) {
    this.data.cours = e;
    this.router.navigate(['/admin/dash/cours/detail', e.id]);
  }

  selectChange(id: number) {
    this.branches = this.uow.branches.getByForeignkey('idNiveauScolaire', id);
  }

  reset() {
    this.nom.setValue('');
    this.nomAr.setValue('');
    this.idNiveauScolaire.setValue(0);
    this.idBranche.setValue(0);

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

  getPage(startIndex, pageSize, sortBy, sortDir, nom, nomAr, idNiveauScolaire, idBranche) {
    if (this.session.isStudent) {
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

  }

  ngOnDestroy(): void {
    this.subs.forEach(e => {
      e.unsubscribe();
    });
  }

}

