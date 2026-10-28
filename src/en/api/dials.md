# Module: Dials (Game Settings)

The `Dials` (or `dials`) table provides read-only access to global game configuration parameters (`CoreDials`).

---

## Methods

### `Dials.get_language()`
Returns the active game language index:
- `0` — Russian (`RU`)
- `1` — English (`EN`)

### `Dials.get_gore()`
Returns the violence / blood level (`0` = disabled, `1` = full).

### `Dials.get_iterations()`
Returns the Box2D solver iteration count (`PhysSteps`). Useful for scaling heavy mod algorithms to the player's performance tier.

### `Dials.get_graphics()`
Returns the index of the active graphics quality preset.

### `Dials.get_music_volume()` / `Dials.get_sfx_volume()`
Returns current music and sound effects volumes `[0.0 .. 1.0]`.

---

## Example

```lua
function GetItemName()
    if Dials.get_language() == 0 then
        return "Стальной клинок"
    else
        return "Steel Blade"
    end
end
```
