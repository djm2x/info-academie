import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { UowService } from 'src/app/services/uow.service';
import { SessionService } from 'src/app/shared';
import { SnackbarService } from 'src/app/shared/snakebar.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/models';
import { SnackBarService } from 'src/app/loader/snack-bar.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  myForm: FormGroup;
  o = new User();
  hide = true;
  hide2 = true;
  checkPassword = new FormControl('', [Validators.required]);


  constructor(private fb: FormBuilder, public uow: UowService
    , private router: Router, public session: SessionService
    , public snackBar: SnackBarService) { }

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

  }

  createForm() {
    this.myForm = this.fb.group({
      id: [this.o.id],
      nom: [this.o.nom, [Validators.required]],
      prenom: [this.o.prenom, [Validators.required]],
      imageUrl: [this.o.imageUrl, []],
      intro: [this.o.intro, []],
      email: [this.o.email, [Validators.required, Validators.email]],
      password: [this.o.password, [Validators.required]],
      tel: [this.o.tel, []],
      adresse: [this.o.adresse, []],
      cin: [this.o.cin, []],
      role: [this.o.role],
      isActive: [this.o.isActive],
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

  submit(o: User) {
    this.uow.accounts.create(o).subscribe((r: any) => {

      console.log(r)
      // this.router.navigate(['/auth']);
      if (r.code < 0) {
        this.snackBar.notifyAlert(400, r.message);
      } else {
        // this.snackBar.notifyOk(200, r.message);
        this.router.navigate(['/auth']);
      }
    });
  }

  resetForm() {
    this.o = new User();
    this.createForm();
  }
}
