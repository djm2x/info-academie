import { UowService } from 'src/app/services/uow.service';
import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NiveauScolaire } from 'src/app/models/models';
import { Subject, Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit, OnDestroy {
  subs: Subscription[] = [];

  myForm: FormGroup;
  o = new NiveauScolaire();
  title = '';
  visualisation = false;

  folderToSaveInServer = 'niveauScolaires';

  cycles = this.uow.cycles;
  id = 0;
  parentObs = new Subject<number>();
  constructor(private fb: FormBuilder, private uow: UowService
    , private route: ActivatedRoute, private router: Router) { }

  async ngOnInit() {
    // this.o = this.data.model;
    // this.folderToSaveInServer = this.folderToSaveInServer + '_' + this.o.id;
    // this.title = this.data.title;
    // this.visualisation = this.data.visualisation;
    // this.createForm();
    // if (this.o.id !== 0) {

    //   setTimeout(() => this.createForm(), 300);
    // }

    this.createForm();
    this.id = +this.route.snapshot.paramMap.get('id');

    this.title = 'Ajouter Niveau Scolaire';

    if (this.id !== 0) {
      this.uow.niveauScolaires.getOne(this.id).subscribe(async r => {
        this.o = r as NiveauScolaire;
        console.log(this.o);
        this.title = 'Modifier Niveau Scolaire';
        this.createForm()

        this.parentObs.next(this.id);
      });
    }
  }

  submit(o: NiveauScolaire): void {
    let sub = null;
    if (o.id === 0) {
      sub = this.uow.niveauScolaires.post(o).subscribe(r => {
        this.id = r.id;
        this.parentObs.next(this.id);
        // this.router.navigate(['/admin/settings/user']);
      });
    } else {
      sub = this.uow.niveauScolaires.put(o.id, o).subscribe(r => {

        // this.router.navigate(['/admin/settings/user']);
      });
    }

    this.subs.push(sub);
  }

  createForm() {
    this.myForm = this.fb.group({
      id: [this.o.id, [Validators.required,]],
      nom: [this.o.nom, [Validators.required,]],
      nomAr: [this.o.nomAr, [Validators.required,]],
      idCycle: [+this.o.idCycle, [Validators.required,]],
      coursLigneGroupe: [this.o.coursLigneGroupe, [Validators.required,]],
      coursLigneIndividuel: [this.o.coursLigneIndividuel, [Validators.required,]],
      coursDomicileGroupe: [this.o.coursDomicileGroupe, [Validators.required,]],
      coursDomicileIndividuel: [this.o.coursDomicileIndividuel, [Validators.required,]],
    });
  }

  resetForm() {
    this.o = new NiveauScolaire();
    this.createForm();
  }

  ngOnDestroy(): void {
    this.subs.forEach(e => {
      e.unsubscribe();
    });
  }

}
