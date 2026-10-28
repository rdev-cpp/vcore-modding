# Tutorial: Custom Props Pack (CustomProps)

This practical guide walks through creating a content mod **"CustomProps"** that introduces a steel crate, a wooden barrel, and a heavy concrete barrier into the game.

---

## 1. Directory Tree

```text
Mods/CustomProps/
├── info.json
├── main.lua
└── assets/
    ├── steel_crate.png          # 32x32 px sprite
    ├── steel_crate_icon.png     # 32x32 px Q-menu icon
    ├── wood_barrel.png
    ├── wood_barrel_icon.png
    ├── heavy_block.png
    └── heavy_block_icon.png
```

---

## 2. Manifest `info.json`

```json
{
  "id": "vcore.custom_props",
  "version": "1.0.0",
  "name": "Custom Props Pack",
  "author": "rdev",
  "description": "Adds a steel crate, wooden barrel, and concrete block to the props shelf",
  "dependencies": []
}
```

---

## 3. Lua Script `main.lua`

```lua
local props = {
    { name = "Steel Crate", file = "steel_crate", mass = 12.0, friction = 0.6, bounce = 0.05 },
    { name = "Wooden Barrel", file = "wood_barrel", mass = 4.0, friction = 0.4, bounce = 0.3 },
    { name = "Concrete Barrier", file = "heavy_block", mass = 30.0, friction = 0.8, bounce = 0.02 }
}

function OnInit()
    Log("CustomProps mod loaded: " .. Mod.name)

    for _, p in ipairs(props) do
        -- 1. Load slot icon for the Q-menu
        local icon = Mod.load_sprite(p.file .. "_icon.png")

        -- 2. Load game sprite (PPU = 20.0)
        local sprite = Mod.load_sprite(p.file .. ".png", 20.0)

        -- 3. Register on lane 0 (Props)
        World.register_spawn_item(0, icon, function(x, y)
            local prop = World.create_prop(
                p.name,
                sprite,
                x, y,
                p.mass,     -- Physical mass
                p.friction, -- Surface friction
                p.bounce    -- Restitution / bounciness
            )
            return prop
        end)
    end
end

function OnUnload()
    Log("CustomProps mod unloaded")
end
```

---

## 4. Physics Parameters

- **`mass`:** Mass in kilograms. The barrel (4 kg) rolls easily, while the barrier (30 kg) remains sturdy against collisions.
- **`friction`:** Surface friction (0.0 to 1.0). High friction on concrete (0.8) prevents sliding down ramps.
- **`bounce`:** Restitution. The barrel (0.3) bounces on impact, while the heavy block (0.02) absorbs kinetic energy.
