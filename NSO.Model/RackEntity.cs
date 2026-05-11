using NSO.Model.Enums;

namespace NSO.Model;

public class RackEntity
{
    public int Id { get; set; }

    public string Name { get; set; } = string.Empty;

    public int BuildingId { get; set; }

    public virtual required BuildingEntity Building { get; set; }

    public int Floor {  get; set; }

    public RackType Type { get; set; }  

    public string Description { get; set; } = string.Empty;

    public string Comment { get; set; } = string.Empty;

    public virtual ICollection<DeviceEntity> Devices { get; set; } = new List<DeviceEntity>();
}
