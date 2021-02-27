using System;
using System.Collections.Generic;
namespace Models
{
public partial class Student 
{public int Id { get; set; }
public string Ecole { get; set; }
public int Niveau { get; set; }
public int Branche { get; set; }
public int? NomParent { get; set; }
public int? PrenomParent { get; set; }
public int? Tel1Parent { get; set; }
public int? Tel2Parent { get; set; }
public int IdUser { get; set; }
public virtual User User { get; set; }
public virtual Activite Activite { get; set; }
}
}
