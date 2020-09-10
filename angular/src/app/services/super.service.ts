import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { InjectService } from '../inject.service';

// const API_URL = environment.apiUrl;
// @Injectable({
//   providedIn: 'root'
// })
export class SuperService<T> implements ISuperService {

  // @Inject(HttpClient) protected http: HttpClient;



  protected http = InjectService.injector.get(HttpClient);
  protected urlApi: string = InjectService.injector.get('API_URL');
  protected url: string = InjectService.injector.get('BASE_URL');
  s: new () => T;
  constructor(public controller: string) {
    // console.log('this.s.name');
    // console.log(this.s);
   }

  getList(startIndex, pageSize, sortBy, sortDir) {
    return this.http
    .get<{list: T[], count: number}>(`${this.urlApi}/${this.controller}/getList/${startIndex}/${pageSize}/${sortBy}/${sortDir}`);
  }
  count = () => this.http.get<number>(`${this.urlApi}/${this.controller}/count`);


  get = () => this.http.get<T[]>(`${this.urlApi}/${this.controller}`);
  getOne = (id) => this.http.get<T>(`${this.urlApi}/${this.controller}/${id}`);
  post = (o: T) => this.http.post<T>(`${this.urlApi}/${this.controller}`, o);
  put = (id: number | string, o: T) => this.http.put<any>(`${this.urlApi}/${this.controller}/${id}`, o);
  delete = (id) => this.http.delete<any>(`${this.urlApi}/${this.controller}/${id}`);

  autocomplete(column: string, name: string) {
    return this.http.get<T>(`${this.urlApi}/${this.controller}/autocomplete/${column}/${name}`);
  }

  updateRange(o: T[]) {
    // console.log("updating : ", o)
    return this.http.post(`${this.urlApi}/${this.controller}/updateRange`, o);
  }

  postRange(o: T[]) {
    // console.log("updating : ", o)
    return this.http.post(`${this.urlApi}/${this.controller}/postRange`, o);
  }

  putRange(modelsToDelete: T[], modelsToAdd: T[]) {
    console.log({ modelsToDelete, modelsToAdd })
    return this.http.post(`${this.urlApi}/${this.controller}/putRange`, { modelsToDelete, modelsToAdd });
  }

  getByForeignkey(propertyName, value) {
    return this.http.get<T[]>(`${this.urlApi}/${this.controller}/getByForeignkey/${propertyName}/${value}`);
  }

  // these call is just for this project

}

interface ISuperService {
  getList(startIndex, pageSize, sortBy, sortDir): Observable<any>;
  get(controller: string);
  getOne(id, controller: string);
  post(o);
  put(id, o);
  delete(id);
}
