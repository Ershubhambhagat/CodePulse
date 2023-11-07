using CodePulse.API.Data;
using CodePulse.API.Model.Domain;
using CodePulse.API.Model.DTOs;
using CodePulse.API.Reositories.Interface;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CodePulse.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CodePulseController : ControllerBase
    {
        private readonly ICategorRepository _categorRepository;

        public CodePulseController(ICategorRepository categorRepository)
        {
            _categorRepository = categorRepository;
        }


        #region Get
        [HttpGet]
        public async Task<IActionResult> GetAllCategories()
        {
           var categoryData=await _categorRepository.GetAllAsync();
            // _categorRepository only deal with domain model 
            //never expose domain model 
            //so we need to change on category domain model 
            //map domain model to dto   

            var Responce=new List<CategoryDTO>();   
            foreach (var item in categoryData) 
            {
                Responce.Add(new CategoryDTO
                {
                    Id = item.Id,
                    Name = item.Name,
                    UrlHandle = item.UrlHandle,
                });
            }
            return Ok(Responce);

        }


        #endregion

        #region Post
        [HttpPost]
        public async Task<IActionResult> CreateCategory(CreateCategoryRequestDto request)
        {
            //Map DTO To Domain Model 
            var Category = new Category
            {
                Name = request.Name,
                UrlHandle = request.UrlHandle,
            };
            await _categorRepository.CreatAsync(Category);
            var responce = new CategoryDTO
            {
                Id = Category.Id,
                Name = Category.Name,
                UrlHandle = Category.UrlHandle
            };
            return Ok(responce);
        }
        #endregion



        #region Get
       


        #endregion

    }



}
