using Microsoft.Extensions.Logging;
using NSO.Contracts.IRepositories;
using NSO.Model;

namespace NSO.DataAccess.Repositories;

public class SwitchesRepository : BaseEfRepository<SwitchEntity>, ISwitchesRepository
{
    private readonly ILogger<SwitchesRepository> _logger;

    public SwitchesRepository(NetworkSwitchesOrganizerDbContext dbContext, ILogger<SwitchesRepository> logger) : base(dbContext)
    {
        _logger = logger ?? throw new ArgumentNullException(nameof(logger));
    }
}
