namespace NSO.Contracts.Dto;

public class DeviceDto
{
    public int Id { get; set; }

    public required string Type { get; set; }

    public required string Model { get; set; }

    public required string IP { get; set; }

    public required string Mac { get; set; }
}
