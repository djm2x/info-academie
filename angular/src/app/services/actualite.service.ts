import { Actualite } from '../models/models';
import { Injectable } from '@angular/core';
import { SuperService } from './super.service';


@Injectable({
  providedIn: 'root'
})
export class ActualiteService extends SuperService<Actualite> {

  constructor() {
    super('actualites');
  }
}
