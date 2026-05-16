using Microsoft.EntityFrameworkCore;

namespace NSO;

public class DbInitializer
{
    public readonly DbContext _dbContext;

    public DbInitializer(DbContext dbContext)
    {
        _dbContext = dbContext ?? throw new ArgumentNullException(nameof(dbContext));
    }

    public async Task Initialize()
    {
        _dbContext.Database.Migrate();

        //Создать аккаунт админа, роли, 
    }
}
