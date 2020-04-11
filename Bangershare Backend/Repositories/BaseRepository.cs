using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Bangershare_Backend.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Bangershare_Backend.Repositories
{
    public abstract class BaseRepository<TEntity, TContext> : IRepository<TEntity>
        where TEntity : class
        where TContext : DbContext
    {
        private readonly TContext _context;
        private readonly DbSet<TEntity> _dbSet;
        public BaseRepository(TContext context)
        {
            _context = context;
            _dbSet = _context.Set<TEntity>();
        }

        public virtual async Task Add(TEntity entity)
        {
            await _dbSet.AddAsync(entity);
        }

        public virtual void Delete(TEntity entity)
        {
            _dbSet.Remove(entity);
        }

        public virtual async Task<TEntity> GetByKeys(params object[] keys)
        {
            return await _dbSet.FindAsync(keys);
        }

        public virtual async Task<ICollection<TEntity>> Get(
            Expression<Func<TEntity, bool>> filter = null, 
            Func<IQueryable<TEntity>, IOrderedQueryable<TEntity>> orderBy = null,
            string includeProperties = "")
        {
            IQueryable<TEntity> query = _dbSet;

            if(filter != null)
            {
                query = query.Where(filter);
            }

            foreach(var includeProperty in includeProperties.Split
                (new char[] { ',' }, StringSplitOptions.RemoveEmptyEntries))
            {
                query = query.Include(includeProperty);
            }

            if(orderBy != null)
            {
                return await orderBy(query).ToListAsync();
            } else
            {
                return await query.ToListAsync();
            }
        }

        public virtual async Task<ICollection<TEntity>> GetAll()
        {
            return await _dbSet.ToListAsync();
        }

        public virtual void Update(TEntity entity, TEntity existingEntity)
        {
            _context.Entry(existingEntity).State = EntityState.Detached;
            _context.Entry(entity).State = EntityState.Modified;
        }

        public async Task<TEntity> FindFirstOrDefault(Expression<Func<TEntity, bool>> filter = null)
        {
            return await _dbSet.FirstOrDefaultAsync(filter);
        }
    }
}
