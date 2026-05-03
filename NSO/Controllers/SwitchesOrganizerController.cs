using Microsoft.AspNetCore.Mvc;
using NSO.Contracts.Dto;

namespace NSO.Controllers;

[ApiController]
[Route("api/[controller]/[action]")]
public class SwitchesOrganizerController : ControllerBase
{
    public SwitchesOrganizerController()
    {

    }

    [HttpGet]
    public ActionResult<List<BuildingDto>> GetBuildings()
    {
        var floors1 = new List<FloorDto>
        {
            new() { Id = 1, Number = 1 },
            new() { Id = 2, Number = 2 },
            new() { Id = 3, Number = 3 }

        };

        return new List<BuildingDto>
        {
            new()
            {
                Id = 1,
                Title = "Хирургический корпус",
                Address = "Коммунистический 140",
                Floors = floors1
            },
            new()
            {
                Id = 12,
                Title = "Терапевтический корпус",
                Address = "Коммунистический 130",
                Floors = floors1
            },
            new()
            {
                Id = 33,
                Title = "Поликлиника",
                Address = "Чорос-Гуркина 6",
                Floors =
                [
                    new() { Id = 3, Number = -1 },
                    new() { Id = 1, Number = 1 },
                    new() { Id = 2, Number = 2 }

                ]
            }
        };
    }

    [HttpGet]
    public ActionResult<List<CabinetDto>> GetCabinets()
    {
        return new List<CabinetDto>
        {
            new() {
                Id = 1,
                BuildingId = 1,
                Floor = 1,
                Name = "Шкаф СК-1",
                Location = "Пост охраны",
                Devices = ["Cisco", "Huawei", "Eltex", "QTECH"]
            }
        };
    }
}
