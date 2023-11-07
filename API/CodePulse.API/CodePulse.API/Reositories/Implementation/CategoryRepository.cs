using CodePulse.API.Data;
using CodePulse.API.Model.Domain;
using CodePulse.API.Reositories.Interface;

namespace CodePulse.API.Reositories.Implementation
{
    public class CategoryRepository : ICategorRepository
    {
        private readonly ApplicationDbContect _db;

        public CategoryRepository(ApplicationDbContect Db)
        {
            _db = Db;
        }
        public async Task<Category> CreatAsync(Category category)
        {
            await _db.Categories.AddAsync(category);
            await _db.SaveChangesAsync();
            return category;
        }
    }
}
