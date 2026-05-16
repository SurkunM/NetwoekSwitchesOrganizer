using System.ComponentModel.DataAnnotations;

namespace NSO.Model;

public class VlanEntity
{
    public int Id { get; set; }

    [Range(1, 4094, ErrorMessage = "Введите валидный номер vlan")]
    public int Number { get; set; }

    public required string Name { get; set; }

    public string Description { get; set; } = string.Empty;

    public virtual ICollection<PortEntity> Ports { get; set; } = new List<PortEntity>();
}
