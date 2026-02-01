using Applyr.Api.Models;
using Microsoft.EntityFrameworkCore;

namespace Applyr.Api.Data;

public class AppDbContext(DbContextOptions<AppDbContext> options, IConfiguration config) : DbContext(options)
{
   
    private readonly IConfiguration _config = config;

    public DbSet<User> Users { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        if (optionsBuilder.IsConfigured) return;

        var connectionString = _config.GetConnectionString("Db")
            ?? throw new InvalidOperationException("Missing ConnectionString:Db");
        
        optionsBuilder.UseNpgsql(connectionString);
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        var userEntity = modelBuilder.Entity<User>();

        userEntity.ToTable("users");

        userEntity.HasKey(x => x.Id);
        userEntity.Property(x => x.Email).IsRequired().HasMaxLength(320);
        userEntity.Property(x => x.UserName).IsRequired().HasMaxLength(50);
        userEntity.Property(x => x.Name).HasMaxLength(120);
        userEntity.Property(x => x.PasswordHash).IsRequired();

        userEntity.HasIndex(x => x.Email).IsUnique();
        userEntity.HasIndex(x => x.UserName).IsUnique();
    }
}
