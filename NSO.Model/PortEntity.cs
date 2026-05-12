using NSO.Model.Enums;

namespace NSO.Model;

public class PortEntity
{
    public int Id { get; set; }

    public int PortNumber { get; set; }

    public VlanType Vlan { get; set; }

    public PortType PortType { get; set; }

    public int DeviceId { get; set; }

    public required virtual DeviceEntity Device { get; set; }
}
