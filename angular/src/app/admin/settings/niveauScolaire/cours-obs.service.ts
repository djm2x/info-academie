import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Cours } from 'src/app/models/models';

@Injectable()
export class CoursObsService {
  public coursObs = new Subject<Cours>();
  public idCours = 0;
}
