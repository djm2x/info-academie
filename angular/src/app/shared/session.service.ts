import { Injectable } from '@angular/core';
import { Branche, NiveauScolaire, Prof, Student, User } from '../models/models';

const USER = 'USER';
const NAME = 'NAME';
const STUDENT = 'STUDENT';
const NIVEAU = 'NIVEAU';
const BRANCHE = 'BRANCHE';
const PROF = 'PROF';
const TOKEN = 'TOKEN';

const ADMIN = 'admin';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  public user = new User();
  public student = new Student();
  public niveau = new NiveauScolaire();
  public branche = new Branche();
  public prof = new Prof();
  public token = '';

  constructor() {
    this.getSession();
  }
  // se connecter
  public doSignIn(user: User, child: Prof | Student, niveau, branche, token) {
    if (!user || !token) {
      return;
    }
    this.user = user;
    localStorage.setItem(USER, (JSON.stringify(this.user)));
    localStorage.setItem(NAME, this.user.nom + ' ' + this.user.prenom);

    if (this.user.role === 'student') {
      this.student = child as Student;
      localStorage.setItem(STUDENT, (JSON.stringify(this.student)));

      this.branche = branche;
      localStorage.setItem(BRANCHE, (JSON.stringify(this.branche)));

      this.niveau = niveau;
      localStorage.setItem(NIVEAU, (JSON.stringify(this.niveau)));

    } else if (this.user.role === 'prof') {
      this.prof = child as Prof;
      localStorage.setItem(PROF, (JSON.stringify(this.prof)));
    }

    this.token = token;
    localStorage.setItem(TOKEN, (JSON.stringify(this.token)));
  }

  public updateUser(user: User, child: Prof | Student, niveau, branche) {
    if (!user) {
      return;
    }
    this.user = user;
    localStorage.setItem(USER, (JSON.stringify(this.user)));
    localStorage.setItem(NAME, this.user.nom + ' ' + this.user.prenom);

    if (this.user.role === 'student') {
      this.student = child as Student;
      localStorage.setItem(STUDENT, (JSON.stringify(this.student)));

      // this.branche = branche;
      // localStorage.setItem(BRANCHE, (JSON.stringify(this.branche)));

      // this.niveau = niveau;
      // localStorage.setItem(NIVEAU, (JSON.stringify(this.niveau)));


    } else if (this.user.role === 'prof') {
      this.prof = child as Prof;
      localStorage.setItem(PROF, (JSON.stringify(this.prof)));
    }
  }

  get isProf() { return this.user.role === PROF.toLowerCase(); }
  get isStudent() { return this.user.role === STUDENT.toLowerCase(); }
  get role() { return this.user.role; }

  // se deconnecter
  public doSignOut(): void {
    this.user = new User();
    this.student = new Student();
    this.branche = new Branche();
    this.niveau = new NiveauScolaire();
    this.prof = new Prof();
    this.token = '';
    localStorage.removeItem(USER);
    localStorage.removeItem(STUDENT);
    localStorage.removeItem(BRANCHE);
    localStorage.removeItem(NIVEAU);
    localStorage.removeItem(PROF);
    localStorage.removeItem(TOKEN);
    localStorage.removeItem(NAME);
  }

  // this methode is for our auth guard
  get isSignedIn(): boolean {
    return (!!localStorage.getItem(USER)) || (!!localStorage.getItem(TOKEN));
  }

  public getSession(): void {
    try {
      this.user = JSON.parse(localStorage.getItem(USER));
      this.token = JSON.parse(localStorage.getItem(TOKEN));

      if (this.user.role === 'student') {
        this.student = JSON.parse(localStorage.getItem(STUDENT));
        this.branche = JSON.parse(localStorage.getItem(BRANCHE));
        this.niveau = JSON.parse(localStorage.getItem(NIVEAU));
      } else if (this.user.role === 'prof') {
        this.prof = JSON.parse(localStorage.getItem(PROF));
      }

    } catch (error) {
      this.user = new User();
      this.student = new Student();
      this.prof = new Prof();
      this.token = '';
    }
  }



  get isAdmin() {
    return this.user.role === 'admin';
  }

  get typeProfil() {
    if (this.user.role === 'student') {
      return 'Centrale';
    }
    else if (this.user.role === 'prof') {
      return 'Régionale';
    }
    else {
      return 'admin';
    }
  }
}
