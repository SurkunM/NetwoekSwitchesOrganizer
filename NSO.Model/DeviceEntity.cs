namespace NSO.Model;

public class DeviceEntity
{
    public int Id { get; set; }

    public int RackId { get; set; }

    public virtual RackEntity? Rack { get; set; }

    public string Type { get; set; } = string.Empty;

    public string Model { get; set; } = string.Empty;

    public string IpAddress { get; set; } = string.Empty;

    public string MacAddress { get; set; } = string.Empty;

    public string Name { get; set; } = string.Empty;

    public string Status { get; set; } = string.Empty;

    public DateTime InstallDate { get; set; }

    public string Notes { get; set; } = string.Empty;
}
