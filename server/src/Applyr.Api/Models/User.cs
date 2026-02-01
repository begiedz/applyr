using System.ComponentModel.DataAnnotations;

namespace Applyr.Api.Models;

public class User
{
    public int Id { get; set; }
    public string Email { get; set; } = default!;
    public string? Name { get; set; }
    public string UserName { get; set; } = default!;
    
    public string PasswordHash { get; set; } = default!;
    
    public DateTimeOffset CreatedAt { get; set; }
    public DateTimeOffset UpdatedAt { get; set; }
}
