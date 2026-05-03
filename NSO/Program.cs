using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using NSO.BusinessLogic.Handlers;
using NSO.Contracts.IRepositories;
using NSO.Contracts.IUnitOfWork;
using NSO.DataAccess;
using NSO.DataAccess.Repositories;
using NSO.DataAccess.UnitOfWork;
using NSO.Model;

namespace NSO;

public class Program
{
    public static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);
        //var connectionString = builder.Configuration.GetConnectionString("NetworkSwitchesOrganizerConnection");

        //builder.Services.AddDbContext<NetworkSwitchesOrganizerDbContext>(options =>
        //{
        //    options
        //    .UseNpgsql(connectionString)
        //    .UseLazyLoadingProxies();
        //}, ServiceLifetime.Scoped, ServiceLifetime.Transient);

        //builder.Services.AddIdentity<NsoUserEntity, NsoRoleEntity>(options =>
        //{
        //    options.Password.RequiredLength = 6;
        //    options.Password.RequireDigit = false;
        //    options.Password.RequireLowercase = true;
        //    options.Password.RequireUppercase = true;
        //    options.Password.RequireNonAlphanumeric = false;
        //})
        //.AddEntityFrameworkStores<NetworkSwitchesOrganizerDbContext>()
        //.AddDefaultTokenProviders();

        //builder.Services.AddTransient<ISwitchesRepository, SwitchesRepository>();
        //builder.Services.AddTransient<IUnitOfWork, UnitOfWork>();
        //builder.Services.AddTransient<GetSwitchesHandler>();

        //builder.Services.AddScoped<DbContext>(provider => provider.GetRequiredService<NetworkSwitchesOrganizerDbContext>());// Äëÿ UoW

        builder.Services.AddControllersWithViews();

        var app = builder.Build();

        if (!app.Environment.IsDevelopment())
        {
            app.UseHsts();
        }

        app.UseHttpsRedirection();

        app.UseDefaultFiles();
        app.UseStaticFiles();

        app.UseRouting();

        //app.UseAuthentication();
       // app.UseAuthorization();

        app.MapControllers();
        app.MapFallbackToFile("index.html");

        app.Run();
    }
}
