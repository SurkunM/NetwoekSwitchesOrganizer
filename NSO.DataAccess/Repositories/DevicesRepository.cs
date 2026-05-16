using Microsoft.Extensions.Logging;
using NSO.Contracts.IRepositories;
using NSO.Model;

namespace NSO.DataAccess.Repositories;

public class DevicesRepository : BaseEfRepository<DeviceEntity>, IDevicesRepository
{
    private readonly ILogger<DevicesRepository> _logger;

    public DevicesRepository(NetworkSwitchesOrganizerDbContext dbContext, ILogger<DevicesRepository> logger) : base(dbContext)
    {
        _logger = logger ?? throw new ArgumentNullException(nameof(logger));
    }
}
