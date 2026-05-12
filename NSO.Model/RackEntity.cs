using NSO.Model.Enums;

namespace NSO.Model;

public class RackEntity
{
    public int Id { get; set; }

    public string Name { get; set; } = string.Empty;

    public int BuildingId { get; set; }

    public virtual required BuildingEntity Building { get; set; }

    public string Room { get; set; } = string.Empty;

    public int Floor { get; set; }

    public RackType Type { get; set; }

    public bool HasVentilation { get; set; }

    public bool HasUps { get; set; }

    public string Comment { get; set; } = string.Empty;

    public virtual ICollection<DeviceEntity> Devices { get; set; } = new List<DeviceEntity>();
}
