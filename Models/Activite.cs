using System;
using System.Collections.Generic;
namespace Models
{
public partial class Activite 
{public int Id { get; set; }
public string Nom { get; set; }
public string NomAr { get; set; }
public string ImageUrl { get; set; }
public int IdTypeActivite { get; set; }
public virtual TypeActivite Type_activite { get; set; }
public virtual ICollection<DetailUserActivite> ActiviteDetailUserActivites { get; set; }
}
}
