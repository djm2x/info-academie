import { UowService } from 'src/app/services/uow.service';
import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TypeActivite } from 'src/app/models/models';
import { Subject, Subscription } from 'rxjs';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit, OnDestroy {
  subs: Subscription[] = [];

  myForm: FormGroup;
  o: TypeActivite;
  title = '';
  visualisation = false;
  

  folderToSaveInServer = 'typeActivites';

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
       setTimeout(() => { this.imageUrlTo.next(this.o.imageUrl);;
  }, 100);
    }, 100);
  }

  

  onNoClick(): void {
    this.dialogRef.close();
  }

  onOkClick(o: TypeActivite): void {
    let sub = null;
    if (o.id === 0) {
      sub = this.uow.typeActivites.post(o).subscribe(r => {
        this.eventSubmitFromParent.next(true);
        this.dialogRef.close(o);
      });
    } else {
      sub = this.uow.typeActivites.put(o.id, o).subscribe(r => {
        this.eventSubmitFromParent.next(true);
        this.dialogRef.close(o);
      });
    }

    this.subs.push(sub);
  }

  createForm() {
    this.myForm = this.fb.group({
      id: [this.o.id, [Validators.required, ]],
nom: [this.o.nom, [Validators.required, ]],
nomAr: [this.o.nomAr, [Validators.required, ]],
imageUrl: [this.o.imageUrl, [Validators.required, ]],

    });
  }

  resetForm() {
    this.o = new TypeActivite();
    this.createForm();
  }

  ngOnDestroy(): void {
    this.subs.forEach(e => {
      e.unsubscribe();
    });
  }

}
