import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  lien = this.data.lien.replace('https://www.youtube.com/watch?v=', '');
  constructor(public dialogRef: MatDialogRef<any>, @Inject(MAT_DIALOG_DATA) public data: { lien: string }) { }

  ngOnInit(): void {
    // const l = this.data.lien;
    // this.lien = l.substring(
    //   l.lastIndexOf('watch?v=') + 1
    // );
    // console.log(this.data.lien)
    // console.log(this.lien)
    const tag = document.createElement('script');

    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

}
