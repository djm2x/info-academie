import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { SnackBarService } from 'src/app/loader/snack-bar.service';
import { ContactUs, Message } from 'src/app/models/models';
import { MyTranslateService } from 'src/app/my.translate.service';
import { UowService } from 'src/app/services/uow.service';
import { SessionService } from 'src/app/shared';


@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {
  myForm: FormGroup;
  myFormStudent: FormGroup;
  o = new ContactUs();

  constructor(private fb: FormBuilder, public uow: UowService
    , private router: Router, public session: SessionService
    , public snackBar: SnackBarService, public myTrans: MyTranslateService) { }

  async ngOnInit() {
    // test
    this.o.object = 'object';
    this.o.msg = 'msg';
    this.createForm()
  }

  createForm() {
    this.myForm = this.fb.group({
      id: [this.o.id],
      object: [this.o.object, [Validators.required]],
      msg: [this.o.msg, [Validators.required]],
      date: [this.o.date, []],
      idUser: [this.session.user.id, []],
    });
  }

  submit(o: ContactUs) {
    // o.id = null;
    this.uow.contactUss.post(o).subscribe((r: any) => {


    });
  }

  resetForm() {
    this.o = new ContactUs();
    this.createForm();
  }

}
