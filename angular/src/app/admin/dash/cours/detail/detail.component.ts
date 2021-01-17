import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { VideoComponent } from './video/video.component';
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
    , public session: SessionService, public data: DataService
    , public dialog: MatDialog, @Inject('BASE_URL') public url: string) { }

  async ngOnInit() {

    if (this.cours.id === 0) {
      this.id = +this.route.snapshot.paramMap.get('id').split('_').reduceRight(e => e);
      this.cours = await this.uow.cours.getOne(this.id).toPromise();
    }

    this.cours.videosUrl.split(';').map(e => this.videosUrls.push(e));
    this.cours.filesUrl.split(';').map(e => this.filesUrls.push(e));
  }

  openDialog(lien: string) {
    const dialogRef = this.dialog.open(VideoComponent, {
      width: '1100px',
      height: '700px',
      disableClose: true,
      data: { lien }
    });

    return dialogRef.afterClosed();
  }

  async openPdf(file: string) {
    const blob = await this.uow.files.download(`./cours/${this.id}/${file}`).toPromise();

    window.open(URL.createObjectURL(blob.slice(0, blob.size, 'application/pdf;base64')), '_blank');

  }

}
