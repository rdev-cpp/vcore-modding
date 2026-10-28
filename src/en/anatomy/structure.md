# Folder Structure

Following a consistent file organization ensures clarity and maintainability.

---

## Recommended Directory Tree

```text
Mods/CustomProps/
├── info.json              # Mod metadata
├── main.lua               # Entry point
├── config.lua             # Auxiliary config module
├── logic/
│   ├── spawner.lua        # Auxiliary logic module
│   └── helper.lua
└── assets/                # Asset storage
    ├── textures/
    │   ├── steel_crate.png
    │   └── wood_barrel.png
    └── icons/
        ├── steel_crate_icon.png
        └── wood_barrel_icon.png
```

---

## Modularity & `require`

VCore overrides standard `require` to provide safe loading of auxiliary `.lua` files within the mod's folder:

In `config.lua`:
```lua
local Config = {
    prop_scale = 1.0,
    prop_mass = 12.0
}
return Config
```

In `main.lua`:
```lua
local Config = require("config")

function OnInit()
    Log("Loaded config with prop mass: " .. Config.prop_mass)
end
```

### Path Traversal Guard
Attempting to traverse outside the mod directory (e.g., `require("../other_mod/secret")`) raises a `ScriptRuntimeException: Security violation: path outside mod folder`.

---

## Asset Resolution

When calling asset loaders (`Mod.load_sprite`, `Mod.load_texture`, `Mod.read_text`, `Mod.asset_exists`), the engine searches:
1. Under the `assets/` subfolder: `Mod.load_sprite("textures/steel_crate.png")` -> `Mods/CustomProps/assets/textures/steel_crate.png`.
2. Under the root folder: `Mods/CustomProps/textures/steel_crate.png`.
