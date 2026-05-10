namespace NSO.Model;

public class DeviceEntity
{
    public int Id { get; set; }

    public int CabinetId { get; set; }

    public virtual CabinetEntity? Cabinet { get; set; }

    public string Type { get; set; } = string.Empty;

    public string Model { get; set; } = string.Empty;

    public string IpAddress { get; set; } = string.Empty;

    public string MacAddress { get; set; } = string.Empty;

    public string Serial { get; set; } = string.Empty;

    public string Status { get; set; } = string.Empty;

    public DateTime InstallDate { get; set; }

    public string Notes { get; set; } = string.Empty;
}
