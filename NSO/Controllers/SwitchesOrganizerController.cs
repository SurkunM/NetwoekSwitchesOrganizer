using Microsoft.AspNetCore.Mvc;
using NSO.Contracts.Dto;
using NSO.Model;

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
    public ActionResult<List<RackEntity>> GetCabinets()
    {
        var cabinet1 = new RackEntity
        {
            Id = 21,
            BuildingId = 1,
            Floor = 1,
            Name = "Шкаф СК-2",
            Location = "Пост охраны",
            Devices = new List<DeviceEntity>
            {
                new DeviceEntity
                {
                    Id = 1,
                    Type = "Коммутатор",
                    Model = "Cisco 2960",
                    IpAddress = "192.168.1.5",
                    MacAddress = "00:1A:2B:3C:3D:5E",                                        
                    Status = "online",
                    InstallDate = DateTime.Parse("2023-01-15"),
                    Notes = "Основной коммутатор доступа"
                },
                new DeviceEntity
                {
                    Id = 4,
                    Type = "Коммутатор",
                    Model = "Eltex MES2428",
                    IpAddress = "192.168.1.15",
                    MacAddress = "00:1A:2B:3C:4D:1E",                                        
                    Status = "online",
                    InstallDate = DateTime.Parse("2023-01-15"),
                    Notes = "Основной коммутатор доступа"
                }
            }
        };

        var cabinet2 = new RackEntity
        {
            Id = 2,
            BuildingId = 12,
            Floor = 2,
            Name = "Шкаф СК-3",
            Devices = new List<DeviceEntity>
            {
                new() {
                    Id = 2,
                    Type = "Коммутатор",
                    Model = "Cisco 2960",
                    IpAddress = "192.168.1.1",
                    MacAddress = "00:1A:2B:3C:1A:5E",                                        
                    Status = "online",
                    InstallDate = DateTime.Parse("2023-01-15"),
                    Notes = "Основной коммутатор доступа"
                },

                new() {
                    Id = 3,
                    Type = "Коммутатор",
                    Model = "HUAWEI",
                    IpAddress = "192.168.1.2",
                    MacAddress = "00:1A:2B:3C:4Q:5E",                                        
                    Status = "online",
                    InstallDate = DateTime.Parse("2023-01-15"),
                    Notes = "Основной коммутатор доступа"
                }
            }
        };

        return new List<RackEntity> { cabinet1, cabinet2 };
    }
}
