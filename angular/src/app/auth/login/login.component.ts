import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/models';
import { UowService } from 'src/app/services/uow.service';
import { SessionService } from 'src/app/shared';
import { SnackbarService } from 'src/app/shared/snakebar.service';
import { SnackBarService } from 'src/app/loader/snack-bar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  // animations: anime
})
export class LoginComponent implements OnInit, OnDestroy {
  myForm: FormGroup;
  o = new User();
  hide = true;
  profil = true;
  code = '';
  constructor(private fb: FormBuilder, public uow: UowService
    , private router: Router, public session: SessionService
    , private route: ActivatedRoute, public snackBar: SnackBarService
    , @Inject('BASE_URL') public url: string) { }

  async ngOnInit() {
    // test
    this.o.email = `${this.profil ? 'prof' : 'student'}@angular.io`;
    this.o.password = '123';
    this.createForm();

    this.code = this.route.snapshot.paramMap.get('code');

    if (this.code && this.code !== '') {
      this.submitCodeCommingFromEmail();
    }
  }

  changeProfil() {
    this.profil = !this.profil;
    this.myForm.get('email').setValue(this.profil ? 'prof@angular.io' : 'student@angular.io')
  }

  createForm() {
    this.myForm = this.fb.group({
      email: [this.o.email, [Validators.required, Validators.email]],
      password: [this.o.password, [Validators.required]],
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

  submit(o: User) {

    this.uow.accounts.login(o).subscribe((r: any) => {
      // test
      // if (true) {
      //   this.snackBar.notifyOk(200, 'Bienvenue a vous');
      //   this.router.navigate(['/admin']);
      // }
      if (r.code < 0) {
        // console.log(r)
        this.snackBar.notifyAlert(400, r.message);
      } else {
        // console.log(r)
        this.snackBar.notifyOk(200, r.message);
        this.session.doSignIn(r.user, r.child, r.niveau, r.branche, r.token);

        const routeSaved = localStorage.getItem('route');

        this.router.navigate([routeSaved && routeSaved !== '/' ? routeSaved : '/admin']);
      }
    });
  }

  submitCodeCommingFromEmail() {
    this.uow.accounts.activeAccount(this.code).subscribe((r: { message: string, code: number } | any) => {
      if (r.code <= 0) {
        this.snackBar.notifyAlert(400, r.message);
      } else {
        this.snackBar.notifyOk(200, r.message);
        this.session.doSignIn(r.user, r.child, null, null, r.token);
        this.router.navigate(['/admin']);
      }
    });
  }

  resetForm() {
    this.o = new User();
    this.createForm();
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
}
