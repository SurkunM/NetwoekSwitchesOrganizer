namespace NSO.Model;

public class CabinetEntity
{
    public int Id { get; set; }

    public int BuildingId { get; set; }

    public int Floor { get; set; }

    public string Name { get; set; } = string.Empty;

    public string Location { get; set; } = string.Empty;

    public string Status { get; set; } = string.Empty;

    public virtual ICollection<DeviceEntity> Devices { get; set; } = new List<DeviceEntity>();
}