import { Component, OnInit, Inject } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-download-sheet',
  templateUrl: './download-sheet.component.html',
  styleUrls: ['./download-sheet.component.scss']
})
export class DownloadSheetComponent implements OnInit {

  list: string[] = [];
  folder = '';
  id = 0;
  constructor(private bottomSheetRef: MatBottomSheetRef<DownloadSheetComponent>
    , @Inject(MAT_BOTTOM_SHEET_DATA) public data: any, @Inject('BASE_URL') public url: string) { }

  ngOnInit() {
    if (this.data.elementUrl) {
      const l = this.data.elementUrl.split(';');
      this.id = this.data.id;
      l.pop();

      this.folder = this.data.folder;
      this.list = l;
    }
  }

  async openLink(elementUrl: string) {

    if (elementUrl.includes('http')) {
      window.open(elementUrl, '_blanc');
    } else {
      const url = `${this.url}/${this.folder}/${this.id}/${elementUrl}`;
      window.open(url, '_blanc');
    }
  }

}
