namespace NSO.Model;

public class BuildingEntity
{
    public int Id { get; set; }

    public required string Name { get; set; }

    public required string Street { get; set; }

    public int HouseNumber { get; set; }

    public int FloorsCount { get; set; }

    public virtual ICollection<RackEntity> Racks { get; set; } = new List<RackEntity>();
}
