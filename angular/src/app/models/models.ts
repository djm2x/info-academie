export class User {
  id = 0;
  nom = '';
  prenom = '';
  tel1 = '00';
  tel2 = '00';
  email = '';
  password = '';
  isActive = 0;
  date = new Date();
  adresse = 'temara';
  imageUrl = '';
  cin = '';
  role = '';
  idVille = 1;

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
  description = 'description';
  experience = 'experience';
  approche = 'approche';
  intro = 'intro';
  videoUrl = 'videoUrl';
  cvUrl = 'cvUrl';

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
  ecole = 'ecole';
  niveau = '2';
  nomParent = 'nomParent';
  prenomParent = 'prenomParent';
  tel1Parent = 'tel1Parent';
  tel2Parent = 'tel2Parent';
  
  idUser = 0;
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