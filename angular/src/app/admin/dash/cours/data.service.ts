import { Injectable } from '@angular/core';
import { Cours } from 'src/app/models/models';

@Injectable()
export class DataService {
  cours = new Cours();
  constructor() { }
}
