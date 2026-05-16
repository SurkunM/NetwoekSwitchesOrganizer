using NSO.BusinessLogic.Handlers;
using NSO.Contracts.IRepositories;
using NSO.Contracts.IUnitOfWork;
using NSO.DataAccess.Repositories;
using NSO.DataAccess.UnitOfWork;

namespace NSO.NsoAppApiConfiguration;

public static class AppDependenciesConfiguration
{
    public static void ConfigureAppDIRepositories(this IServiceCollection services)
    {
        services.AddTransient<IDevicesRepository, DevicesRepository>();
    }

    public static void ConfigureAppDIHandlers(this IServiceCollection services)
    {
        services.AddTransient<GetSwitchesHandler>();
    }

    public static void ConfigureAppDIServices(this IServiceCollection services)
    {
        services.AddTransient<IUnitOfWork, UnitOfWork>();
    }
}
