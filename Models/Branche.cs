using System;
using System.Collections.Generic;
namespace Models
{
public partial class Branche 
{public int Id { get; set; }
public string Nom { get; set; }
public string NomAr { get; set; }
public int IdNiveauScolaire { get; set; }
public virtual NiveauScolaire Niveau_scolaire { get; set; }
}
}
