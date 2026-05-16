using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using NSO.DataAccess;
using NSO.Model;
using NSO.NsoAppApiConfiguration;

namespace NSO;

public class Program
{
    public static async Task Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);
        var connectionString = builder.Configuration.GetConnectionString("NetworkSwitchesOrganizerConnection");
        var services = builder.Services;

        services.ConfigureAppDbContext(connectionString);

        services.AddIdentity<AppUserEntity, AppRoleEntity>(options =>
        {
            options.Password.RequiredLength = 6;
            options.Password.RequireDigit = false;
            options.Password.RequireLowercase = true;
            options.Password.RequireUppercase = true;
            options.Password.RequireNonAlphanumeric = false;
        })
        .AddEntityFrameworkStores<NetworkSwitchesOrganizerDbContext>()
        .AddDefaultTokenProviders();

        services.AddScoped<DbContext>(provider => provider.GetRequiredService<NetworkSwitchesOrganizerDbContext>());// Äëÿ UoW

        services.AddControllersWithViews();

        var app = builder.Build();

        if (!app.Environment.IsDevelopment())
        {
            app.UseHsts();
        }

        await app.InitializeAppDbAsync();

        app.UseHttpsRedirection();

        app.UseDefaultFiles();
        app.UseStaticFiles();

        app.UseRouting();

        app.UseAuthentication();
        app.UseAuthorization();

        app.MapControllers();
        app.MapFallbackToFile("index.html");

        app.Run();
    }
}
