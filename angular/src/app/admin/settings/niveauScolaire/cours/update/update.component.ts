import { UowService } from 'src/app/services/uow.service';
import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Cours } from 'src/app/models/models';
import { Subject, Subscription } from 'rxjs';
@Component({
  selector: 'app-update-cours',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateCoursComponent implements OnInit, OnDestroy {
  subs: Subscription[] = [];

  myForm: FormGroup;
  videosUrls = new FormArray([new FormControl('')]);
  o: Cours;
  title = '';
  visualisation = false;
  branches;

  config = {
    multiple: true,
    showSubmitButton: false,
    folderToSaveInServer: 'cours',
    propertyStringToParent: new Subject(),
    propertyStringToUploader: new Subject(),
    eventSubmitToUploader: new Subject(),
  }

  constructor(public dialogRef: MatDialogRef<any>, @Inject(MAT_DIALOG_DATA) public data: any
    , private fb: FormBuilder, private uow: UowService) { }

  ngOnInit() {
    this.o = this.data.model;
    this.title = this.data.title;
    this.branches = this.uow.branches.getByForeignkey('idNiveauScolaire', this.o.idNiveauScolaire);

    this.createForm();
    const videosUrl: string = this.myForm.get('videosUrl').value;
    // this.videosUrls.setValue(videosUrl ? videosUrl.split(';') : ['']);

    if (videosUrl) {
      this.videosUrls.removeAt(0);
      videosUrl.split(';').map(e => this.videosUrls.push(new FormControl(e)));
    }

    this.videosUrls.valueChanges.subscribe((r: string[]) => {
      this.myForm.get('videosUrl').setValue(r.join(';'));
    });

    this.config.propertyStringToParent.subscribe(r => this.myForm.get('filesUrl').setValue(r));

    setTimeout(() => {
      this.config.propertyStringToUploader.next(this.o.filesUrl);
    }, 100);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onOkClick(o: Cours): void {
    let sub = null;
    if (o.id === 0) {
      sub = this.uow.cours.post(o).subscribe(r => {
        this.config.eventSubmitToUploader.next({ id: r.id });
        this.dialogRef.close(o);
      });
    } else {
      sub = this.uow.cours.put(o.id, o).subscribe(r => {
        this.config.eventSubmitToUploader.next({ id: o.id });
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
      filesUrl: [this.o.filesUrl],
      videosUrl: [this.o.videosUrl],
      semester: [this.o.semester],
      // vidoesUrl: this.fb.array([{value: ''}].map(i => this.fb.group(i)) as FormGroup[]),
      idBranche: [+this.o.idBranche, [Validators.required,]],
      idNiveauScolaire: [this.o.idNiveauScolaire, [Validators.required,]],
    });
  }

  resetForm() {
    this.o = new Cours();
    this.createForm();
  }

  add() {
    this.videosUrls.push(new FormControl(''));
  }

  ngOnDestroy(): void {
    this.subs.forEach(e => {
      e.unsubscribe();
    });
  }

}
