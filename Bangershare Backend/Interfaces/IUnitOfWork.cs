using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bangershare_Backend.Interfaces
{
    public interface IUnitOfWork
    {
        Task CompleteAsync();
    }
}
