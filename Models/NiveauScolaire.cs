using System;
using System.Collections.Generic;
namespace Models
{
    public partial class NiveauScolaire
    {
        public int Id { get; set; }
        public string Nom { get; set; }
        public string NomAr { get; set; }
        public int IdCycle { get; set; }
        public int CoursLigneGroupe { get; set; }
        public int CoursLigneIndividuel { get; set; }
        public int CoursDomicileGroupe { get; set; }
        public int CoursDomicileIndividuel { get; set; }
        public virtual ICollection<Branche> Branches { get; set; }
        public virtual ICollection<Cours> Courses { get; set; }

    }
}
