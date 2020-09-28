import { UowService } from 'src/app/services/uow.service';
import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Activite } from 'src/app/models/models';
import { Subject, Subscription } from 'rxjs';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit, OnDestroy {
  subs: Subscription[] = [];

  myForm: FormGroup;
  o: Activite;
  title = '';
  visualisation = false;
  typeActivites = this.uow.typeActivites.get();


  folderToSaveInServer = 'activites';

  imageUrlTo = new Subject();
  imageUrlFrom = new Subject();



  eventSubmitFromParent = new Subject();

  constructor(public dialogRef: MatDialogRef<any>, @Inject(MAT_DIALOG_DATA) public data: any
    , private fb: FormBuilder, private uow: UowService) { }

  async ngOnInit() {
    this.o = this.data.model;
    this.folderToSaveInServer = this.folderToSaveInServer + '_' + this.o.id;
    this.title = this.data.title;
    this.visualisation = this.data.visualisation;
    this.createForm();

    this.imageUrlFrom.subscribe(r => this.myForm.get('imageUrl').setValue(r));

    console.log(this.o)
    setTimeout(() => {
      this.imageUrlTo.next(this.o.imageUrl);;
    }, 100);

  }



  onNoClick(): void {
    this.dialogRef.close();
  }

  onOkClick(o: Activite): void {
    let sub = null;
    if (o.id === 0) {
      sub = this.uow.activites.post(o).subscribe(r => {
        this.eventSubmitFromParent.next({ id: r.id });
        this.dialogRef.close(o);
      });
    } else {
      sub = this.uow.activites.put(o.id, o).subscribe(r => {
        this.eventSubmitFromParent.next({ id: o.id });
        this.dialogRef.close(o);
      });
    }

    this.subs.push(sub);
  }

  createForm() {
    this.myForm = this.fb.group({
      id: [this.o.id, [Validators.required,]],
      nom: [this.o.nom, [Validators.required,]],
      nomAr: [this.o.nomAr, [Validators.required,]],
      imageUrl: [this.o.imageUrl, [Validators.required,]],
      idTypeActivite: [+this.o.idTypeActivite, [Validators.required,]],

    });
  }

  resetForm() {
    this.o = new Activite();
    this.createForm();
  }

  ngOnDestroy(): void {
    this.subs.forEach(e => {
      e.unsubscribe();
    });
  }

}
