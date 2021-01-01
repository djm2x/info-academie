import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cours } from 'src/app/models/models';
import { UowService } from 'src/app/services/uow.service';
import { SessionService } from 'src/app/shared';
import { DataService } from '../data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  id = 0;
  cours = this.data.cours;
  videosUrls: string[] = [];
  filesUrls: string[] = [];
  constructor(private route: ActivatedRoute, public uow: UowService
    , public session: SessionService, public data: DataService) { }

  async ngOnInit() {

    if (this.cours.id === 0) {
      this.id = +this.route.snapshot.paramMap.get('id');
      this.cours = await this.uow.cours.getOne(this.id).toPromise();
    }

    this.cours.videosUrl.split(';').map(e => this.videosUrls.push(e));
    this.cours.filesUrl.split(';').map(e => this.filesUrls.push(e));
  }

}
