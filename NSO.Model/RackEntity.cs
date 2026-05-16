using NSO.Model.Enums;
using System.ComponentModel.DataAnnotations;

namespace NSO.Model;

public class RackEntity
{
    public int Id { get; set; }

    public string Name { get; set; } = string.Empty;

    public int BuildingId { get; set; }

    public virtual BuildingEntity? Building { get; set; }

    public string Room { get; set; } = string.Empty;


    [Range(-1, 10, ErrorMessage = "Номер этажа не может быть меньше -1 и больше 10. Таких этажей нет")]
    public int Floor { get; set; }

    public RackType Type { get; set; }

    public bool HasVentilation { get; set; }

    public bool HasUps { get; set; }

    public string Comment { get; set; } = string.Empty;

    public virtual ICollection<DeviceEntity> Devices { get; set; } = new List<DeviceEntity>();
}
