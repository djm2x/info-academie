import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { from, Subject } from 'rxjs';
import { concatAll, map } from 'rxjs/operators';
import { FileUploadService } from '../file.upload.service';
import { ProgressComponent } from '../progress/progress.component';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  accepts = {
    doc: 'application/pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document' ,
    video: 'video/mp4,video/*' ,
    audio: 'audio/*' ,
    image: 'image/*' ,
    doc2: '.pdf,.doc,.docx' ,
  };

  listOfNames: string[] = [];
  listToDelete: string[] = [];
  files: File[] = [];

  // @Input() multiple = true;
  // @Input() showSubmitButton = true;
  @Input() nameBtn = '';
  @Input() accept = 'doc';
  // @Input() folderToSaveInServer = 'folder';

  // @Input() propertyOfParent = new Subject();
  // @Input() eventSubmitToParent = new Subject();
  // @Input() eventSubmitFromParent = new Subject();

  @Input() config = {
    multiple: true,
    showSubmitButton: true,
    folderToSaveInServer: 'folder',
    propertyStringToParent: new Subject(),
    propertyStringToUploader: new Subject(),
    eventSubmitToUploader: new Subject(),
  }

  constructor(private service: FileUploadService, private bottomSheet: MatBottomSheet) { }

  ngOnInit() {

    this.config.propertyStringToUploader.subscribe((r: string) => {
      if (!r) {
        return;
      }
      const l = r.split(';');

      l.pop();

      this.listOfNames = l;
      this.listToDelete = [];
    });
    //
    this.config.eventSubmitToUploader.subscribe(async r => {
      await this.submit(r);
    });


  }

  upload(files: FileList) {
    const s = files;
    // let file = null;
    for (let i = 0; i < files.length; i++) {
      // on récupère le i-ème fichier
      const file = files.item(i);

      if (this.config.multiple) {
        this.listOfNames.push(this.setFileName(file));
      } else {
        this.listToDelete.push(this.listOfNames[0])
        this.listOfNames = [this.setFileName(file)];
      }

      this.sendPropertyOfParent();

      this.files.push(file);
      // ou encore

    }
  }

  setIcon(filaName) {
    const i = filaName.lastIndexOf('.');
    const s = filaName.substring(i + 1);
    // console.log(s);
    return (s === 'pdf' || s === 'pdf;') ? 'assets/svg/pdf.svg' : 'assets/svg/word.svg';
  }

  remove(name: string) {

    const i = this.listOfNames.findIndex(e => e === name);

    if (i !== -1) {
      this.listOfNames.splice(i, 1);
      this.sendPropertyOfParent();
    }

    this.listToDelete.push(name);

    // delete from Files

    const indexOf_ = name.indexOf('_');

    const fileName = name.substring(indexOf_);

    const indexFileName = this.files.findIndex(e => e.name === fileName);

    if (indexFileName !== -1) {
      this.files.splice(i, 1);
    }
  }

  openInput(o/*: HTMLInputElement*/) {
    o.click();
  }

  sendPropertyOfParent() {
    let propertyOfParent = '';

    this.listOfNames.forEach(r => {
      propertyOfParent += `${r};`;
    });

    this.config.propertyStringToParent.next(propertyOfParent);
  }

  async submit(value) {
    // cas for new element added
    if (value.id && !this.config.folderToSaveInServer.includes('_')) {
      this.config.folderToSaveInServer = `${this.config.folderToSaveInServer}_${value.id}`;
    }

    const obs = this.bottomSheet.open(ProgressComponent, {
      data: { files: this.files, folder: this.config.folderToSaveInServer },
      panelClass: 'my-component-bottom-sheet',
    });

    obs.afterDismissed().subscribe(async (r) => {
      console.log('Bottom sheet has been dismissed ', r);

      const r2 = await this.service.deleteFiles(this.listToDelete, this.config.folderToSaveInServer).toPromise();

      console.log(r2)
    });
  }

  setFileName(e: File) {
    return `${e.size}_${e.lastModified}_${e.name}`;
  }

}
