using Microsoft.AspNetCore.Identity;

namespace NSO.Model;

public class NsoUserEntity : IdentityUser<Guid>
{
    public required string FirstName { get; set; }

    public required string LastName { get; set; }

    public required string MiddleName { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}
