using NSO.Model.Enums;

namespace NSO.Model;

public class DeviceEntity
{
    public int Id { get; set; }

    public string Name { get; set; } = string.Empty;

    public DeviceType DeviceType { get; set; }

    public string Model { get; set; } = string.Empty;

    public string IpAddress { get; set; } = string.Empty;

    public string MacAddress { get; set; } = string.Empty;

    public bool IsActive { get; set; }

    public DateTime InstallDate { get; set; }

    public int RackId { get; set; }

    public virtual RackEntity? Rack { get; set; }

    public int PortsCount { get; set; }

    public virtual ICollection<PortEntity> Ports { get; set; } = new List<PortEntity>();
}
