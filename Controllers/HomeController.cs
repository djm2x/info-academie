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
    public class HomeController : ControllerBase
    {
        protected readonly MyContext _context;

        public HomeController(MyContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> Welcome()
        {
            var videos = await _context.Videos.Take(3).OrderBy(e => e.Order).ToListAsync();

            var activites = await _context.Activites.Where(e => e.IdTypeActivite == 1)
            .Select(e => new
            {
                Id = e.Id,
                Nom = e.Nom,
                NomAr = e.NomAr,
                imageUrl = e.ImageUrl,
                typeActivite = new {
                    nom = e.TypeActivite.Nom,
                    nomAr = e.TypeActivite.NomAr,
                },
            })
            .ToListAsync()
            ;

            var villes = await _context.Villes.ToListAsync();

            var profs = await _context.Profs.OrderByDescending(e => e.Note)
            .Take(5)
            .Select(e => new
            {
                note = e.Note,
                intro = e.Intro,
                user = new
                {
                    id = e.User.Id,
                    imageUrl = e.User.ImageUrl,
                    Nom = e.User.Nom,
                    Prenom = e.User.Prenom,
                }
            })
            .ToListAsync();

            return Ok(new { videos, activites, villes, profs });
        }
    }
}