using CodePulse.API.Model.Domain;

namespace CodePulse.API.Reositories.Interface
{
    public interface ICategorRepository
    {
        Task<Category>CreatAsync(Category category);    

    }

}
