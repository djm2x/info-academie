// import {Time} from '@angular/common';

export class User {
  id = 0;
  name = 'user';
  email = 'user@angular.io';
  // email_verified_at = ''
  phone = '00';
  password = '123';
  role = '';
  idRegion = 0;
  region = new Region();
  // role = new Role();
  // reservations: Reservation[] = [];
}

export class Role {
  id = 0;
  nom = '';
  users: User[] = [];
}

export class Region {
  id = 0;
  name = '';
  imageUrl = '';
  users: User[] = [];
}

export class Activite {
  id = 0;
  title = '';
  description = '';
  date = new Date();
  imageUrl = '';
  idRegion = 0;
  idUser = 0;
  users = new User();
}

export class Contact {
  id = 0;
  name = '';
  email = '';
  message = '';
  phone = '';
}

export class Planification {
  id = 0;
  title = '';
  description = '';
  date = new Date();
  imageUrl = '';
  idRegion = 0;
  idUser = 0;
  users = new User();
}

export class President {
  id = 0;
  title = '';
  titleAr = '';
  description = '';
  descriptionAr = '';
  date = new Date();
  imageUrl = '';
}

export class Actualite {
  id = 0;
  title = '';
  titleAr = '';
  description = '';
  descriptionAr = '';
  date = new Date();
  imageUrl = '';
}

export class Blog {
  id = 0;
  title = '';
  description = '';
  date = new Date();
  imageUrl = '';
  idRegion = 0;
  idUser = 0;
  users = new User();
}

export class Galerie {
  id = 0;
  title = '';
  description = '';
  date = new Date();
  imageUrl = '';
}

export class NewsLetter {
  id = 0;
  email = '';
  date = new Date();
}
