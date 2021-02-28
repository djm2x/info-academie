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

public static ModelBuilder LieuCourss(this ModelBuilder modelBuilder)
                    {
                    int id = 1;
                    var faker = new Faker<LieuCours>(DataSeeding.lang)
                        .CustomInstantiator(f => new LieuCours { Id = id++ })
.RuleFor(o => o.Nom, f => f.Lorem.Word())
.RuleFor(o => o.NomAr, f => f.Lorem.Word())
;
modelBuilder.Entity<LieuCours>().HasData(faker.Generate(10));
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
                    var faker = new Faker<Message>(DataSeeding.lang)
                        .CustomInstantiator(f => new Message { Id = id++ })
.RuleFor(o => o.Object, f => f.Lorem.Word())
.RuleFor(o => o.Content, f => f.Lorem.Word())
.RuleFor(o => o.Vu, f => id - 1 == 1 ? true : f.Random.Bool())
.RuleFor(o => o.Date, f => f.Date.Past())
.RuleFor(o => o.IdCours, f => f.Random.Number(1, 10))
.RuleFor(o => o.OtherUserName, f => f.Lorem.Word())
.RuleFor(o => o.OtherUserImage, f => "")
.RuleFor(o => o.IdMe, f => f.Random.Number(1, 10))
.RuleFor(o => o.IdOtherUser, f => f.Random.Number(1, 10))
.RuleFor(o => o.IdDiscussion, f => f.Random.Number(1, 10))
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
.RuleFor(o => o.Color, f => f.Lorem.Word())
.RuleFor(o => o.Draggable, f => id - 1 == 1 ? true : f.Random.Bool())
.RuleFor(o => o.Resizable, f => f.Lorem.Word())
.RuleFor(o => o.Month, f => f.Random.Number(1, 10))
.RuleFor(o => o.Year, f => f.Random.Number(1, 10))
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
                    int id = 1;
                    var faker = new Faker<Activite>(DataSeeding.lang)
                        .CustomInstantiator(f => new Activite { Id = id++ })
.RuleFor(o => o.Nom, f => f.Lorem.Word())
.RuleFor(o => o.NomAr, f => f.Lorem.Word())
.RuleFor(o => o.ImageUrl, f => "")
.RuleFor(o => o.IdTypeActivite, f => f.Random.Number(1, 10))
;
modelBuilder.Entity<Activite>().HasData(faker.Generate(10));
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
                    var faker = new Faker<Branche>(DataSeeding.lang)
                        .CustomInstantiator(f => new Branche { Id = id++ })
.RuleFor(o => o.Nom, f => f.Lorem.Word())
.RuleFor(o => o.NomAr, f => f.Lorem.Word())
.RuleFor(o => o.IdNiveauScolaire, f => f.Random.Number(1, 10))
;
modelBuilder.Entity<Branche>().HasData(faker.Generate(10));
return modelBuilder;
}

public static ModelBuilder Courss(this ModelBuilder modelBuilder)
                    {
                    int id = 1;
                    var faker = new Faker<Cours>(DataSeeding.lang)
                        .CustomInstantiator(f => new Cours { Id = id++ })
.RuleFor(o => o.Nom, f => f.Lorem.Word())
.RuleFor(o => o.NomAr, f => f.Lorem.Word())
.RuleFor(o => o.FilesUrl, f => f.Lorem.Word())
.RuleFor(o => o.VideosUrl, f => f.Lorem.Word())
.RuleFor(o => o.Semester, f => f.Random.Number(1, 10))
.RuleFor(o => o.IdBranche, f => f.Random.Number(1, 10))
.RuleFor(o => o.IdNiveauScolaire, f => f.Random.Number(1, 10))
;
modelBuilder.Entity<Cours>().HasData(faker.Generate(10));
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