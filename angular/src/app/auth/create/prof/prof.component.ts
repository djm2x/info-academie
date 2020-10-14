import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { SnackBarService } from 'src/app/loader/snack-bar.service';
import { Prof, User } from 'src/app/models/models';
import { MyTranslateService } from 'src/app/my.translate.service';
import { UowService } from 'src/app/services/uow.service';
import { SessionService } from 'src/app/shared';

@Component({
  selector: 'app-prof',
  templateUrl: './prof.component.html',
  styleUrls: ['./prof.component.scss']
})
export class ProfComponent implements OnInit {
  myForm: FormGroup;
  myFormProf: FormGroup;
  o = new User();
  prof = new Prof();
  hide = true;
  hide2 = true;

  villes = this.uow.villes.get();

  activites = this.uow.typeActivites.getAllWithActivites();
  niveauScolaires = this.uow.niveauScolaires.get();
  typeCours = this.uow.typeCours.get();
  lieuCours = this.uow.lieuCours.get();

  checkPassword = new FormControl('', [Validators.required]);

  optImage = {
    folderToSaveInServer: '',
    imageTo: new Subject<string>(),
    imageFrom: new Subject<string>(),
    eventSubmitFromParent: new Subject(),
  }

  constructor(private fb: FormBuilder, public uow: UowService
    , private router: Router, public session: SessionService
    , public snackBar: SnackBarService, public myTrans: MyTranslateService) { }

  async ngOnInit() {
    // test
    this.o.nom = 'teacher';
    this.o.prenom = 'teacher';
    this.o.email = 'teacher2@angular.io';
    this.o.password = '123';
    this.o.role = 'teacher';
    //
    this.checkPassword.setValue('123');
    this.createForm();
    this.createFormProf();
    this.optImage.folderToSaveInServer = this.o.id === 0 ? 'users' : `users_${this.o.id}`;
    this.optImage.imageFrom.subscribe(r => this.myForm.get('imageUrl').setValue(r));

    setTimeout(() => {
      this.optImage.imageTo.next(this.o.imageUrl);
    }, 100);

  }

  checkboxChange(checked: boolean, id: number, property: string): void {
    const prop = this.myFormProf.get(property);
    const fc = prop.value as string;
    const existe = fc.includes(`;${id};`);

    if (checked && !existe) {
      prop.setValue(fc + `;${id};`)
    } else if (!checked && existe) {
      prop.setValue(fc.replace(`;${id};`, ''))
    }
  }

  isChecked(id: number): boolean {
    return (this.idsActivites.value as string).includes(`;${id};`)
  }

  createForm() {
    this.myForm = this.fb.group({
      id: [this.o.id],
      nom: [this.o.nom, [Validators.required]],
      prenom: [this.o.prenom, [Validators.required]],
      tel1: [this.o.tel1, []],
      tel2: [this.o.tel2, []],
      email: [this.o.email, [Validators.required, Validators.email]],
      password: [this.o.password, [Validators.required]],
      isActive: [this.o.isActive],
      date: [this.o.date],
      adresse: [this.o.adresse, []],
      imageUrl: [this.o.imageUrl, []],
      cin: [this.o.cin, []],
      role: ['prof'],
      idVille: [this.o.idVille],
    });
  }

  createFormProf() {
    this.myFormProf = this.fb.group({
      id: [this.prof.id],
      lien: [this.prof.lien, []],
      description: [this.prof.description, []],
      experience: [this.prof.experience, []],
      approche: [this.prof.approche, []],
      intro: [this.prof.intro],
      videoUrl: [this.prof.videoUrl],
      cvUrl: [this.prof.cvUrl],
      note: [this.prof.note, []],

      prixHrWeb: [this.prof.prixHrWeb],
      prixHrHome: [this.prof.prixHrHome, []],
      prixHrWebGroupe: [this.prof.prixHrWebGroupe, []],
      prixHrHomeGroupe: [this.prof.prixHrHomeGroupe, []],

      idsTypeActivites: [this.prof.idsTypeActivites],
      idsActivites: [this.prof.idsActivites],
      idsTypeCours: [this.prof.idsTypeCours],
      idsLieuCours: [this.prof.idsLieuCours],
      idsNiveauScolaires: [this.prof.idsNiveauScolaires],

      idUser: [this.prof.idUser],
    });
  }

  get idsTypeActivites() { return this.myFormProf.get('idsTypeActivites'); }
  get idsActivites() { return this.myFormProf.get('idsActivites'); }
  get idsTypeCours() { return this.myFormProf.get('idsTypeCours'); }
  get idsLieuCours() { return this.myFormProf.get('idsLieuCours'); }
  get idsNiveauScolaires() { return this.myFormProf.get('idsNiveauScolaires'); }

  get email() { return this.myForm.get('email'); }
  get password() { return this.myForm.get('password'); }

  get emailError() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' : '';
  }

  get passwordError() {
    return this.password.hasError('required') ? 'You must enter a value' : '';
  }

  get checkPasswordError() {
    return this.checkPassword.hasError('required') ? 'You must enter a value' :
      (this.checkPassword.value !== this.password.value ? 'les mot de pass sont pas les même' : '');
  }

  submit(o: User, prof: Prof) {
    // o.id = null;
    this.uow.accounts.create(o).subscribe((r: any) => {

      this.optImage.eventSubmitFromParent.next({ id: r.id });
      console.log(r)
      // this.router.navigate(['/auth']);
      if (r.code < 0) {
        this.snackBar.notifyAlert(400, r.message);
      } else {
        prof.id = null;
        prof.idUser = r.id;
        this.uow.profs.post(prof).subscribe(p => {
          console.log(p)
          this.router.navigate(['/auth']);
          // this.snackBar.notifyOk(200, r.message);
        })
      }
    });
  }

  resetForm() {
    this.o = new User();
    this.createForm();
  }

  resetFormProf() {
    this.prof = new Prof();
    this.createFormProf();
  }

}
