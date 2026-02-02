using Applyr.Api.Auth;
using Applyr.Api.DTOs;
using Applyr.Api.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Applyr.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AuthController(TokenProvider tokenProvider) : ControllerBase
{
    private readonly TokenProvider _tokenProvider = tokenProvider;

    [HttpPost]
    [AllowAnonymous]
    public async Task<IActionResult> Login([FromBody] LoginRequest req)
    {
        var user = new User
        {
            Id = 1,
            Email = req.Email
        };

        var token = _tokenProvider.Create(user);

        return Ok(new { accessToken = token });
    }
}
