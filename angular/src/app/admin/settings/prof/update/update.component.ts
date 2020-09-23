import { UowService } from 'src/app/services/uow.service';
import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Prof } from 'src/app/models/models';
import { Subject, Subscription } from 'rxjs';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit, OnDestroy {
  subs: Subscription[] = [];

  myForm: FormGroup;
  o: Prof;
  title = '';
  visualisation = false;
  sTypeActivitess = this.uow.sTypeActivitess.get();
sActivitess = this.uow.sActivitess.get();
sTypeCourss = this.uow.sTypeCourss.get();
sLieuCourss = this.uow.sLieuCourss.get();
sNiveauScolairess = this.uow.sNiveauScolairess.get();
users = this.uow.users.get();


  folderToSaveInServer = 'profs';

  /*{imagesInit}*/

  

  constructor(public dialogRef: MatDialogRef<any>, @Inject(MAT_DIALOG_DATA) public data: any
    , private fb: FormBuilder, private uow: UowService) { }

  async ngOnInit() {
    this.o = this.data.model;
    this.title = this.data.title;
    this.visualisation = this.data.visualisation;
    this.createForm();
    if (this.o.id !== 0) {
      this.selectChange('region', this.o.idRegion);
      this.selectChange('province', this.o.idProvince);
      setTimeout(() => this.createForm(), 300);
    }
    /*{imagesFrom}*/

    setTimeout(() => {
       /*{imagesTo}*/
    }, 100);
  }

  selectChange(name: string, id: number) {
    if (name === 'region') {
      this.uow.provinces.getByForeignkey(id).subscribe(r => {
        this.provinces = r;
      });
    } else if (name === 'province'){
      this.uow.communes.getByForeignkey(id).subscribe(r => {
        this.communes = r;
      });
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onOkClick(o: Prof): void {
    let sub = null;
    if (o.id === 0) {
      sub = this.uow.profs.post(o).subscribe(r => {
        
        this.dialogRef.close(o);
      });
    } else {
      sub = this.uow.profs.put(o.id, o).subscribe(r => {
        
        this.dialogRef.close(o);
      });
    }

    this.subs.push(sub);
  }

  createForm() {
    this.myForm = this.fb.group({
      id: [this.o.id, [Validators.required, ]],
description: [this.o.description, [Validators.required, ]],
experience: [this.o.experience, [Validators.required, ]],
approche: [this.o.approche, [Validators.required, ]],
intro: [this.o.intro, [Validators.required, ]],
videoUrl: [this.o.videoUrl, [Validators.required, ]],
cvUrl: [this.o.cvUrl, [Validators.required, ]],
prixHrWeb: [this.o.prixHrWeb, [Validators.required, ]],
prixHrHome: [this.o.prixHrHome, [Validators.required, ]],
prixHrWebGroupe: [this.o.prixHrWebGroupe, [Validators.required, ]],
prixHrHomeGroupe: [this.o.prixHrHomeGroupe, [Validators.required, ]],
idsTypeActivites: [this.o.idsTypeActivites, [Validators.required, ]],
idsActivites: [this.o.idsActivites, [Validators.required, ]],
idsTypeCours: [this.o.idsTypeCours, [Validators.required, ]],
idsLieuCours: [this.o.idsLieuCours, [Validators.required, ]],
idsNiveauScolaires: [this.o.idsNiveauScolaires, [Validators.required, ]],
idUser: [this.o.idUser, [Validators.required, ]],

    });
  }

  resetForm() {
    this.o = new Prof();
    this.createForm();
  }

  ngOnDestroy(): void {
    this.subs.forEach(e => {
      e.unsubscribe();
    });
  }

}
