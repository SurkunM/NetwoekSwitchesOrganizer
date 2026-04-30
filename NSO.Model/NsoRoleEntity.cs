using Microsoft.AspNetCore.Identity;

namespace NSO.Model;

public class NsoRoleEntity : IdentityRole<Guid>
{
    public string? Description { get; set; }
}
