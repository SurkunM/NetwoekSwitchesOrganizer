using System.ComponentModel.DataAnnotations;

namespace NSO.Model;

public class BuildingEntity
{
    public int Id { get; set; }

    public required string Name { get; set; }

    public required string Street { get; set; }

    [Range(1, 999, ErrorMessage = "Номер корпуса не может быть отрицательным числом или больше 999. Таких адресов нет")]
    public int HouseNumber { get; set; }

    [Range(-1, 10, ErrorMessage = "Номер этажа не может быть меньше -1 и больше 10. Таких этажей нет")]
    public int FloorsCount { get; set; }

    public virtual ICollection<RackEntity> Racks { get; set; } = new List<RackEntity>();
}
