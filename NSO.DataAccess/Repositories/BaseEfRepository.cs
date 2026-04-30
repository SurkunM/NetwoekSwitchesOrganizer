using Microsoft.EntityFrameworkCore;
using NSO.Contracts.IRepositories;

namespace NSO.DataAccess.Repositories;

public class BaseEfRepository<T> : IRepository<T> where T : class
{
    protected NetworkSwitchesOrganizerDbContext DbContext;

    protected DbSet<T> DbSet;

    public BaseEfRepository(NetworkSwitchesOrganizerDbContext dbContext)
    {
        DbContext = dbContext ?? throw new ArgumentNullException(nameof(dbContext));
        DbSet = dbContext.Set<T>();
    }

    public Task CreateAsync(T entity)
    {
        return DbSet.AddAsync(entity).AsTask();
    }

    public void Update(T entity)
    {
        DbSet.Attach(entity);
        DbContext.Entry(entity).State = EntityState.Modified;
    }

    public void Delete(T entity)
    {
        if (DbContext.Entry(entity).State == EntityState.Detached)
        {
            DbSet.Attach(entity);
        }

        DbSet.Remove(entity);
    }
}
