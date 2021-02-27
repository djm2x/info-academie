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
    public class EventProfsController : SuperController<EventProf>
    {
        public EventProfsController(MyContext context ) : base(context)
        { }

        [HttpGet("{startIndex}/{pageSize}/{sortBy}/{sortDir}/{title}/{color}/{resizable}/{month}/{year}/{idUser}")]
        public async Task<IActionResult> GetAll(int startIndex, int pageSize, string sortBy, string sortDir, string title, string color, string resizable, int month, int year, int idUser)
        {
            var q = _context.EventProfs
                .Where(e => title == "*" ? true : e.Title.ToLower().Contains(title.ToLower()))
.Where(e => color == "*" ? true : e.Color.ToLower().Contains(color.ToLower()))
.Where(e => resizable == "*" ? true : e.Resizable.ToLower().Contains(resizable.ToLower()))
.Where(e => month == 0 ? true : e.Month == month)
.Where(e => year == 0 ? true : e.Year == year)
.Where(e => idUser == 0 ? true : e.IdUser == idUser)

                ;

            int count = await q.CountAsync();

            var list = await q.OrderByName<EventProf>(sortBy, sortDir == "desc")
                .Skip(startIndex)
                .Take(pageSize)
                
                .Select(e => new 
{
id = e.Id,
title = e.Title,
start = e.Start,
end = e.End,
color = e.Color,
draggable = e.Draggable,
resizable = e.Resizable,
month = e.Month,
year = e.Year,
user = e.User.Nom,
idUser = e.IdUser,

})
                .ToListAsync()
                ;

            return Ok(new { list = list, count = count });
        }
    }
}