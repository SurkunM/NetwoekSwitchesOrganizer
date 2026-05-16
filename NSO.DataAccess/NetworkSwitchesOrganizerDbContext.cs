using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using NSO.Model;

namespace NSO.DataAccess;

public class NetworkSwitchesOrganizerDbContext : IdentityDbContext<AppUserEntity, AppRoleEntity, int>
{
    public virtual DbSet<BuildingEntity> Buildings { get; set; }

    public virtual DbSet<DeviceEntity> Devices { get; set; }

    public virtual DbSet<RackEntity> Racks { get; set; }

    public virtual DbSet<PortEntity> Ports { get; set; }

    public virtual DbSet<VlanEntity> Vlans { get; set; }

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

        builder.Entity<BuildingEntity>(b =>
        {
            b.Property(be => be.Name)
                .HasMaxLength(200);

            b.Property(be => be.Street)
                .HasMaxLength(200);

            b.HasMany(be => be.Racks)
                .WithOne(re => re.Building)
                .HasForeignKey(re => re.BuildingId);
        });

        builder.Entity<RackEntity>(b =>
        {
            b.Property(be => be.Name)
                .HasMaxLength(200);

            b.Property(be => be.Room)
                .HasMaxLength(500);

            b.HasMany(re => re.Devices)
                .WithOne(de => de.Rack)
                .HasForeignKey(de => de.RackId);
        });

        builder.Entity<DeviceEntity>(b =>
        {
            b.Property(be => be.Name)
                .HasMaxLength(200);

            b.Property(be => be.Model)
                .HasMaxLength(200);

            b.Property(be => be.IpAddress)
                .HasMaxLength(100);

            b.Property(be => be.MacAddress)
                .HasMaxLength(100);

            b.HasMany(de => de.Ports)
                .WithOne(pe => pe.Device)
                .HasForeignKey(pe => pe.DeviceId);
        });

        builder.Entity<VlanEntity>(b =>
        {
            b.Property(ve => ve.Name)
                .HasMaxLength(50);

            b.Property(ve => ve.Description)
                .HasMaxLength(200);

            b.HasMany(ve => ve.Ports)
                .WithOne(pe => pe.Vlan)
                .HasForeignKey(pe => pe.VlanId);
        });
    }
}
