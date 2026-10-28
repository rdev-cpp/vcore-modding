# Module: Physics (Raycast & Gravity)

The `Physics` (or `physics`) table interfaces with Unity's 2D Box2D physics simulation.

---

## 2D Raycasting

### `Physics.raycast(originX, originY, dirX, dirY, distance)`
Casts a 2D ray from `(originX, originY)` in direction `(dirX, dirY)` up to `distance`.

- **Returns:** Table of hit data, or `nil` if no hit occurred.
- **Alias:** `Physics.Raycast(...)`.

```lua
local hit = Physics.raycast(pos.x, pos.y, 0, -1, 10.0)
if hit then
    Log("Hit at distance: " .. hit.distance)
    Log("Point: " .. hit.point_x .. ", " .. hit.point_y)
end
```

### Hit Table Structure:
```lua
{
    point_x = 12.4,        -- Hit point world X
    point_y = -3.2,        -- Hit point world Y
    normal_x = 0.0,        -- Surface normal X
    normal_y = 1.0,        -- Surface normal Y
    distance = 4.82,       -- Distance to hit
    game_object = obj      -- Hit GameObject
}
```

---

## Gravity Control

### `Physics.get_gravity()`
Returns the global acceleration vector. Default: `{ x = 0, y = -9.81 }`.

### `Physics.set_gravity(x, y)`
Sets the gravity vector in real-time.

```lua
-- Enable Zero-G
Physics.set_gravity(0, 0)

-- Invert gravity (float upwards)
Physics.set_gravity(0, 9.81)

-- Restore standard gravity
Physics.set_gravity(0, -9.81)
```
