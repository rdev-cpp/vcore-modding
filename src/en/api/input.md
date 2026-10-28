# Module: Input (Keyboard & Mouse)

The `Input` (or `input`) table provides state polling for keys, mouse buttons, and cursor positions.

---

## Keyboard Polling

Key names match Unity's [KeyCode](https://docs.unity3d.com/ScriptReference/KeyCode.html) enumeration case-insensitively (e.g. `"Space"`, `"F1"`, `"LeftShift"`, `"Return"`, `"Alpha1"`, `"W"`, `"A"`, `"S"`, `"D"`).

| Method | Alias | Description |
| :--- | :--- | :--- |
| `Input.get_key(key)` | `Input.GetKey(key)` | `true` while key is held down |
| `Input.get_key_down(key)` | `Input.GetKeyDown(key)` | `true` on the single frame key was pressed |
| `Input.get_key_up(key)` | `Input.GetKeyUp(key)` | `true` on the single frame key was released |

```lua
function OnUpdate(dt)
    if Input.get_key_down("R") then
        Log("Key R pressed")
    end
end
```

---

## Mouse Polling

Button indices:
- `0` — Left mouse button (LMB)
- `1` — Right mouse button (RMB)
- `2` — Middle mouse button (wheel)

| Method | Alias | Description |
| :--- | :--- | :--- |
| `Input.get_mouse_button(btn)` | `Input.GetMouseButton(btn)` | `true` while held |
| `Input.get_mouse_button_down(btn)` | `Input.GetMouseButtonDown(btn)` | `true` on press |
| `Input.get_mouse_button_up(btn)` | `Input.GetMouseButtonUp(btn)` | `true` on release |

---

## Coordinates and Scroll

### `Input.get_mouse_position()`
Returns cursor screen position in pixels (`(0, 0)` is bottom-left).
- **Returns:** `{ x = number, y = number }`.

### `Input.get_mouse_scroll()`
Returns mouse wheel delta for the current frame.
- **Returns:** `{ x = number, y = number }`.
