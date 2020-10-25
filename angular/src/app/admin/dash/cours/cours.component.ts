import { Component, OnInit, ViewChild, EventEmitter, Inject, OnDestroy, Input } from '@angular/core';
import { merge, Subscription, Subject } from 'rxjs';
import { UowService } from 'src/app/services/uow.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { DeleteService } from 'src/app/components/delete/delete.service';
import { Cours } from 'src/app/models/models';

import { FormControl } from '@angular/forms';
import { startWith } from 'rxjs/operators';

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

  displayedColumns = [/*'select',*/  'nom', 'nomAr', 'filesUrl', 'videosUrl', 'niveauScolaire', 'branche'];

  panelOpenState = false;

  nom = new FormControl('');
  nomAr = new FormControl('');
  idNiveauScolaire = new FormControl(0);
  idBranche = new FormControl(0);
  niveauScolaires = this.uow.niveauScolaires.get();
  branches = null;

  constructor(public uow: UowService, public dialog: MatDialog
    , private mydialog: DeleteService, @Inject('BASE_URL') private url: string) {
  }

  ngOnInit() {
    const sub = merge(...[this.sort.sortChange, this.paginator.page, this.update]).pipe(startWith(null as any)).subscribe(r => {
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
          this.idNiveauScolaire.value === 0 ? 0 : this.idNiveauScolaire.value,
          this.idBranche.value === 0 ? 0 : this.idBranche.value,

        );
      }
    );

    this.subs.push(sub);
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

  toList(urls: string): string[] {
    if (urls) {
      const l = urls.split(';');
      l.pop();

      return l;
    } else {
      return [];
    }

  }

  openLink(elementUrl: string, id: number) {
    if (elementUrl.includes('http')) {
      window.open(elementUrl, '_blanc');
    } else {
      const url = `${this.url}/cours/${id}/${elementUrl}`;
      window.open(url, '_blanc');
    }
  }

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

  ngOnDestroy(): void {
    this.subs.forEach(e => {
      e.unsubscribe();
    });
  }

}

