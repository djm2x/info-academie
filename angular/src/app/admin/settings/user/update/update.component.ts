import { UowService } from 'src/app/services/uow.service';
import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/models/models';
import { Subject, Subscription } from 'rxjs';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit, OnDestroy {
  subs: Subscription[] = [];

  myForm: FormGroup;
  o: User;
  title = '';
  visualisation = false;
  villes = this.uow.villes.get();


  folderToSaveInServer = 'users';

  imageUrlTo = new Subject();
  imageUrlFrom = new Subject();



  eventSubmitFromParent = new Subject();

  constructor(public dialogRef: MatDialogRef<any>, @Inject(MAT_DIALOG_DATA) public data: any
    , private fb: FormBuilder, private uow: UowService) { }

  async ngOnInit() {
    this.o = this.data.model;
    this.title = this.data.title;
    this.visualisation = this.data.visualisation;
    this.createForm();

    this.imageUrlFrom.subscribe(r => this.myForm.get('imageUrl').setValue(r));


    setTimeout(() => {
      setTimeout(() => {
        this.imageUrlTo.next(this.o.imageUrl);;
      }, 100);
    }, 100);
  }



  onNoClick(): void {
    this.dialogRef.close();
  }

  onOkClick(o: User): void {
    let sub = null;
    if (o.id === 0) {
      sub = this.uow.users.post(o).subscribe(r => {
        this.eventSubmitFromParent.next(true);
        this.dialogRef.close(o);
      });
    } else {
      sub = this.uow.users.put(o.id, o).subscribe(r => {
        this.eventSubmitFromParent.next(true);
        this.dialogRef.close(o);
      });
    }

    this.subs.push(sub);
  }

  createForm() {
    this.myForm = this.fb.group({
      id: [this.o.id, [Validators.required,]],
      nom: [this.o.nom, [Validators.required,]],
      prenom: [this.o.prenom, [Validators.required,]],
      imageUrl: [this.o.imageUrl, [Validators.required,]],
      // intro: [this.o.intro, [Validators.required,]],
      email: [this.o.email, [Validators.required, Validators.email]],
      tel: [this.o.tel1, [Validators.required,]],
      adresse: [this.o.adresse, [Validators.required,]],
      cin: [this.o.cin, [Validators.required,]],
      password: [this.o.password, [Validators.required,]],
      role: [this.o.role, [Validators.required,]],
      isActive: [this.o.isActive, [Validators.required,]],
      idVille: [this.o.idVille, [Validators.required,]],

    });
  }

  resetForm() {
    this.o = new User();
    this.createForm();
  }

  ngOnDestroy(): void {
    this.subs.forEach(e => {
      e.unsubscribe();
    });
  }

}
