using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Applyr.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TestController : ControllerBase
{
    [HttpGet("private")]
    [Authorize]
    public IActionResult Private()
        => Ok(new { ok = true, user = User.Identity?.Name });
}
