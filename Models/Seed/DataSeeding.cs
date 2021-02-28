using System;
using System.Collections.Generic;
using Bogus;
using Microsoft.EntityFrameworkCore;
namespace Models
{
    public static class DataSeeding
    {
        public static string lang = "fr";

        public static ModelBuilder Videos(this ModelBuilder modelBuilder)
        {
            int id = 1;
            var faker = new Faker<Video>(DataSeeding.lang)
                .CustomInstantiator(f => new Video { Id = id++ })
.RuleFor(o => o.Title, f => f.Lorem.Word())
.RuleFor(o => o.Order, f => f.Random.Number(1, 10))
.RuleFor(o => o.Description, f => f.Lorem.Word())
.RuleFor(o => o.Date, f => f.Date.Past())
.RuleFor(o => o.UrlVideo, f => f.Lorem.Word())
;
            modelBuilder.Entity<Video>().HasData(faker.Generate(10));
            return modelBuilder;
        }

        public static ModelBuilder LieuCourses(this ModelBuilder modelBuilder)
        {
            int id = 1;
            var l = new[] { "Donner des cours à distance", "Aller au domicile de l'élève", "Accueillez l'étudiant chez moi" };
            var l2 = new[] { "إعطاء دروس عن بعد", "الذهاب لمنزل التلميذ", "استقبال التلميذ في منزلي" };
            var faker = new Faker<LieuCours>(DataSeeding.lang)
                .CustomInstantiator(f => new LieuCours { Id = id++ })
                .RuleFor(o => o.Nom, f => l[id - 2])
                .RuleFor(o => o.NomAr, f => l2[id - 2])
                ;
            modelBuilder.Entity<LieuCours>().HasData(faker.Generate(3));
            return modelBuilder;
        }

        public static ModelBuilder TypeCourss(this ModelBuilder modelBuilder)
        {
            int id = 1;
            var faker = new Faker<TypeCours>(DataSeeding.lang)
                .CustomInstantiator(f => new TypeCours { Id = id++ })
.RuleFor(o => o.Nom, f => f.Lorem.Word())
.RuleFor(o => o.NomAr, f => f.Lorem.Word())
;
            modelBuilder.Entity<TypeCours>().HasData(faker.Generate(10));
            return modelBuilder;
        }

        public static ModelBuilder TypeActivites(this ModelBuilder modelBuilder)
        {
            int id = 1;
            var faker = new Faker<TypeActivite>(DataSeeding.lang)
                .CustomInstantiator(f => new TypeActivite { Id = id++ })
.RuleFor(o => o.Nom, f => f.Lorem.Word())
.RuleFor(o => o.NomAr, f => f.Lorem.Word())
.RuleFor(o => o.ImageUrl, f => "")
.RuleFor(o => o.Active, f => id - 1 == 1 ? true : f.Random.Bool())
;
            modelBuilder.Entity<TypeActivite>().HasData(faker.Generate(10));
            return modelBuilder;
        }

        public static ModelBuilder Villes(this ModelBuilder modelBuilder)
        {
            int id = 1;
            var faker = new Faker<Ville>(DataSeeding.lang)
                .CustomInstantiator(f => new Ville { Id = id++ })
.RuleFor(o => o.Nom, f => f.Lorem.Word())
.RuleFor(o => o.NomAr, f => f.Lorem.Word())
;
            modelBuilder.Entity<Ville>().HasData(faker.Generate(10));
            return modelBuilder;
        }

        public static ModelBuilder Users(this ModelBuilder modelBuilder)
        {
            int id = 1;
            var faker = new Faker<User>(DataSeeding.lang)
                .CustomInstantiator(f => new User { Id = id++ })
.RuleFor(o => o.Nom, f => f.Lorem.Word())
.RuleFor(o => o.Prenom, f => f.Lorem.Word())
.RuleFor(o => o.Tel1, f => f.Lorem.Word())
.RuleFor(o => o.Tel2, f => f.Lorem.Word())
.RuleFor(o => o.Email, f => id - 1 == 1 ? "sa@angular.io" : f.Internet.Email())
.RuleFor(o => o.Password, f => "123")
.RuleFor(o => o.IsActive, f => id - 1 == 1 ? true : f.Random.Bool())
.RuleFor(o => o.Date, f => f.Date.Past())
.RuleFor(o => o.Adresse, f => f.Lorem.Word())
.RuleFor(o => o.ImageUrl, f => "")
.RuleFor(o => o.Cin, f => f.Lorem.Word())
.RuleFor(o => o.Role, f => f.Lorem.Word())
.RuleFor(o => o.IdVille, f => f.Random.Number(1, 10))
;
            modelBuilder.Entity<User>().HasData(faker.Generate(10));
            return modelBuilder;
        }

        public static ModelBuilder Discussions(this ModelBuilder modelBuilder)
        {
            int id = 1;
            var faker = new Faker<Discussion>(DataSeeding.lang)
                .CustomInstantiator(f => new Discussion { Id = id++ })
.RuleFor(o => o.UnReaded, f => f.Random.Number(1, 10))
.RuleFor(o => o.Date, f => f.Date.Past())
.RuleFor(o => o.IdMe, f => f.Random.Number(1, 10))
.RuleFor(o => o.IdOtherUser, f => f.Random.Number(1, 10))
;
            modelBuilder.Entity<Discussion>().HasData(faker.Generate(10));
            return modelBuilder;
        }

        public static ModelBuilder Messages(this ModelBuilder modelBuilder)
        {
            int id = 1;
            var i = 1;
            var faker = new Faker<Message>(DataSeeding.lang)
                .CustomInstantiator(f => new Message { Id = id++ })
                .RuleFor(o => o.Object, f => f.Lorem.Word())
                .RuleFor(o => o.Content, f => f.Lorem.Word())
                .RuleFor(o => o.Vu, f => id - 1 == 1 ? true : f.Random.Bool())
                .RuleFor(o => o.Date, f => f.Date.Past())
                .RuleFor(o => o.IdCours, f => f.Random.Number(1, 10))
                .RuleFor(o => o.OtherUserName, f => f.Lorem.Word())
                .RuleFor(o => o.OtherUserImage, f => "")
                .RuleFor(o => o.IdMe, f => 1)
                .RuleFor(o => o.IdOtherUser, f =>
                {
                    i++;
                    if (i + 51 <= 61)
                    {
                        return i + 51;
                    }
                    else
                    {
                        i = 1;
                        return i + 51;
                    }
                })
                .RuleFor(o => o.IdDiscussion, f => i)
                ;
            modelBuilder.Entity<Message>().HasData(faker.Generate(10));
            return modelBuilder;
        }

        public static ModelBuilder EventProfs(this ModelBuilder modelBuilder)
        {
            int id = 1;
            var faker = new Faker<EventProf>(DataSeeding.lang)
                .CustomInstantiator(f => new EventProf { Id = id++ })
                .RuleFor(o => o.Title, f => f.Lorem.Word())
                .RuleFor(o => o.Start, f => f.Date.Past())
                .RuleFor(o => o.End, f => f.Date.Past())
                .RuleFor(o => o.Color, f => "#ad2121_#FAE3E3")
                .RuleFor(o => o.Draggable, f => id - 1 == 1 ? true : f.Random.Bool())
                .RuleFor(o => o.Resizable, f => "1_1")
                .RuleFor(o => o.Month, f => f.Random.Number(1, 12))
                .RuleFor(o => o.Year, f => f.Random.Number(2021, 2022))
                .RuleFor(o => o.IdUser, f => f.Random.Number(1, 10))
                ;
            modelBuilder.Entity<EventProf>().HasData(faker.Generate(10));
            return modelBuilder;
        }

        public static ModelBuilder DetailUserActivites(this ModelBuilder modelBuilder)
        {
            int id = 1;
            var faker = new Faker<DetailUserActivite>(DataSeeding.lang)
                .CustomInstantiator(f => new DetailUserActivite { Id = id++ })
.RuleFor(o => o.Date, f => f.Date.Past())
.RuleFor(o => o.IdUser, f => f.Random.Number(1, 10))
.RuleFor(o => o.IdActivite, f => f.Random.Number(1, 10))
;
            modelBuilder.Entity<DetailUserActivite>().HasData(faker.Generate(10));
            return modelBuilder;
        }

        public static ModelBuilder Activites(this ModelBuilder modelBuilder)
        {

            var list = new Activite[] {
                new Activite {Id = 1, Nom = "Math", NomAr = "رياضيات", ImageUrl = "", IdTypeActivite = 1},
                new Activite {Id = 2, Nom = "Arab", NomAr = "عرب", ImageUrl = "", IdTypeActivite = 1},
                new Activite {Id = 3, Nom = "Français", NomAr = "فرنسي", ImageUrl = "", IdTypeActivite = 1},
                new Activite {Id = 4, Nom = "Arab", NomAr = "عرب", ImageUrl = "", IdTypeActivite = 2},
                new Activite {Id = 5, Nom = "Français", NomAr = "فرنسي", ImageUrl = "", IdTypeActivite = 2},
                new Activite {Id = 6, Nom = "Anglais", NomAr = "الإنجليزية", ImageUrl = "", IdTypeActivite = 2},
                new Activite {Id = 7, Nom = "dessin", NomAr = "رسم", ImageUrl = "", IdTypeActivite = 3},
                new Activite {Id = 8, Nom = "calcule", NomAr = "محسوب", ImageUrl = "", IdTypeActivite = 3},
                new Activite {Id = 9, Nom = "music", NomAr = "موسيقى", ImageUrl = "", IdTypeActivite = 3},
            };
            modelBuilder.Entity<Activite>().HasData(list);
            return modelBuilder;
        }

        public static ModelBuilder Profs(this ModelBuilder modelBuilder)
        {
            int id = 1;
            var faker = new Faker<Prof>(DataSeeding.lang)
                .CustomInstantiator(f => new Prof { Id = id++ })
.RuleFor(o => o.Lien, f => f.Lorem.Word())
.RuleFor(o => o.Description, f => f.Lorem.Word())
.RuleFor(o => o.Experience, f => f.Lorem.Word())
.RuleFor(o => o.Approche, f => f.Lorem.Word())
.RuleFor(o => o.Intro, f => f.Lorem.Word())
.RuleFor(o => o.VideoUrl, f => f.Lorem.Word())
.RuleFor(o => o.CvUrl, f => f.Lorem.Word())
.RuleFor(o => o.Note, f => f.Random.Number(1, 10))
.RuleFor(o => o.PrixHrWeb, f => f.Random.Number(1, 10))
.RuleFor(o => o.PrixHrHome, f => f.Random.Number(1, 10))
.RuleFor(o => o.PrixHrWebGroupe, f => f.Random.Number(1, 10))
.RuleFor(o => o.PrixHrHomeGroupe, f => f.Random.Number(1, 10))
.RuleFor(o => o.IdsTypeActivites, f => f.Lorem.Word())
.RuleFor(o => o.IdsActivites, f => f.Lorem.Word())
.RuleFor(o => o.IdsTypeCours, f => f.Lorem.Word())
.RuleFor(o => o.IdsLieuCours, f => f.Lorem.Word())
.RuleFor(o => o.IdsNiveauScolaires, f => f.Lorem.Word())
.RuleFor(o => o.IdUser, f => f.Random.Number(1, 10))
;
            modelBuilder.Entity<Prof>().HasData(faker.Generate(10));
            return modelBuilder;
        }

        public static ModelBuilder Students(this ModelBuilder modelBuilder)
        {
            int id = 1;
            var faker = new Faker<Student>(DataSeeding.lang)
                .CustomInstantiator(f => new Student { Id = id++ })
                .RuleFor(o => o.Ecole, f => f.Lorem.Word())
                .RuleFor(o => o.Niveau, f => f.Random.Number(1, 10))
                .RuleFor(o => o.Branche, f => f.Random.Number(1, 10))
                .RuleFor(o => o.NomParent, f => f.Lorem.Word())
                .RuleFor(o => o.PrenomParent, f => f.Lorem.Word())
                .RuleFor(o => o.Tel1Parent, f => f.Lorem.Word())
                .RuleFor(o => o.Tel2Parent, f => f.Lorem.Word())
                .RuleFor(o => o.IdUser, f => f.Random.Number(1, 10))
                .RuleFor(o => o.IdActivite, f => f.Random.Number(1, 10))
                ;
            modelBuilder.Entity<Student>().HasData(faker.Generate(10));
            return modelBuilder;
        }

        public static ModelBuilder NiveauScolaires(this ModelBuilder modelBuilder)
        {
            int id = 1;
            var faker = new Faker<NiveauScolaire>(DataSeeding.lang)
                .CustomInstantiator(f => new NiveauScolaire { Id = id++ })
.RuleFor(o => o.Nom, f => f.Lorem.Word())
.RuleFor(o => o.NomAr, f => f.Lorem.Word())
.RuleFor(o => o.IdCycle, f => f.Random.Number(1, 10))
.RuleFor(o => o.CoursLigneGroupe, f => f.Random.Number(1, 10))
.RuleFor(o => o.CoursLigneIndividuel, f => f.Random.Number(1, 10))
.RuleFor(o => o.CoursDomicileGroupe, f => f.Random.Number(1, 10))
.RuleFor(o => o.CoursDomicileIndividuel, f => f.Random.Number(1, 10))
;
            modelBuilder.Entity<NiveauScolaire>().HasData(faker.Generate(10));
            return modelBuilder;
        }

        public static ModelBuilder Branches(this ModelBuilder modelBuilder)
        {
            int id = 1;

            var list = new Branche[] {
                new Branche {Id = id++, Nom = "Tronc Commun", NomAr = "جذع مشترك", IdNiveauScolaire = 10},
                new Branche {Id = id++, Nom = "Sciences", NomAr = "علم", IdNiveauScolaire = 10},
                new Branche {Id = id++, Nom = "Technologies", NomAr = "التقنيات", IdNiveauScolaire = 10},
                new Branche {Id = id++, Nom = "Lettres et Sciences Humaines", NomAr = "الآداب والعلوم الإنسانية", IdNiveauScolaire = 10},
                new Branche {Id = id++, Nom = "Sciences Mathématiques", NomAr = "العلوم الرياضية", IdNiveauScolaire = 11},
                new Branche {Id = id++, Nom = "Sciences Expérimentales", NomAr = "علوم تجريبية", IdNiveauScolaire = 11},
                new Branche {Id = id++, Nom = "Sciences et Technologies Électriques", NomAr = "العلوم والتقنيات الكهربائية", IdNiveauScolaire = 11},
                new Branche {Id = id++, Nom = "Sciences et Technologies Mécaniques", NomAr = "العلوم الميكانيكية والتقنيات", IdNiveauScolaire = 11},
                new Branche {Id = id++, Nom = "Sciences Économiques et Gestion", NomAr = "الاقتصاد والإدارة", IdNiveauScolaire = 11},
                new Branche {Id = id++, Nom = "Lettres et Sciences Humaines", NomAr = "الآداب والعلوم الإنسانية", IdNiveauScolaire = 11},
                new Branche {Id = id++, Nom = "Sciences Mathématiques A", NomAr = "العلوم الرياضية أ", IdNiveauScolaire = 12},
                new Branche {Id = id++, Nom = "Sciences Mathématiques B", NomAr = "العلوم الرياضية ب", IdNiveauScolaire = 12},
                new Branche {Id = id++, Nom = "Sciences Physiques", NomAr = "علوم فيزيائية", IdNiveauScolaire = 12},
                new Branche {Id = id++, Nom = "Sciences de la Vie et de la Terre (SVT)", NomAr = "علوم الأرض والحياة (SVT)", IdNiveauScolaire = 12},
                new Branche {Id = id++, Nom = "Sciences Agronomiques", NomAr = "العلوم الزراعية", IdNiveauScolaire = 12},
                new Branche {Id = id++, Nom = "Sciences et Technologies Électriques", NomAr = "العلوم والتقنيات الكهربائية", IdNiveauScolaire = 12},
                new Branche {Id = id++, Nom = "Sciences et Technologies Mécaniques", NomAr = "العلوم الميكانيكية والتقنيات", IdNiveauScolaire = 12},
                new Branche {Id = id++, Nom = "Sciences Économiques", NomAr = "علوم إقتصادية", IdNiveauScolaire = 12},
                new Branche {Id = id++, Nom = "Sciences de Gestion Comptable (SGC)", NomAr = "علوم إدارة المحاسبة (SGC)", IdNiveauScolaire = 12},
                new Branche {Id = id++, Nom = "Lettres", NomAr = "حروف", IdNiveauScolaire = 12},
                new Branche {Id = id++, Nom = "Sciences Humaines", NomAr = "علوم اجتماعية", IdNiveauScolaire = 12},
            };
            modelBuilder.Entity<Branche>().HasData(list);
            return modelBuilder;
        }

        public static ModelBuilder Courss(this ModelBuilder modelBuilder)
        {
            int id = 1;
            var list = new Cours[] {
                 new Cours {Id = id++, IdBranche = 1, Nom = "Mathématiques", NomAr = "الرياضيات"},
            new Cours {Id = id++, IdBranche = 1, Nom = "Activité scientifique", NomAr = "النشاط العلمي"},
            new Cours {Id = id++, IdBranche = 1, Nom = "Arabe", NomAr = "العربية"},
            new Cours {Id = id++, IdBranche = 1, Nom = "Français", NomAr = "الفرنسية"},
            new Cours {Id = id++, IdBranche = 1, Nom = "Education Islamique", NomAr = "تربية إسلامية"},
            new Cours {Id = id++, IdBranche = 1, Nom = "Éducation artistique", NomAr = "التربية الفنية"},
            new Cours {Id = id++, IdBranche = 2, Nom = "Mathématiques", NomAr = "الرياضيات"},
            new Cours {Id = id++, IdBranche = 2, Nom = "Activité scientifique", NomAr = "النشاط العلمي"},
            new Cours {Id = id++, IdBranche = 2, Nom = "Arabe", NomAr = "العربية"},
            new Cours {Id = id++, IdBranche = 2, Nom = "Français", NomAr = "الفرنسية"},
            new Cours {Id = id++, IdBranche = 2, Nom = "Education Islamique", NomAr = "تربية إسلامية"},
            new Cours {Id = id++, IdBranche = 2, Nom = "Éducation artistique", NomAr = "التربية الفنية"},
            new Cours {Id = id++, IdBranche = 3, Nom = "Mathématiques", NomAr = "الرياضيات"},
            new Cours {Id = id++, IdBranche = 3, Nom = "Activité scientifique", NomAr = "النشاط العلمي"},
            new Cours {Id = id++, IdBranche = 3, Nom = "Arabe", NomAr = "العربية"},
            new Cours {Id = id++, IdBranche = 3, Nom = "Français", NomAr = "الفرنسية"},
            new Cours {Id = id++, IdBranche = 3, Nom = "Education Islamique", NomAr = "تربية إسلامية"},
            new Cours {Id = id++, IdBranche = 3, Nom = "Éducation artistique", NomAr = "التربية الفنية"},
            new Cours {Id = id++, IdBranche = 4, Nom = "Mathématiques", NomAr = "الرياضيات"},
            new Cours {Id = id++, IdBranche = 4, Nom = "Activité scientifique", NomAr = "النشاط العلمي"},
            new Cours {Id = id++, IdBranche = 4, Nom = "Arabe", NomAr = "العربية"},
            new Cours {Id = id++, IdBranche = 4, Nom = "Français", NomAr = "الفرنسية"},
            new Cours {Id = id++, IdBranche = 4, Nom = "Education Islamique", NomAr = "تربية إسلامية"},
            new Cours {Id = id++, IdBranche = 4, Nom = "Éducation artistique", NomAr = "التربية الفنية"},
            new Cours {Id = id++, IdBranche = 4, Nom = "Histoire Géographie", NomAr = "التاريخ والجغرافيا"},
            new Cours {Id = id++, IdBranche = 5, Nom = "Mathématiques", NomAr = "الرياضيات"},
            new Cours {Id = id++, IdBranche = 5, Nom = "Activité scientifique", NomAr = "النشاط العلمي"},
            new Cours {Id = id++, IdBranche = 5, Nom = "Arabe", NomAr = "العربية"},
            new Cours {Id = id++, IdBranche = 5, Nom = "Français", NomAr = "الفرنسية"},
            new Cours {Id = id++, IdBranche = 5, Nom = "Education Islamique", NomAr = "تربية إسلامية"},
            new Cours {Id = id++, IdBranche = 5, Nom = "Éducation artistique", NomAr = "التربية الفنية"},
            new Cours {Id = id++, IdBranche = 5, Nom = "Histoire Géographie", NomAr = "التاريخ والجغرافيا"},
            new Cours {Id = id++, IdBranche = 6, Nom = "Mathématiques", NomAr = "الرياضيات"},
            new Cours {Id = id++, IdBranche = 6, Nom = "Activité scientifique", NomAr = "النشاط العلمي"},
            new Cours {Id = id++, IdBranche = 6, Nom = "Arabe", NomAr = "العربية"},
            new Cours {Id = id++, IdBranche = 6, Nom = "Français", NomAr = "الفرنسية"},
            new Cours {Id = id++, IdBranche = 6, Nom = "Education Islamique", NomAr = "تربية إسلامية"},
            new Cours {Id = id++, IdBranche = 6, Nom = "Éducation artistique", NomAr = "التربية الفنية"},
            new Cours {Id = id++, IdBranche = 6, Nom = "Histoire Géographie", NomAr = "التاريخ والجغرافيا"},
            new Cours {Id = id++, IdBranche = 7, Nom = "Mathématiques", NomAr = "الرياضيات"},
            new Cours {Id = id++, IdBranche = 7, Nom = "Physique et Chimie", NomAr = "الفيزياء والكيمياء"},
            new Cours {Id = id++, IdBranche = 7, Nom = "Sciences de la Vie et de la Terre ", NomAr = "علوم الأرض والحياة"},
            new Cours {Id = id++, IdBranche = 7, Nom = "Arabe", NomAr = "العربية"},
            new Cours {Id = id++, IdBranche = 7, Nom = "Français", NomAr = "الفرنسية"},
            new Cours {Id = id++, IdBranche = 7, Nom = "Education Islamique", NomAr = "تربية إسلامية"},
            new Cours {Id = id++, IdBranche = 7, Nom = "Informatique", NomAr = "علوم الكمبيوتر"},
            new Cours {Id = id++, IdBranche = 7, Nom = "Histoire Géographie", NomAr = "التاريخ والجغرافيا"},
            new Cours {Id = id++, IdBranche = 8, Nom = "Mathématiques", NomAr = "الرياضيات"},
            new Cours {Id = id++, IdBranche = 8, Nom = "Physique et Chimie", NomAr = "الفيزياء والكيمياء"},
            new Cours {Id = id++, IdBranche = 8, Nom = "Sciences de la Vie et de la Terre ", NomAr = "علوم الأرض والحياة"},
            new Cours {Id = id++, IdBranche = 8, Nom = "Arabe", NomAr = "العربية"},
            new Cours {Id = id++, IdBranche = 8, Nom = "Français", NomAr = "الفرنسية"},
            new Cours {Id = id++, IdBranche = 8, Nom = "Education Islamique", NomAr = "تربية إسلامية"},
            new Cours {Id = id++, IdBranche = 8, Nom = "Informatique", NomAr = "علوم الكمبيوتر"},
            new Cours {Id = id++, IdBranche = 8, Nom = "Histoire Géographie", NomAr = "التاريخ والجغرافيا"},
            new Cours {Id = id++, IdBranche = 8, Nom = "Technologie Industrielle", NomAr = "التكنولوجيا الصناعية"},
            new Cours {Id = id++, IdBranche = 9, Nom = "Mathématiques", NomAr = "الرياضيات"},
            new Cours {Id = id++, IdBranche = 9, Nom = "Physique et Chimie", NomAr = "الفيزياء والكيمياء"},
            new Cours {Id = id++, IdBranche = 9, Nom = "Sciences de la Vie et de la Terre ", NomAr = "علوم الأرض والحياة"},
            new Cours {Id = id++, IdBranche = 9, Nom = "Arabe", NomAr = "العربية"},
            new Cours {Id = id++, IdBranche = 9, Nom = "Français", NomAr = "الفرنسية"},
            new Cours {Id = id++, IdBranche = 9, Nom = "Education Islamique", NomAr = "تربية إسلامية"},
            new Cours {Id = id++, IdBranche = 9, Nom = "Informatique", NomAr = "علوم الكمبيوتر"},
            new Cours {Id = id++, IdBranche = 9, Nom = "Histoire Géographie", NomAr = "التاريخ والجغرافيا"},
            new Cours {Id = id++, IdBranche = 9, Nom = "Technologie Industrielle", NomAr = "التكنولوجيا الصناعية"},
            new Cours {Id = id++, IdBranche = 9, Nom = "Anglais", NomAr = "الإنجليزية"},
            new Cours {Id = id++, IdBranche = 10, Nom = "'Mathématiques", NomAr = "الرياضيات"},
            new Cours {Id = id++, IdBranche = 10, Nom = "Physique et Chimie", NomAr = "الفيزياء والكيمياء"},
            new Cours {Id = id++, IdBranche = 10, Nom = "Sciences de la Vie et de la Terre ", NomAr = "علوم الأرض والحياة"},
            new Cours {Id = id++, IdBranche = 10, Nom = "Arabe", NomAr = "العربية"},
            new Cours {Id = id++, IdBranche = 10, Nom = "Français", NomAr = "الفرنسية"},
            new Cours {Id = id++, IdBranche = 10, Nom = "Education Islamique", NomAr = "تربية إسلامية"},
            new Cours {Id = id++, IdBranche = 10, Nom = "Informatique", NomAr = "علوم الكمبيوتر"},
            new Cours {Id = id++, IdBranche = 10, Nom = "Histoire Géographie", NomAr = "التاريخ والجغرافيا"},
            new Cours {Id = id++, IdBranche = 10, Nom = "Philosophie", NomAr = "الفلسفة"},
            new Cours {Id = id++, IdBranche = 10, Nom = "Anglais", NomAr = "الإنجليزية"},
            new Cours {Id = id++, IdBranche = 11, Nom = "Mathématiques", NomAr = "الرياضيات"},
            new Cours {Id = id++, IdBranche = 11, Nom = "Physique et Chimie", NomAr = "الفيزياء والكيمياء"},
            new Cours {Id = id++, IdBranche = 11, Nom = "Sciences de la Vie et de la Terre ", NomAr = "علوم الأرض والحياة"},
            new Cours {Id = id++, IdBranche = 11, Nom = "Arabe", NomAr = "العربية"},
            new Cours {Id = id++, IdBranche = 11, Nom = "Français", NomAr = "الفرنسية"},
            new Cours {Id = id++, IdBranche = 11, Nom = "Education Islamique", NomAr = "تربية إسلامية"},
            new Cours {Id = id++, IdBranche = 11, Nom = "Histoire Géographie", NomAr = "التاريخ والجغرافيا"},
            new Cours {Id = id++, IdBranche = 11, Nom = "Philosophie", NomAr = "الفلسفة"},
            new Cours {Id = id++, IdBranche = 11, Nom = "Anglais", NomAr = "الإنجليزية"},
            new Cours {Id = id++, IdBranche = 12, Nom = "Mathématiques", NomAr = "الرياضيات"},
            new Cours {Id = id++, IdBranche = 12, Nom = "Physique et Chimie", NomAr = "الفيزياء والكيمياء"},
            new Cours {Id = id++, IdBranche = 12, Nom = "Sciences de la Vie et de la Terre ", NomAr = "علوم الأرض والحياة"},
            new Cours {Id = id++, IdBranche = 12, Nom = "Arabe", NomAr = "العربية"},
            new Cours {Id = id++, IdBranche = 12, Nom = "Français", NomAr = "الفرنسية"},
            new Cours {Id = id++, IdBranche = 12, Nom = "Education Islamique", NomAr = "تربية إسلامية"},
            new Cours {Id = id++, IdBranche = 12, Nom = "Philosophie", NomAr = "الفلسفة"},
            new Cours {Id = id++, IdBranche = 12, Nom = "Anglais", NomAr = "الإنجليزية"}
            };

            modelBuilder.Entity<Cours>().HasData(list);
            return modelBuilder;
        }

        public static ModelBuilder ContactUss(this ModelBuilder modelBuilder)
        {
            int id = 1;
            var faker = new Faker<ContactUs>(DataSeeding.lang)
                .CustomInstantiator(f => new ContactUs { Id = id++ })
.RuleFor(o => o.Object, f => f.Lorem.Word())
.RuleFor(o => o.Msg, f => f.Lorem.Word())
.RuleFor(o => o.Date, f => f.Date.Past())
.RuleFor(o => o.IdUser, f => f.Random.Number(1, 10))
;
            modelBuilder.Entity<ContactUs>().HasData(faker.Generate(10));
            return modelBuilder;
        }

        public static ModelBuilder OffreProfs(this ModelBuilder modelBuilder)
        {
            int id = 1;
            var faker = new Faker<OffreProf>(DataSeeding.lang)
                .CustomInstantiator(f => new OffreProf { Id = id++ })
.RuleFor(o => o.Interval, f => f.Lorem.Word())
.RuleFor(o => o.Value, f => f.Random.Number(1, 10))
.RuleFor(o => o.IdTypeCours, f => f.Random.Number(1, 10))
;
            modelBuilder.Entity<OffreProf>().HasData(faker.Generate(10));
            return modelBuilder;
        }

        public static ModelBuilder Quizs(this ModelBuilder modelBuilder)
        {
            int id = 1;
            var faker = new Faker<Quiz>(DataSeeding.lang)
                .CustomInstantiator(f => new Quiz { Id = id++ })
.RuleFor(o => o.Title, f => f.Lorem.Word())
.RuleFor(o => o.Description, f => f.Lorem.Word())
.RuleFor(o => o.EnableTime, f => id - 1 == 1 ? true : f.Random.Bool())
.RuleFor(o => o.Date, f => f.Date.Past())
.RuleFor(o => o.IsActive, f => id - 1 == 1 ? true : f.Random.Bool())
.RuleFor(o => o.IdContext, f => f.Random.Number(1, 10))
;
            modelBuilder.Entity<Quiz>().HasData(faker.Generate(10));
            return modelBuilder;
        }

        public static ModelBuilder Questions(this ModelBuilder modelBuilder)
        {
            int id = 1;
            var faker = new Faker<Question>(DataSeeding.lang)
                .CustomInstantiator(f => new Question { Id = id++ })
.RuleFor(o => o.Value, f => f.Lorem.Word())
.RuleFor(o => o.ResponsesString, f => f.Lorem.Word())
.RuleFor(o => o.Choices, f => f.Lorem.Word())
.RuleFor(o => o.IsMultiChoises, f => id - 1 == 1 ? true : f.Random.Bool())
.RuleFor(o => o.Time, f => f.Random.Number(1, 10))
.RuleFor(o => o.IdQuiz, f => f.Random.Number(1, 10))
;
            modelBuilder.Entity<Question>().HasData(faker.Generate(10));
            return modelBuilder;
        }

        public static ModelBuilder Responses(this ModelBuilder modelBuilder)
        {
            int id = 1;
            var faker = new Faker<Response>(DataSeeding.lang)
                .CustomInstantiator(f => new Response { Id = id++ })
.RuleFor(o => o.TrueResponse, f => f.Lorem.Word())
.RuleFor(o => o.UserResponse, f => f.Lorem.Word())
.RuleFor(o => o.Date, f => f.Date.Past())
.RuleFor(o => o.Note, f => f.Random.Number(1, 10))
.RuleFor(o => o.IdQuestion, f => f.Random.Number(1, 10))
.RuleFor(o => o.IdUser, f => f.Random.Number(1, 10))
;
            modelBuilder.Entity<Response>().HasData(faker.Generate(10));
            return modelBuilder;
        }


    }
}