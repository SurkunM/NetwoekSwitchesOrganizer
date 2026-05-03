using NSO.Contracts.IUnitOfWork;

namespace NSO.DataAccess.UnitOfWork;

public class UnitOfWork : IUnitOfWork
{
    public void BeginTransaction()
    {
        throw new NotImplementedException();
    }

    public void Dispose()
    {
        throw new NotImplementedException();
    }

    public T GetRepository<T>() where T : class
    {
        throw new NotImplementedException();
    }

    public void RollbackTransaction()
    {
        throw new NotImplementedException();
    }

    public Task SaveAsync()
    {
        throw new NotImplementedException();
    }
}
