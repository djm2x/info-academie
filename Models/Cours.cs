using System;
using System.Collections.Generic;
namespace Models
{
public partial class Cours 
{public int Id { get; set; }
public string Nom { get; set; }
public string NomAr { get; set; }
public string FilesUrl { get; set; }
public string VideosUrl { get; set; }
public int Semester { get; set; }
public int IdBranche { get; set; }
public virtual Branche Branche { get; set; }
public int IdNiveauScolaire { get; set; }
public virtual NiveauScolaire Niveau_scolaire { get; set; }
public virtual ICollection<Quiz> Quizzes { get; set; }
}
}
