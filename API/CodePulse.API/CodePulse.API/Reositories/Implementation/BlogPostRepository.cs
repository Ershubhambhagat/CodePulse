using CodePulse.API.Data;
using CodePulse.API.Model.Domain;
using CodePulse.API.Model.DTOs.BlogPostDTOs;
using CodePulse.API.Reositories.Interface;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CodePulse.API.Reositories.Implementation
{
    
    public class BlogPostRepository : IBlogPostRepository
    {
        #region ctor

        private readonly ApplicationDbContect _dbContect;

        public BlogPostRepository(ApplicationDbContect dbContect)
        {
            _dbContect = dbContect;
        }
        #endregion

        #region Create
        

        public async Task<BlogPost> CreateAsync(BlogPost blogPost)
        {
            await _dbContect.Blogposts.AddAsync(blogPost);
            //await _dbContect.Blogposts.AddAsync(blogPost);
            await _dbContect.SaveChangesAsync();
            return blogPost;
        }
        #endregion
    
        #region Get ALl 


        public async Task<IEnumerable<BlogPost>> GetAllBlogPostAsync()
        {
            return await _dbContect.Blogposts.ToListAsync();
        }
        #endregion




    }
}
