using NSO.Model.Enums;
using System.ComponentModel.DataAnnotations;

namespace NSO.Model;

public class PortEntity
{
    public int Id { get; set; }


    [Range(0, 100, ErrorMessage = "Укажите правдоподобный номер порта.")]
    public int PortNumber { get; set; }

    public PortType PortType { get; set; }

    public int DeviceId { get; set; }

    public required virtual DeviceEntity Device { get; set; }

    public int VlanId { get; set; }

    public virtual VlanEntity? Vlan { get; set; }
}
