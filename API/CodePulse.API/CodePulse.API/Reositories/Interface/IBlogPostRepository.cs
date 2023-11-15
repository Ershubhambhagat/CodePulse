
using CodePulse.API.Model.Domain;
using CodePulse.API.Model.DTOs.BlogPostDTOs;
using Microsoft.AspNetCore.Mvc;

namespace CodePulse.API.Reositories.Interface
{
    public interface IBlogPostRepository
    {
        Task<BlogPost> CreateAsync(BlogPost blogPost);
        Task<IEnumerable<BlogPost>> GetAllBlogPostAsync();
    }
}
