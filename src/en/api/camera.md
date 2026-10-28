# Module: Camera (Zoom & Limits)

The `Camera` (or `camera`) table controls the camera position, orthographic zoom, roaming camera limits, and coordinate conversion.

---

## Zoom and Limits

### `Camera.get_size()` / `Camera.set_size(size)`
Gets or sets the main camera's orthographic size. Values are clamped to a minimum of `0.1`.

- **Alias:** `Camera.GetSize()`, `Camera.SetSize(...)`.

---

### `Camera.get_limits()` / `Camera.set_limits(nearest, farthest)`
Reads or modifies the mouse-wheel zoom bounds of the `RoamCam` controller.

- **Returns:** `{ nearest = number, farthest = number }`.
- **Alias:** `Camera.GetLimits()`, `Camera.SetLimits(...)`.

```lua
-- Expand zoom range for panoramic shots
Camera.set_limits(1.0, 50.0)
```

---

### `Camera.get_cruise()` / `Camera.set_cruise(speed)`
Gets or sets the camera roam speed.

- **Alias:** `Camera.GetCruise()`, `Camera.SetCruise(...)`.

---

## Positioning & Coordinates

### `Camera.get_position()` / `Camera.set_position(x, y, z)`
Gets or sets the 3D position of the main camera.

- **Alias:** `Camera.GetPosition()`, `Camera.SetPosition(...)`.

---

### `Camera.screen_to_world(screenX, screenY)`
Converts screen pixel coordinates into 2D world coordinates.

- **Returns:** `{ x = number, y = number }`.
- **Alias:** `Camera.ScreenToWorld(...)`.

```lua
local mouse_screen = Input.get_mouse_position()
local mouse_world = Camera.screen_to_world(mouse_screen.x, mouse_screen.y)
Log("Cursor in world: " .. mouse_world.x .. ", " .. mouse_world.y)
```
