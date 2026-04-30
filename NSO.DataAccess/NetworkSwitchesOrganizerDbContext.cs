using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using NSO.Model;

namespace NSO.DataAccess;

public class NetworkSwitchesOrganizerDbContext : IdentityDbContext<NsoUserEntity, NsoRoleEntity, Guid>
{
    public virtual DbSet<SwitchEntity> Switches { get; set; }

    public NetworkSwitchesOrganizerDbContext(DbContextOptions<NetworkSwitchesOrganizerDbContext> options) : base(options) { }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        builder.Entity<IdentityUserClaim<Guid>>().ToTable("UserClaims");
        builder.Entity<IdentityUserLogin<Guid>>().ToTable("UserLogins");
        builder.Entity<IdentityUserToken<Guid>>().ToTable("UserTokens");
        builder.Entity<IdentityUserRole<Guid>>().ToTable("UserRoles");
        builder.Entity<IdentityRoleClaim<Guid>>().ToTable("RoleClaims");

        builder.Entity<NsoUserEntity>(entity =>
        {
            entity.ToTable("Users");
            entity.Property(e => e.Id)
                .HasDefaultValueSql("gen_random_uuid()");
        });

        builder.Entity<NsoRoleEntity>(entity =>
        {
            entity.ToTable("Roles");
            entity.Property(e => e.Id)
                .HasDefaultValueSql("gen_random_uuid()");
        });
    }
}
