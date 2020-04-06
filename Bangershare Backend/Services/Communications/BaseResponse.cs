using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bangershare_Backend.Services.Communications
{
    public class BaseResponse<T> where T : class
    {
        public bool Success { get; private set; }
        public string Message { get; private set; }
        public T Resource { get; private set; }

        public BaseResponse()
        {
            Success = false;
            Message = "Entity Not found";
            Resource = default;
        }

        // Constructor for returning entities, suceess is based on whether object is found
        public BaseResponse(T entity)
        {
            Success = true;
            Message = string.Empty;
            Resource = entity;
        }

        // Constructor for a failed response 
        public BaseResponse(string message)
        {
            Success = false;
            Message = message;
            Resource = default;
        }
    }
}
