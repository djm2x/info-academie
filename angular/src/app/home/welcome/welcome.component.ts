import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Activite, Prof, Video, Ville } from 'src/app/models/models';
import { UowService } from 'src/app/services/uow.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  dataSource = new Subject< {
    videos: Video[],
    activites: Activite[],
    villes: Ville[],
    profs: Prof[],
  }>();
  constructor(private uow: UowService) { }

  ngOnInit(): void {
    this.uow.home.welcome().subscribe(r => {
      this.dataSource.next(r);
    });
  }

}
