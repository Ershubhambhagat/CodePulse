using CodePulse.API.Data;
using CodePulse.API.Model.Domain;
using CodePulse.API.Reositories.Interface;
using Microsoft.AspNetCore.Http.HttpResults;
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

        #region Get By id

        public async Task<Category?> GetByIdAsync(Guid id)
        {
           return await _db.Categories.FirstOrDefaultAsync(c=>c.Id== id);
        }
        #endregion

        #region Delete

        public async Task<Category> DeleteAsync(Guid id)
        {
            var category=await _db.Categories.FirstOrDefaultAsync(x => x.Id==id);
            if (category==null)
            {
                return category;
            }
            _db.Categories.Remove(category);
            await _db.SaveChangesAsync();
            return category;
        }

        #endregion


    }
}
