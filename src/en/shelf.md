# SpawnShelf (Q-Menu)

**SpawnShelf** is the slide-out item spawning panel summoned by holding **`Q`**. The drawer consists of 6 themed lanes.

---

## Lane Breakdown

| Lane | Name | Purpose | Examples |
| :---: | :--- | :--- | :--- |
| **`0`** | **Props** | Boxes, crates, environment items | Steel crate, wooden barrel |
| **`1`** | **Ragdolls** | Humanoids, ragdoll mannequins | Test dummy, character |
| **`2`** | **Guns** | Firearms, pistols, rifles | Pistol, revolver |
| **`3`** | **Melee** | Blades, swords, blunt weapons | Sword, club, spear |
| **`4`** | **Explosives** | Barrels, bombs, mines | Explosive barrel, C4 |
| **`5`** | **Misc** | Mechanisms, wheels, contraptions | Hinges, wheels, thrusters |

---

## Registration Syntax

```lua
World.register_spawn_item(lane_index, icon_sprite, spawn_function)
```

- `lane_index` (`number`): Integer from `0` to `5`.
- `icon_sprite` (`Sprite`): Square slot icon (recommended: **32x32** or **48x48** px).
- `spawn_function` (`function(x, y)`): Function called on click with world coordinates, returning the spawned `GameObject`.

---

## Complete Example

```lua
function OnInit()
    local crate_icon = Mod.load_sprite("icons/steel_crate_icon.png")
    local barrel_icon = Mod.load_sprite("icons/wood_barrel_icon.png")
    
    -- Register steel crate on lane 0 (Props)
    World.register_spawn_item(0, crate_icon, function(x, y)
        local spr = Mod.load_sprite("textures/steel_crate.png", 20.0)
        return World.create_prop("SteelCrate", spr, x, y, 12.0, 0.6, 0.05, 1.0)
    end)

    -- Register wooden barrel on lane 0 (Props)
    World.register_spawn_item(0, barrel_icon, function(x, y)
        local spr = Mod.load_sprite("textures/wood_barrel.png", 20.0)
        return World.create_prop("WoodBarrel", spr, x, y, 4.0, 0.4, 0.3, 1.0)
    end)
    
    Log("Props registered on SpawnShelf!")
end
```

When the player selects the slot in the Q-menu, a semi-transparent ghost preview follows the cursor until left-clicked to place.
