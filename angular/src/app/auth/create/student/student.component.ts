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
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  myForm: FormGroup;
  myFormStudent: FormGroup;
  o = new User();
  student = new Student();
  hide = true;
  hide2 = true;
  niveaux = this.uow.niveaux;
  villes = this.uow.villes.get();

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
    this.o.nom = 'student';
    this.o.prenom = 'student';
    this.o.email = 'student2@angular.io';
    this.o.password = '123';
    this.o.role = 'student';
    //
    this.checkPassword.setValue('123');
    this.createForm();
    this.createFormStudent();
    this.optImage.folderToSaveInServer = this.o.id === 0 ? 'users' : `users_${this.o.id}`;
    this.optImage.imageFrom.subscribe(r => this.myForm.get('imageUrl').setValue(r));

    setTimeout(() => {
      this.optImage.imageTo.next(this.o.imageUrl);
    }, 100);

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
      role: ['student'],
      idVille: [this.o.idVille],
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

  submit(o: User, student: Student) {
    o.id = null;
    this.uow.accounts.create(o).subscribe((r: any) => {

      this.optImage.eventSubmitFromParent.next({ id: r.id });
      console.log(r)
      // this.router.navigate(['/auth']);
      if (r.code < 0) {
        this.snackBar.notifyAlert(400, r.message);
      } else {
        student.id = null;
        student.idUser = r.id;
        this.uow.students.post(student).subscribe(p => {
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

  resetFormStudent() {
    this.student = new Student();
    this.createFormStudent();
  }

}
