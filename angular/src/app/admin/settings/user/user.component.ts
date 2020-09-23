import { Component, OnInit, ViewChild, EventEmitter, Inject, OnDestroy } from '@angular/core';
import { merge, Subscription, Subject } from 'rxjs';
import { UpdateComponent } from './update/update.component';
import { UowService } from 'src/app/services/uow.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { DeleteService } from 'src/app/components/delete/delete.service';
import { User } from 'src/app/models/models';
import { ExcelService } from 'src/app/shared/excel.service';
import { FormControl } from '@angular/forms';
import { startWith } from 'rxjs/operators';
import { MyrouteService } from '../myroute.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  update = new EventEmitter();
  isLoadingResults = true;
  resultsLength = 0;
  isRateLimitReached = false;

  subs: Subscription[] = [];

  dataSource: User[] = [];
  selectedList: User[] = [];

  displayedColumns = [/*'select',*/  'imageUrl', 'nom', 'prenom', 'intro', 'email', 'tel', 'adresse', 'cin', 'role', 'isActive', 'ville', 'option'];

  panelOpenState = false;

  nom = new FormControl('');
prenom = new FormControl('');
intro = new FormControl('');
email = new FormControl('');
tel = new FormControl('');
adresse = new FormControl('');
cin = new FormControl('');
role = new FormControl('');
isActive = new FormControl(0);
idVille = new FormControl(0);


  villes = this.uow.villes.get();


  

  constructor(public uow: UowService, public dialog: MatDialog, private excel: ExcelService
    , private mydialog: DeleteService, @Inject('BASE_URL') private url: string, public breadcrumb: MyrouteService ) { 
      this.breadcrumb.name = 'Users';
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
          this.nom.value === '' ? '*' : this.nom.value,
this.prenom.value === '' ? '*' : this.prenom.value,
this.intro.value === '' ? '*' : this.intro.value,
this.email.value === '' ? '*' : this.email.value,
this.tel.value === '' ? '*' : this.tel.value,
this.adresse.value === '' ? '*' : this.adresse.value,
this.cin.value === '' ? '*' : this.cin.value,
this.role.value === '' ? '*' : this.role.value,
this.isActive.value === 0 ? 0 : this.isActive.value,
this.idVille.value === 0 ? 0 : this.idVille.value,

        );
      }
    );

   

    this.subs.push(sub);
    
  }

  reset() {
    this.nom.setValue('');
this.prenom.setValue('');
this.intro.setValue('');
this.email.setValue('');
this.tel.setValue('');
this.adresse.setValue('');
this.cin.setValue('');
this.role.setValue('');
this.isActive.setValue(0);
this.idVille.setValue(0);

    this.update.next(true);
  }

  generateExcel() {
    this.excel.json_to_sheet(this.dataSource);
  }

  search() {
    this.update.next(true);
  }

  getPage(startIndex, pageSize, sortBy, sortDir, nom, prenom, intro, email, tel, adresse, cin, role, isActive, idVille,) {
    const sub = this.uow.users.getAll(startIndex, pageSize, sortBy, sortDir,  nom, prenom, intro, email, tel, adresse, cin, role, isActive, idVille,).subscribe(
      (r: any) => {
        console.log(r.list);
        this.dataSource = r.list;
        this.resultsLength = r.count;
        this.isLoadingResults = false;
      }
    );

    this.subs.push(sub);
  }

  

  

  openDialog(o: User, text, bool) {
    const dialogRef = this.dialog.open(UpdateComponent, {
      width: '1100px',
      disableClose: true,
      data: { model: o, title: text, visualisation: bool }
    });

    return dialogRef.afterClosed();
  }

  add() {
    this.openDialog(new User(), `Ajouter ${this.breadcrumb.name}`, false).subscribe(result => {
      if (result) {
        this.update.next(true);
      }
    });
  }

  edit(o: User) {
    this.openDialog(o, `Modifier ${this.breadcrumb.name}`, false).subscribe((result: User) => {
      if (result) {
        this.update.next(true);
      }
    });
  }

  detail(o: User) {
    this.openDialog(o, `Détail ${this.breadcrumb.name}`, true).subscribe((result: User) => {
      if (result) {
        this.update.next(true);
      }
    });
  }

  async delete(id: number) {
    const r = await this.mydialog.openDialog(this.breadcrumb.name).toPromise();
    if (r === 'ok') {
      const sub = this.uow.users.delete(id).subscribe(() => this.update.next(true));

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

    return `${this.url}/users/${urlImage.replace(';', '')}`;
  }

  imgError(img: any) {
    img.src = 'assets/404.jpg';
  }

  //check box
  //
  isSelected(row: User): boolean {
    return this.selectedList.find(e => e.id === row.id) ? true : false;
  }

  check(row: User) {
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
      const sub = this.uow.users.deleteRange(this.selectedList).subscribe(() => {
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

