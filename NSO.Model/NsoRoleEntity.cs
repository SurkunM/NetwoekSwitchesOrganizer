using Microsoft.AspNetCore.Identity;

namespace NSO.Model;

public class NsoRoleEntity : IdentityRole<int>
{
    public string? Description { get; set; }
}
