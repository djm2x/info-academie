using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Models;
using Api.Providers;
using Microsoft.AspNetCore.WebUtilities;
using System.Text;

namespace Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class CoursController : SuperController<Cours>
    {
        public CoursController(MyContext context ) : base(context)
        { }

        [HttpGet("{startIndex}/{pageSize}/{sortBy}/{sortDir}/{nom}/{nomAr}/{idNiveauScolaire}/{idBranche}")]
        public async Task<IActionResult> GetAll(int startIndex, int pageSize, string sortBy, string sortDir, string nom, string nomAr, int idNiveauScolaire, int idBranche)
        {
            var q = _context.Courses
                .Where(e => nom == "*" ? true : e.Nom.ToLower().Contains(nom.ToLower()))
                .Where(e => nomAr == "*" ? true : e.NomAr.ToLower().Contains(nomAr.ToLower()))
                // .Where(e => filesUrl == "*" ? true : e.FilesUrl.ToLower().Contains(filesUrl.ToLower()))
                // .Where(e => videosUrl == "*" ? true : e.VideosUrl.ToLower().Contains(videosUrl.ToLower()))
                // .Where(e => semester == 0 ? true : e.Semester == semester)
                .Where(e => idBranche == 0 ? true : e.IdBranche == idBranche)
                .Where(e => idNiveauScolaire == 0 ? true : e.IdNiveauScolaire == idNiveauScolaire)

                ;

            int count = await q.CountAsync();

            var list = await q.OrderByName<Cours>(sortBy, sortDir == "desc")
                .Skip(startIndex)
                .Take(pageSize)
                
                .Select(e => new 
                {
                id = e.Id,
                nom = e.Nom,
                nomAr = e.NomAr,
                filesUrl = e.FilesUrl,
                videosUrl = e.VideosUrl,
                semester = e.Semester,
                branche = e.Branche.Nom,
                idBranche = e.IdBranche,
                niveauScolaire = e.NiveauScolaire.Nom,
                idNiveauScolaire = e.IdNiveauScolaire,

                })
                .ToListAsync()
                ;

            return Ok(new { list = list, count = count });
        }
    }
}