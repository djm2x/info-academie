export class User {
  id = 0;
  nom = '';
  prenom = '';
  imageUrl = '';
  intro = '';
  email = '';
  tel = '';
  adresse = '';
  cin = '';
  password = '';
  role = '';
  isActive = 0;
  idVille = 0;

  ville = new Ville();
  userDetailUserActivites: DetailUserActivite[] = [];
}

export class Ville {
  id = 0;
  nom = '';
  nomAr = '';

  villeUsers: User[] = [];
}

export class DetailUserActivite {
  id = 0;
  date = new Date();
  idUser = 0;
  idActivite = 0;

  user = new User();
  activite = new Activite();
}

export class TypeActivite {
  id = 0;
  nom = '';
  nomAr = '';
  imageUrl = '';

  typeActiviteActivites: Activite[] = [];
}

export class Activite {
  id = 0;
  nom = '';
  nomAr = '';
  imageUrl = '';
  idTypeActivite = 0;

  typeActivite = new TypeActivite();
  activiteDetailUserActivites: DetailUserActivite[] = [];
}