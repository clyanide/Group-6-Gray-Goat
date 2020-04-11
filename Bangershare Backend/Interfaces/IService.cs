using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace Bangershare_Backend.Interfaces
{
    public interface IService<TEntity, TResponse> 
        where TEntity : class
        where TResponse : class
    {
        Task<ICollection<TEntity>> GetAll();
        Task<TEntity> GetByKeys(params object[] keys);
        Task<TEntity> FindFirstOrDefault(
            Expression<Func<TEntity, bool>> filter = null,
            string includeProperties = "");
        Task<TResponse> Add(TEntity entity);
        Task<TResponse> Update(TEntity entity, params object[] keys);
        Task<TResponse> Delete(params object[] keys);
    }
}
