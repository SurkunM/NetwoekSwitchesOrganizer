using Microsoft.AspNetCore.Identity;

namespace NSO.Model;

public class AppUserEntity : IdentityUser<int>
{
    public required string Position { get; set; }

    public required string FirstName { get; set; }

    public string LastName { get; set; } = string.Empty;

    public string MiddleName { get; set; } = string.Empty;
}
