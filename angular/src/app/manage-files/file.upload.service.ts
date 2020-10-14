import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()
export class FileUploadService {
  controller = 'files';
  constructor(private http: HttpClient, @Inject('API_URL') private urlApi: string) { }

  deleteFiles(filenames: string[], folder) {
    if (filenames.length === 0) {
      return of(null);
    }
    return this.http.post(`${this.urlApi}/${this.controller}/deleteFiles/`, { filenames, folder });
  }

  uploadFiles0(files: FormData, folder) {
    if (!files) {
      return of(null);
    }

    return this.http.post(`${this.urlApi}/${this.controller}/uploadFiles/${folder}`, files, {
      headers: new HttpHeaders({ enctype: 'multipart/form-data' }),
      reportProgress: true,
    });
  }

  uploadFiles(files: FormData, folder) {
    // tslint:disable-next-line:max-line-length
    return this.http.request(new HttpRequest('POST', `${this.urlApi}/${this.controller}/uploadFiles/${folder}`, files, { reportProgress: true }))
  }

}
