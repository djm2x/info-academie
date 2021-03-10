import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SnackBarService } from 'src/app/loader/snack-bar.service';
import { Prof, Student, User } from 'src/app/models/models';
import { UowService } from 'src/app/services/uow.service';
import { SessionService } from 'src/app/shared';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.scss']
})
export class MeComponent implements OnInit {
  user = new User();
  student = new Student();
  prof = new Prof();
  lien = new FormControl();

  hideImput = true;

  constructor(public session: SessionService, private uow: UowService
    , public snackBar: SnackBarService, @Inject('BASE_URL') private url: string) { }

  ngOnInit(): void {
    this.user = this.session.user;
    if (this.session.isProf) {
      this.prof = this.session.prof;
      this.lien.setValue(this.prof?.lien)
    } else if (this.session.isStudent) {
      this.student = this.session.student;
    }
  }

  imgError(img: any) {

    img.src = 'assets/404.png';
  }

  updateLink(lien: string) {

    if (this.session.isProf) {
      this.uow.profs.updateLink(this.user.id, lien.replace(/\//g, '@').trim()).subscribe(r => {
        if (r !== '') {
          this.prof.lien = r.lien as string;

          console.log(r)
          this.session.updateUser(this.user, this.prof, null, null);
          this.snackBar.notifyOk(200, `Lien >>${r.lien}<< à été Crée`);
        }
      });
    }
  }

  openLink(url: string) {
    window.open(url);
  }

  displayImage(imageUrl: string) {
    return `${this.url}/users/${this.user.id}/${imageUrl?.slice(0, -1)}`;
  }

}
