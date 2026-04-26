using Microsoft.AspNetCore.Mvc;

namespace NSO.Controllers;

[ApiController]
[Route("api/[controller]/[action]")]
public class SwitchesOrganizerController : ControllerBase
{
    public SwitchesOrganizerController()
    {

    }

    [HttpGet]
    public Task<ActionResult> GetBuildings()
    {
        return Task.FromResult<ActionResult>(Ok());
    }

    [HttpGet]
    public Task<ActionResult> GetCabinets()
    {
        return Task.FromResult<ActionResult>(BadRequest());
    }
}
