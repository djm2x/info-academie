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
    public class LieuCourssController : SuperController<LieuCours>
    {
        public LieuCourssController(MyContext context ) : base(context)
        { }

        [HttpGet("{startIndex}/{pageSize}/{sortBy}/{sortDir}/{nom}/{nomAr}")]
        public async Task<IActionResult> GetAll(int startIndex, int pageSize, string sortBy, string sortDir, string nom, string nomAr)
        {
            var q = _context.LieuCourss
                .Where(e => nom == "*" ? true : e.Nom.ToLower().Contains(nom.ToLower()))
.Where(e => nomAr == "*" ? true : e.NomAr.ToLower().Contains(nomAr.ToLower()))

                ;

            int count = await q.CountAsync();

            var list = await q.OrderByName<LieuCours>(sortBy, sortDir == "desc")
                .Skip(startIndex)
                .Take(pageSize)
                
                .Select(e => new 
{
id = e.Id,
nom = e.Nom,
nomAr = e.NomAr,

})
                .ToListAsync()
                ;

            return Ok(new { list = list, count = count });
        }
    }
}