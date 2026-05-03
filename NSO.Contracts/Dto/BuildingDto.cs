namespace NSO.Contracts.Dto;

public class BuildingDto
{
    public int Id { get; set; }

    public required string Title { get; set; }

    public required string Address { get; set; }

    public required List<FloorDto> Floors { get; set; }
}
