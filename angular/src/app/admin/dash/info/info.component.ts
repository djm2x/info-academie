import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { SnackBarService } from 'src/app/loader/snack-bar.service';
import { Prof, Student, User } from 'src/app/models/models';
import { MyTranslateService } from 'src/app/my.translate.service';
import { UowService } from 'src/app/services/uow.service';
import { SessionService } from 'src/app/shared';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  myForm: FormGroup;
  myFormProf: FormGroup;
  myFormStudent: FormGroup;
  o = new User();
  prof = new Prof();
  student = new Student();
  hide = true;
  hide2 = true;

  villes = this.uow.villes.get();
  niveaux = this.uow.niveaux;

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
    this.initForms();

    let folder = 'users';
    // if (this.session.isProf) {
    //   folder = 'prof';
    // } else if (this.session.isStudent) {
    //   folder = 'student';
    // }
    this.optImage.folderToSaveInServer = this.o.id === 0 ? folder : `${folder}_${this.o.id}`;
    this.optImage.imageFrom.subscribe(r => this.myForm.get('imageUrl').setValue(r));

    setTimeout(() => {
      this.optImage.imageTo.next(this.o.imageUrl);
    }, 100);

  }

  initForms() {
    this.o = this.session.user;
    this.prof = this.session.prof;
    this.student = this.session.student;

    this.createForm();
    this.createFormProf();
    this.createFormStudent();
    this.checkPassword.setValue(this.o.password)
  }

  checkboxChange(checked: boolean, id: number, property: string): void {
    const prop = this.myFormProf.get(property);
    const fc = prop.value as string;
    const existe = fc ? fc.includes(`;${id};`) : false;

    if (checked && !existe) {
      prop.setValue(fc + `;${id};`)
    } else if (!checked && existe) {
      prop.setValue(fc.replace(`;${id};`, ''))
    }
  }

  isChecked(id: number, property: string): boolean {
    const prop = this.myFormProf.get(property);
    if (prop.value === null) {
      return false;
    }

    // console.log(prop.value)

    return (prop.value as string).includes(`;${id};`);
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
      idVille: [+this.o.idVille],
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

  createFormStudent() {
    this.myFormStudent = this.fb.group({
      id: [this.student.id],
      ecole: [this.student.ecole, []],
      niveau: [this.student.niveau, []],
      nomParent: [this.student.nomParent, []],
      prenomParent: [this.student.prenomParent],
      tel1Parent: [this.student.tel1Parent],
      tel2Parent: [this.student.tel2Parent],

      idUser: [this.student.idUser],
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

  async submit(o: User, prof: Prof, student: Student) {
    // // o.id = null;
    console.log(prof)
    try {
      await this.uow.users.put(o.id, o).toPromise();

      if (this.session.isProf) {
        await this.uow.profs.put(prof.id, prof).toPromise();
        this.session.updateUser(o, prof, null, null);
      } else if (this.session.isStudent) {
        await this.uow.students.put(student.id, student).toPromise();
        this.session.updateUser(o, student, null, null);
      }

      this.initForms();

      this.optImage.eventSubmitFromParent.next({ id: o.id });
      // this.snackBar.notifyOk(200, r.message);
    } catch (e) {
      console.warn(e)
    }
  }



  resetForm() {
    this.o = new User();
    this.createForm();
  }

  resetFormProf() {
    this.prof = new Prof();
    this.createFormProf();
  }

  resetFormStudent() {
    this.student = new Student();
    this.createFormStudent();
  }

}
