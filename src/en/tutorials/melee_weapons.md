# Tutorial: Melee Weapons Pack (CoolSwords)

This tutorial walks through creating a content mod containing 5 custom swords with custom sprites, icons, and physical properties.

---

## 1. Directory Tree

```text
Mods/CoolSwords/
├── info.json
├── main.lua
└── assets/
    ├── iron_sword.png           # 20x80 px sprite
    ├── iron_sword_icon.png      # 32x32 px icon
    ├── blood_sword.png
    ├── blood_sword_icon.png
    ├── shadow_blade.png
    ├── shadow_blade_icon.png
    ├── golden_saber.png
    ├── golden_saber_icon.png
    ├── ember_katana.png
    └── ember_katana_icon.png
```

---

## 2. Manifest `info.json`

```json
{
  "id": "velvetics.cool_swords",
  "version": "1.0.0",
  "name": "Cool Swords Pack",
  "author": "rdev",
  "description": "Adds 5 custom sword props with custom icons",
  "dependencies": []
}
```

---

## 3. Lua Script `main.lua`

```lua
local swords = {
    { name = "Iron Sword", file = "iron_sword", mass = 2.0 },
    { name = "Blood Sword", file = "blood_sword", mass = 2.2 },
    { name = "Shadow Blade", file = "shadow_blade", mass = 1.8 },
    { name = "Golden Saber", file = "golden_saber", mass = 2.5 },
    { name = "Ember Katana", file = "ember_katana", mass = 1.5 }
}

function OnInit()
    print("Cool Swords loaded: " .. Mod.name)
    
    for i, s in ipairs(swords) do
        -- 1. Load slot icon
        local icon = Mod.load_sprite(s.file .. "_icon.png")
        
        -- 2. Load game sprite with PPU = 24.0
        local sprite = Mod.load_sprite(s.file .. ".png", 24.0)

        -- 3. Register in SpawnShelf (Lane 1 - Melee / Weapons)
        World.register_spawn_item(1, icon, function(x, y)
            local prop = World.create_prop(
                s.name, 
                sprite, 
                x, y, 
                s.mass, -- Physical mass in kg
                0.4,    -- Friction
                0.1     -- Bounce
            )
            return prop
        end)
    end
end

function OnUnload()
    print("Cool Swords unloaded")
end
```

---

## 4. Understanding Pixels Per Unit (PPU)

In Unity's 2D physics engine, `1 unit` represents **1 meter**.

For a sword texture that is `20x80` pixels:
- `PPU = 100`: Sword height is `80 / 100 = 0.8` m (dagger size).
- `PPU = 24.0`: Sword height is `80 / 24 ≈ 3.33` m (large two-handed blade matching VCore ragdoll scale).

Point filtering is automatically enabled, keeping pixel art crisp at all zoom levels.
