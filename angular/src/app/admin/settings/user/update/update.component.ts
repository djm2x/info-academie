import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { SnackBarService } from 'src/app/loader/snack-bar.service';
import { Prof, Student, User } from 'src/app/models/models';
import { MyTranslateService } from 'src/app/my.translate.service';
import { UowService } from 'src/app/services/uow.service';
import { SessionService } from 'src/app/shared';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  myForm: FormGroup;
  myFormProf: FormGroup;
  myFormStudent: FormGroup;
  o = new User();
  prof = new Prof();
  student = new Student();
  hide = true;
  hide2 = true;

  villes = this.uow.villes.get();
  branches = null;

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

  id = 0;
  title = '';
  constructor(private fb: FormBuilder, public uow: UowService
    , private router: Router, public session: SessionService
    , public snackBar: SnackBarService, public myTrans: MyTranslateService
    , private route: ActivatedRoute) { }

  async ngOnInit() {
    this.initForms();
    this.id = +this.route.snapshot.paramMap.get('id');
    this.optImage.folderToSaveInServer = `users_${this.id}`;

    this.title = 'Ajouter Utilisateur';

    if (this.id !== 0) {
      this.uow.users.getOne(this.id).subscribe(async r => {
        this.o = r as User;
        console.log(this.o);
        this.title = 'Modifier Utilisateur';
        if (this.o.role === 'prof') {
          this.prof = await this.uow.profs.getByIdUser(this.o.id).toPromise();

          console.log(this.prof)
        } else if (this.o.role === 'student') {
          this.student = await this.uow.students.getByIdUser(this.o.id).toPromise();

          this.branches = this.uow.branches.getByForeignkey('idNiveauScolaire', +this.student.niveau);
        }

        this.initForms();

        setTimeout(() => this.optImage.imageTo.next(this.o.imageUrl), 100);
      });
    }

    this.optImage.imageFrom.subscribe(r => this.myForm.get('imageUrl').setValue(r));
  }

  selectChange(id: number) {
    this.branches = this.uow.branches.getByForeignkey('idNiveauScolaire', id);
  }

  initForms() {
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
      role: [this.o.role],
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
      note: [this.prof.note],

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
      niveau: [+this.student.niveau, []],
      branche: [+this.student.branche, []],
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
    try {
      await this.uow.users.put(o.id, o).toPromise();

      if (this.o.role === 'prof') {
        await this.uow.profs.put(prof.id, prof).toPromise();
      } else if (this.o.role === 'student') {
        await this.uow.students.put(student.id, student).toPromise();
      }

      this.router.navigate(['/admin/settings/user']);
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

