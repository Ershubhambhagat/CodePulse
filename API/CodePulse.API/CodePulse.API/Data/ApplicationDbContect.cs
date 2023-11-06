using CodePulse.API.Model.Domain;
using Microsoft.EntityFrameworkCore;
using System.Data.Common;

namespace CodePulse.API.Data
{
    public class ApplicationDbContect : DbContext
    {
        public ApplicationDbContect(DbContextOptions options) : base(options)
        {
        }
        public DbSet<BlogPost> Blogposts { get; set; }
        public DbSet<Category> Categories { get; set; }
    }
}
