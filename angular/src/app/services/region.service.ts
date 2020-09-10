import { Region } from '../models/models';
import { Injectable } from '@angular/core';
import { SuperService } from './super.service';


@Injectable({
  providedIn: 'root'
})
export class RegionService extends SuperService<Region> {

  constructor() {
    super('regions');
  }
}
