using Microsoft.AspNetCore.Mvc;

namespace Test.Api.Controllers;

[ApiController]
[Route("[controller]")]
public class TimerController : ControllerBase
{
    ILogger<TimerController> _logger;
    public TimerController(ILogger<TimerController> logger)
    {
        _logger = logger;
    }

    [HttpGet]
    public async Task<IEnumerable<string>> Get(CancellationToken cancellationToken)
    {
        await Task.Delay(8000, cancellationToken);
        _logger.LogInformation("Request handled!");

        return new List<string> {
            "Str1",
            "Str2",
            "Str3",
            "Str4",
        };
    }
}
