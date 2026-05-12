using Microsoft.AspNetCore.Identity;

namespace NSO.Model;

public class AppRoleEntity : IdentityRole<int>
{
    public string? Description { get; set; }
}
