# Module: World (Spawning & Props)

The `World` (or `world`) table provides functions to spawn entities, crates, weapons, register items in the Q-menu, and manage game objects.

---

## Entity Creation

### `World.create_prop(name, sprite, x, y, mass, friction, bounce, scale)`
Creates an interactive 2D physics entity with a sprite, collider, and standard VCore sandbox components.

- **Parameters:**
  - `name` (`string`): GameObject name in the hierarchy.
  - `sprite` (`Sprite`): Sprite loaded via `Mod.load_sprite`.
  - `x`, `y` (`number`): World spawn position.
  - `mass` (`number`, optional, default `1.0`): Mass in kg.
  - `friction` (`number`, optional, default `0.4`): Surface friction.
  - `bounce` (`number`, optional, default `0.1`): Bounciness [0.0..1.0].
  - `scale` (`number`, optional, default `1.0`): Transform local scale.
- **Returns:** Created `GameObject` (`UserData`).
- **Alias:** `World.CreateProp(...)`.

> **Automatically Attached Components:**  
> The created entity receives:
> - `Rigidbody2D` with Continuous collision detection and Interpolate mode.
> - `BoxCollider2D` sized to the sprite's bounds.
> - `PhysicsMaterial2D` with friction and restitution.
> - `Grit` (toughness/destruction system with `tough = 50`).
> - `Knocker` (impact audio and kinetic force processing).
> - `Blotch` (blood, soot, and decal receiver).

```lua
local spr = Mod.load_sprite("textures/steel_crate.png", 20.0)
local crate = World.create_prop("SteelCrate", spr, 0, 5, 12.0, 0.6, 0.05, 1.0)
```

---

### `World.spawn_crate(x, y)`
Spawns a standard physical crate.

- **Returns:** `GameObject` (`UserData`).
- **Alias:** `World.SpawnCrate(...)`.

---

### `World.spawn_pistol(x, y)`
Spawns a standard firearm pistol.

- **Returns:** `GameObject` (`UserData`).
- **Alias:** `World.SpawnPistol(...)`.

---

## Q-Menu SpawnShelf Registration

### `World.register_spawn_item(lane, icon_sprite, spawn_func)`
Registers a custom item in the slide-out spawn menu (held via `Q`).

- **Parameters:**
  - `lane` (`number`): Shelf lane index (0 to 5). See [SpawnShelf](../shelf.md).
  - `icon_sprite` (`Sprite`): Square slot icon (recommended: 32x32 or 48x48 px).
  - `spawn_func` (`function(x, y)`): Callback receiving world coordinates and returning the spawned `GameObject`.
- **Alias:** `World.RegisterSpawnItem(...)`.

```lua
local icon = Mod.load_sprite("icons/steel_crate_icon.png")

World.register_spawn_item(0, icon, function(x, y)
    local spr = Mod.load_sprite("textures/steel_crate.png", 20.0)
    return World.create_prop("SteelCrate", spr, x, y, 12.0, 0.6, 0.05, 1.0)
end)
```

---

## Querying and Destroying

### `World.find(name)`
Finds an active `GameObject` by name. Returns `GameObject` or `nil`.

### `World.find_with_tag(tag)`
Finds all active `GameObject`s with a specific tag. Returns an array table.

### `World.destroy(gameObject)`
Safely destroys a `GameObject`.
