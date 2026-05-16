using Microsoft.EntityFrameworkCore;
using NSO.DataAccess;

namespace NSO.NsoAppApiConfiguration;

public static class AppDbContextConfiguration
{
    public static void ConfigureAppDbContext(this IServiceCollection services, string? connectionString)
    {
        ArgumentNullException.ThrowIfNull(connectionString);

        services.AddDbContext<NetworkSwitchesOrganizerDbContext>(options =>
        {
            options
            .UseNpgsql(connectionString)
            .UseLazyLoadingProxies();
        }, ServiceLifetime.Scoped, ServiceLifetime.Transient);
    }

    public static async Task InitializeAppDbAsync(this WebApplication app)
    {
        using var scope = app.Services.CreateScope();

        try
        {
            var dbInitializer = scope.ServiceProvider.GetRequiredService<DbInitializer>();
            await dbInitializer.Initialize();
        }
        catch (Exception ex)
        {
            var logger = app.Services.GetRequiredService<ILogger<Program>>();
            logger.LogError(ex, "При создании базы данных произошла ошибка.");

            throw;
        }
    }
}
