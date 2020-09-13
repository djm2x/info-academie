import { Injectable } from '@angular/core';
import { Utilisateur } from '../models/models';

const USER = 'USER';
const TOKEN = 'TOKEN';

const ADMIN = 'admin';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  public user = new Utilisateur();
  public token = '';

  constructor() {
    this.getSession();
  }
  // se connecter
  public doSignIn(user: Utilisateur, token) {
    if (!user || !token) {
      return;
    }
    this.user = user;
    this.token = token;
    localStorage.setItem(USER, (JSON.stringify(this.user)));
    localStorage.setItem(TOKEN, (JSON.stringify(this.token)));
  }

  public updateUtilisateur(user: Utilisateur) {
    if (!user) {
      return;
    }
    this.user = user;
    localStorage.setItem(USER, (JSON.stringify(this.user)));
  }

  // se deconnecter
  public doSignOut(): void {
    this.user = new Utilisateur();
    localStorage.removeItem(USER);
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
    } catch (error) {
      this.user = new Utilisateur();
      this.token = '';
    }
  }

  get getUtilisateur() {
    return this.user;
  }

  get isCentral() {
    return this.user.idTypeprofil === 1;
  }

  get isRegional() {
    return this.user.idTypeprofil === 2;
  }

  get isEnrUser() {
    return this.user.departement.includes('EnRs & EE');
  }

  get isCombustibleUser() {
    return this.user.departement.includes('Combustibles');
  }

  get isMineUser() {
    return this.user.departement.includes('Mines');
  }
  get isAMAUser() {
    return this.user.departement.includes('AMA');
  }
  get isControleUser() {
    return this.user.departement.includes('Contrôle');
  }

  get isAdmin() {
    return this.user.idTypeprofil === 3;
  }

  get typeProfil() {
    if (this.user.idTypeprofil === 1)
      return 'Centrale';
    else if (this.user.idTypeprofil === 2)
      return 'Régionale';
    else
      return 'Administrateur';
  }
}
