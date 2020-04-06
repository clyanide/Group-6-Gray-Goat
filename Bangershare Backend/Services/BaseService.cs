﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Bangershare_Backend.Repositories;
using Bangershare_Backend.Interfaces;
using Microsoft.EntityFrameworkCore;
using Bangershare_Backend.Services.Communications;

namespace Bangershare_Backend.Services
{
    public abstract class BaseService<TContext, TEntity, TRepository, TResponse, TUnitOfWork> : IService<TEntity, TResponse>
        where TContext : DbContext
        where TEntity : class
        where TRepository : IRepository<TEntity>
        where TResponse : BaseResponse<TEntity>
        where TUnitOfWork : IUnitOfWork
    {
        private readonly TRepository _repository;
        private readonly TUnitOfWork _unitOfWork;

        public BaseService(TRepository repository, TUnitOfWork unitOfWork)
        {
            _repository = repository;
            _unitOfWork = unitOfWork;
        }
        
        public virtual async Task<TResponse> Add(TEntity entity)
        {
            try
            {
                await _repository.Add(entity);
                await _unitOfWork.CompleteAsync();

                return (TResponse)Activator.CreateInstance(typeof(TResponse), new object[] { entity } );
            } 
            catch (Exception e)
            {
                return (TResponse)Activator.CreateInstance(typeof(TResponse), new object[] { $"An error occurred when adding the entity: {e.Message}" });
            }
            throw new NotImplementedException();
        }

        public virtual async Task<TResponse> Delete(TEntity entity, params object[] keys)
        {
            TEntity existingEntity = await _repository.Get(keys);

            if (existingEntity == null)
            {
                // Indicates entity does not exist 
                return (TResponse)Activator.CreateInstance(typeof(TResponse), new object[] { null });
            }

            try
            {
                _repository.Delete(entity);
                await _unitOfWork.CompleteAsync();

                return (TResponse)Activator.CreateInstance(typeof(TResponse), new object[] { entity });
            } 
            catch(Exception e)
            {
                return (TResponse)Activator.CreateInstance(typeof(TResponse), new object[] { $"An error occurred when deleting the entity: {e.Message}" });
            }

            throw new NotImplementedException();
        }

        public virtual async Task<TEntity> Get(params object[] keys)
        {
            return await _repository.Get(keys);
        }

        public virtual async Task<ICollection<TEntity>> GetAll()
        {
            return await _repository.GetAll();
        }

        public virtual async Task<TResponse> Update(TEntity entity, params object[] keys)
        {
            TEntity existingEntity = await _repository.Get(keys);


            if (existingEntity == null)
            {
                // Indicates entity does not exist 
                return (TResponse)Activator.CreateInstance(typeof(TResponse), new object[] { null });
            }

            existingEntity = entity;

            try
            {
                _repository.Update(existingEntity);
                await _unitOfWork.CompleteAsync();

                return (TResponse)Activator.CreateInstance(typeof(TResponse), new object[] { existingEntity });
            } 
            catch (Exception e)
            {
                return (TResponse)Activator.CreateInstance(typeof(TResponse), new object[] { $"An error occurred when updating the entity: {e.Message}" });
            }
        }
    }
}