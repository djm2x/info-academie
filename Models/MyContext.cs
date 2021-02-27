using Microsoft.EntityFrameworkCore;

namespace Models
{
    public partial class MyContext : DbContext
    {
        public MyContext(DbContextOptions<MyContext> options) : base(options) { }

        public virtual DbSet<User> Users { get; set; } 
public virtual DbSet<Discussion> Discussions { get; set; } 
public virtual DbSet<Message> Messages { get; set; } 
public virtual DbSet<EventProf> EventProfs { get; set; } 
public virtual DbSet<Ville> Villes { get; set; } 
public virtual DbSet<DetailUserActivite> DetailUserActivites { get; set; } 
public virtual DbSet<TypeActivite> TypeActivites { get; set; } 
public virtual DbSet<Activite> Activites { get; set; } 
public virtual DbSet<Prof> Profs { get; set; } 
public virtual DbSet<Student> Students { get; set; } 
public virtual DbSet<TypeCours> TypeCourss { get; set; } 
public virtual DbSet<LieuCours> LieuCourss { get; set; } 
public virtual DbSet<NiveauScolaire> NiveauScolaires { get; set; } 
public virtual DbSet<Branche> Branches { get; set; } 
public virtual DbSet<Cours> Courss { get; set; } 
public virtual DbSet<ContactUs> ContactUss { get; set; } 
public virtual DbSet<Video> Videos { get; set; } 
public virtual DbSet<OffreProf> OffreProfs { get; set; } 
public virtual DbSet<Quiz> Quizs { get; set; } 
public virtual DbSet<Question> Questions { get; set; } 
public virtual DbSet<Response> Responses { get; set; } 


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>(entity => 
{entity.HasKey(e => e.Id);
entity.Property(e => e.Id).ValueGeneratedOnAdd();
entity.Property(e => e.Nom);
entity.Property(e => e.Prenom);
entity.Property(e => e.Tel1);
entity.Property(e => e.Tel2);
entity.HasIndex(e => e.Email).IsUnique();
entity.Property(e => e.Password);
entity.Property(e => e.IsActive);
entity.Property(e => e.Date);
entity.Property(e => e.Adresse);
entity.Property(e => e.ImageUrl);
entity.Property(e => e.Cin);
entity.Property(e => e.Role);
entity.Property(e => e.IdVille);
entity.HasOne(e => e.Ville).WithMany(e => e.Users).HasForeignKey(e => e.IdVille);
entity.HasMany(e => e.Activites).WithOne(p => p.User).HasForeignKey(e => e.IdUser).OnDelete(DeleteBehavior.Cascade);
entity.HasMany(e => e.ContactUs).WithOne(p => p.User).HasForeignKey(e => e.IdUser).OnDelete(DeleteBehavior.Cascade);
});

modelBuilder.Entity<Discussion>(entity => 
{entity.HasKey(e => e.Id);
entity.Property(e => e.Id).ValueGeneratedOnAdd();
entity.Property(e => e.UnReaded);
entity.Property(e => e.Date);
entity.Property(e => e.IdMe);
entity.Property(e => e.IdOtherUser);
entity.HasOne(e => e.Me).WithMany(e => e.Discussions).HasForeignKey(e => e.IdMe);
entity.HasOne(e => e.Otheruser).WithMany(e => e.Discussions).HasForeignKey(e => e.IdOtheruser);
entity.HasMany(e => e.Messages).WithOne(p => p.Discussion).HasForeignKey(e => e.IdDiscussion).OnDelete(DeleteBehavior.Cascade);
});

modelBuilder.Entity<Message>(entity => 
{entity.HasKey(e => e.Id);
entity.Property(e => e.Id).ValueGeneratedOnAdd();
entity.Property(e => e.Object);
entity.Property(e => e.Message);
entity.Property(e => e.Vu);
entity.Property(e => e.Date);
entity.Property(e => e.IdCours);
entity.Property(e => e.OtherUserName);
entity.Property(e => e.OtherUserImage);
entity.Property(e => e.IdMe);
entity.Property(e => e.IdOtherUser);
entity.Property(e => e.IdDiscussion);
entity.HasOne(e => e.Me).WithMany(e => e.Messages).HasForeignKey(e => e.IdMe);
entity.HasOne(e => e.Otheruser).WithMany(e => e.Messages).HasForeignKey(e => e.IdOtheruser);
entity.HasOne(e => e.Discussion).WithMany(e => e.Messages).HasForeignKey(e => e.IdDiscussion);
});

modelBuilder.Entity<EventProf>(entity => 
{entity.HasKey(e => e.Id);
entity.Property(e => e.Id).ValueGeneratedOnAdd();
entity.Property(e => e.Title);
entity.Property(e => e.Start);
entity.Property(e => e.End);
entity.Property(e => e.Color);
entity.Property(e => e.Draggable);
entity.Property(e => e.Resizable);
entity.Property(e => e.Month);
entity.Property(e => e.Year);
entity.Property(e => e.IdUser);
entity.HasOne(e => e.User).WithMany(e => e.EventProfs).HasForeignKey(e => e.IdUser);
});

modelBuilder.Entity<Ville>(entity => 
{entity.HasKey(e => e.Id);
entity.Property(e => e.Id).ValueGeneratedOnAdd();
entity.Property(e => e.Nom);
entity.Property(e => e.NomAr);
entity.HasMany(e => e.VilleUsers).WithOne(p => p.Ville).HasForeignKey(e => e.IdVille).OnDelete(DeleteBehavior.Cascade);
});

modelBuilder.Entity<DetailUserActivite>(entity => 
{entity.HasKey(e => e.Id);
entity.Property(e => e.Id).ValueGeneratedOnAdd();
entity.Property(e => e.Date);
entity.Property(e => e.IdUser);
entity.Property(e => e.IdActivite);
entity.HasOne(e => e.User).WithMany(e => e.DetailUserActivites).HasForeignKey(e => e.IdUser);
entity.HasOne(e => e.Activite).WithMany(e => e.DetailUserActivites).HasForeignKey(e => e.IdActivite);
});

modelBuilder.Entity<TypeActivite>(entity => 
{entity.HasKey(e => e.Id);
entity.Property(e => e.Id).ValueGeneratedOnAdd();
entity.Property(e => e.Nom);
entity.Property(e => e.NomAr);
entity.Property(e => e.ImageUrl);
entity.Property(e => e.Active);
entity.HasMany(e => e.Activites).WithOne(p => p.TypeActivite).HasForeignKey(e => e.IdTypeActivite).OnDelete(DeleteBehavior.Cascade);
});

modelBuilder.Entity<Activite>(entity => 
{entity.HasKey(e => e.Id);
entity.Property(e => e.Id).ValueGeneratedOnAdd();
entity.Property(e => e.Nom);
entity.Property(e => e.NomAr);
entity.Property(e => e.ImageUrl);
entity.Property(e => e.IdTypeActivite);
entity.HasOne(e => e.Type_activite).WithMany(e => e.Activites).HasForeignKey(e => e.IdType_activite);
entity.HasMany(e => e.ActiviteDetailUserActivites).WithOne(p => p.Activite).HasForeignKey(e => e.IdActivite).OnDelete(DeleteBehavior.Cascade);
});

modelBuilder.Entity<Prof>(entity => 
{entity.HasKey(e => e.Id);
entity.Property(e => e.Id).ValueGeneratedOnAdd();
entity.Property(e => e.Lien);
entity.Property(e => e.Description);
entity.Property(e => e.Experience);
entity.Property(e => e.Approche);
entity.Property(e => e.Intro);
entity.Property(e => e.VideoUrl);
entity.Property(e => e.CvUrl);
entity.Property(e => e.Note);
entity.Property(e => e.PrixHrWeb);
entity.Property(e => e.PrixHrHome);
entity.Property(e => e.PrixHrWebGroupe);
entity.Property(e => e.PrixHrHomeGroupe);
entity.Property(e => e.IdsTypeActivites);
entity.Property(e => e.IdsActivites);
entity.Property(e => e.IdsTypeCours);
entity.Property(e => e.IdsLieuCours);
entity.Property(e => e.IdsNiveauScolaires);
entity.Property(e => e.IdUser);
entity.HasOne(e => e.User).WithMany(e => e.Profs).HasForeignKey(e => e.IdUser);
});

modelBuilder.Entity<Student>(entity => 
{entity.HasKey(e => e.Id);
entity.Property(e => e.Id).ValueGeneratedOnAdd();
entity.Property(e => e.Ecole);
entity.Property(e => e.Niveau);
entity.Property(e => e.Branche);
entity.Property(e => e.NomParent);
entity.Property(e => e.PrenomParent);
entity.Property(e => e.Tel1Parent);
entity.Property(e => e.Tel2Parent);
entity.Property(e => e.IdUser);
entity.HasOne(e => e.User).WithMany(e => e.Students).HasForeignKey(e => e.IdUser);
entity.HasOne(e => e.Activite).WithMany(e => e.Students).HasForeignKey(e => e.IdActivite);
});

modelBuilder.Entity<TypeCours>(entity => 
{entity.HasKey(e => e.Id);
entity.Property(e => e.Id).ValueGeneratedOnAdd();
entity.Property(e => e.Nom);
entity.Property(e => e.NomAr);
});

modelBuilder.Entity<LieuCours>(entity => 
{entity.HasKey(e => e.Id);
entity.Property(e => e.Id).ValueGeneratedOnAdd();
entity.Property(e => e.Nom);
entity.Property(e => e.NomAr);
});

modelBuilder.Entity<NiveauScolaire>(entity => 
{entity.HasKey(e => e.Id);
entity.Property(e => e.Id).ValueGeneratedOnAdd();
entity.Property(e => e.Nom);
entity.Property(e => e.NomAr);
entity.Property(e => e.IdCycle);
entity.Property(e => e.CoursLigneGroupe);
entity.Property(e => e.CoursLigneIndividuel);
entity.Property(e => e.CoursDomicileGroupe);
entity.Property(e => e.CoursDomicileIndividuel);
});

modelBuilder.Entity<Branche>(entity => 
{entity.HasKey(e => e.Id);
entity.Property(e => e.Id).ValueGeneratedOnAdd();
entity.Property(e => e.Nom);
entity.Property(e => e.NomAr);
entity.Property(e => e.IdNiveauScolaire);
entity.HasOne(e => e.Niveau_scolaire).WithMany(e => e.Branches).HasForeignKey(e => e.IdNiveau_scolaire);
});

modelBuilder.Entity<Cours>(entity => 
{entity.HasKey(e => e.Id);
entity.Property(e => e.Id).ValueGeneratedOnAdd();
entity.Property(e => e.Nom);
entity.Property(e => e.NomAr);
entity.Property(e => e.FilesUrl);
entity.Property(e => e.VideosUrl);
entity.Property(e => e.Semester);
entity.Property(e => e.IdBranche);
entity.HasOne(e => e.Branche).WithMany(e => e.Courss).HasForeignKey(e => e.IdBranche);
entity.Property(e => e.IdNiveauScolaire);
entity.HasOne(e => e.Niveau_scolaire).WithMany(e => e.Courss).HasForeignKey(e => e.IdNiveau_scolaire);
entity.HasMany(e => e.Quizzes).WithOne(p => p.Cours).HasForeignKey(e => e.IdCours).OnDelete(DeleteBehavior.Cascade);
});

modelBuilder.Entity<ContactUs>(entity => 
{entity.HasKey(e => e.Id);
entity.Property(e => e.Id).ValueGeneratedOnAdd();
entity.Property(e => e.Object);
entity.Property(e => e.Msg);
entity.Property(e => e.Date);
entity.Property(e => e.IdUser);
entity.HasOne(e => e.User).WithMany(e => e.ContactUss).HasForeignKey(e => e.IdUser);
});

modelBuilder.Entity<Video>(entity => 
{entity.HasKey(e => e.Id);
entity.Property(e => e.Id).ValueGeneratedOnAdd();
entity.Property(e => e.Title);
entity.Property(e => e.Order);
entity.Property(e => e.Description);
entity.Property(e => e.Date);
entity.Property(e => e.UrlVideo);
});

modelBuilder.Entity<OffreProf>(entity => 
{entity.HasKey(e => e.Id);
entity.Property(e => e.Id).ValueGeneratedOnAdd();
entity.Property(e => e.Interval);
entity.Property(e => e.Value);
entity.Property(e => e.IdTypeCours);
entity.HasOne(e => e.Type_cours).WithMany(e => e.OffreProfs).HasForeignKey(e => e.IdType_cours);
});

modelBuilder.Entity<Quiz>(entity => 
{entity.HasKey(e => e.Id);
entity.Property(e => e.Id).ValueGeneratedOnAdd();
entity.Property(e => e.Title);
entity.Property(e => e.Description);
entity.Property(e => e.EnableTime);
entity.Property(e => e.Date);
entity.Property(e => e.IsActive);
entity.Property(e => e.IdContext);
entity.HasOne(e => e.Context).WithMany(e => e.Quizs).HasForeignKey(e => e.IdContext);
entity.HasMany(e => e.Questions).WithOne(p => p.Quiz).HasForeignKey(e => e.IdQuiz).OnDelete(DeleteBehavior.Cascade);
});

modelBuilder.Entity<Question>(entity => 
{entity.HasKey(e => e.Id);
entity.Property(e => e.Id).ValueGeneratedOnAdd();
entity.Property(e => e.Value);
entity.Property(e => e.Responses);
entity.Property(e => e.Choices);
entity.Property(e => e.IsMultiChoises);
entity.Property(e => e.Time);
entity.Property(e => e.IdQuiz);
entity.HasOne(e => e.Quiz).WithMany(e => e.Questions).HasForeignKey(e => e.IdQuiz);
});

modelBuilder.Entity<Response>(entity => 
{entity.HasKey(e => e.Id);
entity.Property(e => e.Id).ValueGeneratedOnAdd();
entity.Property(e => e.TrueResponse);
entity.Property(e => e.UserResponse);
entity.Property(e => e.Date);
entity.Property(e => e.Note);
entity.Property(e => e.IdQuestion);
entity.HasOne(e => e.Question).WithMany(e => e.Responses).HasForeignKey(e => e.IdQuestion);
entity.Property(e => e.IdUser);
entity.HasOne(e => e.User).WithMany(e => e.Responses).HasForeignKey(e => e.IdUser);
});




            modelBuilder
                .Videos()
.LieuCourss()
.TypeCourss()
.TypeActivites()
.Villes()
.Users()
.Discussions()
.Messages()
.EventProfs()
.DetailUserActivites()
.Activites()
.Profs()
.Students()
.NiveauScolaires()
.Branches()
.Courss()
.ContactUss()
.OffreProfs()
.Quizs()
.Questions()
.Responses()

                ;
        }


        // partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
