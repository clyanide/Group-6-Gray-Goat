using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bangershare_Backend.Interfaces
{
    public interface IService<TEntity, TResponse> 
        where TEntity : class
        where TResponse : class
    {
        Task<ICollection<TEntity>> GetAll();
        Task<TEntity> Get(params object[] keys);
        Task<TResponse> Add(TEntity entity, params object[] keys);
        Task<TResponse> Update(TEntity entity, params object[] keys);
        Task<TResponse> Delete(TEntity entity, params object[] keys);
    }
}
