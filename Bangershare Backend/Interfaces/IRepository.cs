using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bangershare_Backend.Interfaces
{
    public interface IRepository<T> where T : class
    {
        Task<ICollection<T>> GetAll();
        Task<T> Get(params object[] keys);
        Task Add(T entity);
        void Update(T entity, T existingEntity);
        void Delete(T entity);
    }
}
