import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor5 } from '@ckeditor/ckeditor5-angular';
import { CloudinaryImageUploadAdapter } from 'ckeditor-cloudinary-uploader-adapter';
@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  public Editor = ClassicEditor//;
  // .create(document.querySelector('#editor'), {
  //   cloudServices: {
  //     // tokenUrl: 'https://example.com/cs-token-endpoint',
  //     uploadUrl: 'http://localhost:8000/api/files/angEditorUploadImage/imageAE'
  //   }
  // })
  //   .then(r => console.log(r))
  //   .catch(e => console.log(e));
  description = `<p>My html content</p>`;
  ckconfig: CKEditor5.Config = {
    placeholder: 'Type the content here!',
    // include any other configuration you want
    extraPlugins: [ this.imagePluginFactory ],
  };
  @ViewChild('myckeditor', {static: false}) ckeditor: any;
  mycontent = `<p>My html content</p>`;
  ckeConfig = {
    allowedContent: false,
    extraPlugins: 'divarea',
    forcePasteAsPlainText: true
  };

  options: any = {
    placeholderText: 'Edit Your Content Here!',
    charCounterCount: true,
    // toolbarButtons: ['bold', 'italic', 'underline', 'paragraphFormat', 'alert'],
    // toolbarButtonsXS: ['bold', 'italic', 'underline', 'paragraphFormat', 'alert'],
    // toolbarButtonsSM: ['bold', 'italic', 'underline', 'paragraphFormat', 'alert'],
    // toolbarButtonsMD: ['bold', 'italic', 'underline', 'paragraphFormat', 'alert'],
    imageEditButtons: ['imageDisplay', 'imageAlign', 'imageInfo', 'imageRemove'],
    // events: {
    //   focus: (e, editor) => {
    //     console.log(editor.selection.get());
    //   }
    // }
  };

  o = { description: 'me & you' };
  myForm: FormGroup;
  editmode: boolean;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();

    this.ckeConfig = {
      allowedContent: false,
      extraPlugins: 'divarea',
      forcePasteAsPlainText: true
    };
  }

  createForm() {
    this.myForm = this.fb.group({
      description: [this.o.description, Validators.required],
    });
  }

  submit(o) {
    console.log(o);
  }

  change(e) {
    console.log(e)
  }

  onChange($event: any): void {
    console.log('onChange');
    // this.log += new Date() + "<br />";
  }

  onPaste($event: any): void {
    console.log('onPaste');
    // this.log += new Date() + "<br />";
  }

  imagePluginFactory(editor) {
    editor.plugins.get( 'FileRepository' ).createUploadAdapter = ( loader ) => {
      return new CloudinaryImageUploadAdapter(
        loader
        , 'http://localhost:8000/api/files/angEditorUploadImage/imageAE'
        , 'your unsiged upload preset'
        );
    };
  }

  imagePluginFactoryMy(editor) {
    console.log('TheUploadAdapterPlugin called');
    editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
      return new UploadAdapter(loader, '/image');
    };
  }
}

class UploadAdapter {
  loader;  // your adapter communicates to CKEditor through this
  url;
  constructor(loader, url) {
    this.loader = loader;
    this.url = url;
    console.log('Upload Adapter Constructor', this.loader, this.url);
  }

  upload() {
    return new Promise((resolve, reject) => {
      console.log('UploadAdapter upload called', this.loader, this.url);
      console.log('the file we got was', this.loader.file);
      resolve({ default: 'http://localhost:8000/api/files/angEditorUploadImage/imageAE/1359' });
    });
  }

  abort() {
    console.log('UploadAdapter abort');
  }
}
