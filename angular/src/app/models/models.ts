export class User {
  id = 0;
  nom = '';
  prenom = '';
  tel1 = '';
  tel2 = '';
  email = '';
  password = '';
  isActive = 0;
  date = new Date();
  adresse = '';
  imageUrl = '';
  cin = '';
  role = '';
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

  activites: Activite[] = [];
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

export class Prof {
  id = 0;
  experience = '';
  approche = '';
  intro = '';
  videoUrl = '';
  cvUrl = '';

  prixHrWeb = 0;
  prixHrHome = 0;
  prixHrWebGroupe = 0;
  prixHrHomeGroupe = 0;

  idsTypeActivites = '';
  idsActivites = '';
  idsTypeCours = '';
  idsLieuCours = '';
  idsNiveauScolaires = '';
  
  idUser = '';
  user = new User();
}

export class Student {
  id = 0;
  ecole = '';
  niveau = '';
  nomParent = '';
  prenomParent = '';
  tel1Parent = '';
  tel2Parent = '';
  

  user = new User();
  activite = new Activite();
}

export class TypeCours {
  id = 0;
  nom = '';
  nomAr = '';
}

export class LieuCours {
  id = 0;
  nom = '';
  nomAr = '';
}

export class NiveauScolaire {
  id = 0;
  nom = '';
  nomAr = '';
}