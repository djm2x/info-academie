import { Injectable } from '@angular/core';
import { Prof, Student, User } from '../models/models';

const USER = 'USER';
const STUDENT = 'STUDENT';
const PROF = 'PROF';
const TOKEN = 'TOKEN';

const ADMIN = 'admin';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  public user = new User();
  public student = new Student();
  public prof = new Prof();
  public token = '';

  constructor() {
    this.getSession();
  }
  // se connecter
  public doSignIn(user: User, child: Prof | Student, token) {
    if (!user || !token) {
      return;
    }
    this.user = user;
    localStorage.setItem(USER, (JSON.stringify(this.user)));


    if (this.user.role === 'student') {
      this.student = child as Student;
      localStorage.setItem(STUDENT, (JSON.stringify(this.student)));
    } else if (this.user.role === 'prof') {
      this.prof = child as Prof;
      localStorage.setItem(PROF, (JSON.stringify(this.prof)));
    }

    this.token = token;
    localStorage.setItem(TOKEN, (JSON.stringify(this.token)));
  }

  public updateUser(user: User) {
    if (!user) {
      return;
    }
    this.user = user;
    localStorage.setItem(USER, (JSON.stringify(this.user)));
  }

  get isProf() { return this.user.role = PROF.toLowerCase(); }
  get isStudent() { return this.user.role = STUDENT.toLowerCase(); }
  get role() { return this.user.role; }

  // se deconnecter
  public doSignOut(): void {
    this.user = new User();
    this.student = new Student();
    this.prof = new Prof();
    this.token = '';
    localStorage.removeItem(USER);
    localStorage.removeItem(STUDENT);
    localStorage.removeItem(PROF);
    localStorage.removeItem(TOKEN);
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
        this.student = JSON.parse(localStorage.getItem(TOKEN));
      } else if (this.user.role === 'prof') {
        this.prof = JSON.parse(localStorage.getItem(TOKEN));
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
