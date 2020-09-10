import { AngularEditorConfig } from '@kolkov/angular-editor';
import { environment } from 'src/environments/environment';

export const editorConfig: AngularEditorConfig = {
  editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '0',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    outline: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: 'p',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      {class: 'arial', name: 'Arial'},
      {class: 'times-new-roman', name: 'Times New Roman'},
      {class: 'calibri', name: 'Calibri'},
      {class: 'comic-sans-ms', name: 'Comic Sans MS'}
    ],
    customClasses: [
    {
      name: 'quote',
      class: 'quote',
    },
    {
      name: 'redText',
      class: 'redText'
    },
    {
      name: 'titleText',
      class: 'titleText',
      tag: 'h1',
    },
  ],
  uploadUrl: environment.production ?
    `${window.location.origin}/api/files/angEditorUploadImage/imageAE` : 'http://localhost:8000/api/files/angEditorUploadImage/imageAE',
  uploadWithCredentials: false,
  sanitize: false,
  toolbarPosition: 'top',
  // toolbarHiddenButtons: [
  //   ['bold', 'italic'],
  //   ['fontSize']
  // ]
};
