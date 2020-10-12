import { SuperService } from './super.service';
import { Injectable } from '@angular/core';
import { Video } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class VideoService extends SuperService<Video> {

  constructor() {
    super('videos');
  }

  getAll(startIndex, pageSize, sortBy, sortDir, title, order, urlVideo, ) {

    return this.http.get(`${this.urlApi}/${this.controller}/getAll/${startIndex}/${pageSize}/${sortBy}/${sortDir}/${title}`);
  }

  getAllForStatistique(title, order, urlVideo, ) {
    return this.http.get(`${this.urlApi}/${this.controller}/getAllForStatistique/${title}/${order}/${urlVideo}`);
  }

}
