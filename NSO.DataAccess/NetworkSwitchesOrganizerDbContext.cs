using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using NSO.Model;

namespace NSO.DataAccess;

public class NetworkSwitchesOrganizerDbContext : IdentityDbContext<AppUserEntity, AppRoleEntity, int>
{
    public virtual DbSet<DeviceEntity> Switches { get; set; }

    public virtual DbSet<BuildingEntity> Buildings { get; set; }

    public virtual DbSet<RackEntity> Racks { get; set; }

    public NetworkSwitchesOrganizerDbContext(DbContextOptions<NetworkSwitchesOrganizerDbContext> options) : base(options) { }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        builder.Entity<IdentityUserClaim<int>>().ToTable("UserClaims");
        builder.Entity<IdentityUserLogin<int>>().ToTable("UserLogins");
        builder.Entity<IdentityUserToken<int>>().ToTable("UserTokens");
        builder.Entity<IdentityUserRole<int>>().ToTable("UserRoles");
        builder.Entity<IdentityRoleClaim<int>>().ToTable("RoleClaims");
        builder.Entity<AppUserEntity>().ToTable("Users");
        builder.Entity<AppRoleEntity>().ToTable("Roles");
    }
}
