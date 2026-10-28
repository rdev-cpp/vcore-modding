# Folder Structure

Following a consistent file organization ensures clarity and maintainability.

---

## Recommended Directory Tree

```text
Mods/CoolSwords/
├── info.json              # Mod metadata
├── main.lua               # Entry point
├── config.lua             # Auxiliary config module
├── logic/
│   ├── spawner.lua        # Auxiliary logic module
│   └── weapons.lua
└── assets/                # Asset storage
    ├── textures/
    │   ├── katana.png
    │   └── claymore.png
    └── icons/
        ├── katana_icon.png
        └── claymore_icon.png
```

---

## Modularity & `require`

VCore overrides standard `require` to provide safe loading of auxiliary `.lua` files within the mod's folder:

In `config.lua`:
```lua
local Config = {
    sword_scale = 1.0,
    sword_mass = 2.5
}
return Config
```

In `main.lua`:
```lua
local Config = require("config")

function OnInit()
    Log("Loaded config with sword mass: " .. Config.sword_mass)
end
```

### Path Traversal Guard
Attempting to traverse outside the mod directory (e.g., `require("../other_mod/secret")`) raises a `ScriptRuntimeException: Security violation: path outside mod folder`.

---

## Asset Resolution

When calling asset loaders (`Mod.load_sprite`, `Mod.load_texture`, `Mod.read_text`, `Mod.asset_exists`), the engine searches:
1. Under the `assets/` subfolder: `Mod.load_sprite("textures/katana.png")` -> `Mods/CoolSwords/assets/textures/katana.png`.
2. Under the root folder: `Mods/CoolSwords/textures/katana.png`.
