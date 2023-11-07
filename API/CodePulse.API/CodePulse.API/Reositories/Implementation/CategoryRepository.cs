using CodePulse.API.Data;
using CodePulse.API.Model.Domain;
using CodePulse.API.Reositories.Interface;
using Microsoft.EntityFrameworkCore;
using System.Security.AccessControl;

namespace CodePulse.API.Reositories.Implementation
{
    public class CategoryRepository : ICategorRepository
    {
        #region Ctor
        private readonly ApplicationDbContect _db;

        public CategoryRepository(ApplicationDbContect Db)
        {
            _db = Db;
        }
        #endregion

        #region Create

        public async Task<Category> CreatAsync(Category category)
        {
            await _db.Categories.AddAsync(category);
            await _db.SaveChangesAsync();
            return category;
        }

        #endregion


        #region GetAll

        public async Task<IEnumerable<Category>> GetAllAsync()
        {
            return await _db.Categories.ToListAsync();
        }
        #endregion



    }
}
