using CodePulse.API.Model.Domain;
using CodePulse.API.Model.DTOs.BlogPostDTOs;
using CodePulse.API.Reositories.Interface;
using Microsoft.AspNetCore.Mvc;

namespace CodePulse.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    #region Ctor
    public class BlogPostController : Controller
    {
        private readonly IBlogPostRepository _blogPost;

        public BlogPostController(IBlogPostRepository blogPost)
        {
            _blogPost = blogPost;
        }


        #endregion


        #region Create

        [HttpPost]
        public async Task<IActionResult> CreateBlogPost([FromBody] CreateBlogPostRequestDto Request)
        {
            //Convert DTOs to Domain Models
            var blogpost = new BlogPost
            {
                Title = Request.Title,
                Author = Request.Author,
                FeaturedImageUrl = Request.FeaturedImageUrl,
                Content = Request.Content,
                IsVisiblebool = Request.IsVisiblebool,
                ShortDescription = Request.ShortDescription,
                PublishedDate = Request.PublishedDate,
                UrlHandle = Request.UrlHandle

            };
            blogpost = await _blogPost.CreateAsync(blogpost);

            //conver Domain model back To DTOs
            var responce = new Model.DTOs.BlogPostDTOs.BlogPostAllDTOs
            {
                Id = blogpost.Id,
                Title = blogpost.Title,
                Author = blogpost.Author,
                FeaturedImageUrl = blogpost.FeaturedImageUrl,
                Content = blogpost.Content,
                IsVisiblebool = blogpost.IsVisiblebool,
                ShortDescription = blogpost.ShortDescription,
                PublishedDate = blogpost.PublishedDate,
                UrlHandle = blogpost.UrlHandle
            };
            return Ok(responce);
        }
        #endregion


        #region Fetch
        [HttpGet]
        public async Task<IActionResult> GetAlPostlBlog()
        {
            var blogPosts = await _blogPost.GetAllBlogPostAsync();
            //Convert Domain Model to DTOs
            var responce = new List<BlogPostAllDTOs>();
            foreach (var blogpost in blogPosts)
            {
                responce.Add(new BlogPostAllDTOs
                {
                    Id = blogpost.Id,
                    Title = blogpost.Title,
                    Author = blogpost.Author,
                    FeaturedImageUrl = blogpost.FeaturedImageUrl,
                    Content = blogpost.Content,
                    IsVisiblebool = blogpost.IsVisiblebool,
                    ShortDescription = blogpost.ShortDescription,
                    PublishedDate = blogpost.PublishedDate,
                    UrlHandle = blogpost.UrlHandle
                });
            }
            return Ok(responce);
        }


        #endregion

        #region Fetch By id



        #endregion

        #region Update



        #endregion

        #region Delete



        #endregion


    }
}