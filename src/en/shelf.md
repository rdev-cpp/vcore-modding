# SpawnShelf (Q-Menu)

**SpawnShelf** is the slide-out item spawning panel summoned by holding **`Q`**. The drawer consists of 6 themed lanes.

---

## Lane Breakdown

| Lane | Name | Purpose | Examples |
| :---: | :--- | :--- | :--- |
| **`0`** | **Props** | Boxes, crates, environment items | Wooden crate, steel cube |
| **`1`** | **Ragdolls** | Humanoids, ragdoll mannequins | Test dummy, character |
| **`2`** | **Guns** | Firearms, pistols, rifles | Pistol, revolver |
| **`3`** | **Melee** | Blades, swords, blunt weapons | Katana, broadsword, club |
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
    local icon = Mod.load_sprite("icons/sword_icon.png")
    
    World.register_spawn_item(3, icon, function(x, y)
        local spr = Mod.load_sprite("textures/sword.png", 24.0)
        return World.create_prop("Broadsword", spr, x, y, 2.0, 0.4, 0.1, 1.0)
    end)
    
    Log("Broadsword registered on Melee lane!")
end
```

When the player selects the slot in the Q-menu, a semi-transparent ghost preview follows the cursor until left-clicked to place.
