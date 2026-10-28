# Modules: Time & Log (TimeScale & Logs)

Methods for controlling game simulation time and formatted console logging.

---

## Module: Time

| Method | Alias | Returns | Description |
| :--- | :--- | :--- | :--- |
| `Time.get_delta_time()` | `Time.GetDeltaTime()` | `number` | Frame delta time in seconds |
| `Time.get_fixed_delta_time()`| `Time.GetFixedDeltaTime()` | `number` | Physics step interval |
| `Time.get_unscaled_delta_time()`| `Time.GetUnscaledDeltaTime()` | `number` | Real-world delta time |
| `Time.get_time()` | `Time.GetTime()` | `number` | Game time elapsed since startup |
| `Time.get_unscaled_time()` | `Time.GetUnscaledTime()` | `number` | Real time elapsed since startup |
| `Time.get_time_scale()` | `Time.GetTimeScale()` | `number` | Current simulation time scale |
| `Time.set_time_scale(scale)` | `Time.SetTimeScale(scale)` | `void` | Sets simulation time scale (minimum `0.0`) |

### Slow Motion Example:
```lua
function OnUpdate(dt)
    if Input.get_key_down("T") then
        Time.set_time_scale(0.2) -- 5x slowdown
        Log("Slow motion enabled")
    end
end
```

---

## Logging Functions

Messages automatically include the mod's name as a prefix:

- `Log(message)` / `log(message)` — Standard informational console log (`[ModName] Message`).
- `LogWarning(message)` / `log_warning(message)` — Yellow warning log.
- `LogError(message)` / `log_error(message)` — Red error log.
- `print(...)` — Standard Lua print mapped to `Log(...)`.
