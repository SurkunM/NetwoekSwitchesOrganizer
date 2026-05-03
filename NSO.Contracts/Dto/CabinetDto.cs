using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NSO.Contracts.Dto;

public class CabinetDto
{
    public int Id { get; set; }

    public int BuildingId { get; set; }

    public int Floor { get; set; }

    public required string Name { get; set; }

    public required string Location { get; set; }

    public string? Status { get; set; }

    public required List<string> Devices { get; set; }
}
