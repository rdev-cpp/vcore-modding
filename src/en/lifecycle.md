# Lifecycle Hooks

Active mods receive callbacks corresponding to Unity's core execution loop.

Both **PascalCase** and **snake_case** function names are supported.

---

## Hooks Summary

| Hook (PascalCase) | Hook (snake_case) | Arguments | Description |
| :--- | :--- | :--- | :--- |
| `OnInit()` | `on_init()` | `—` | Called once immediately after the script compiles. Ideal for Q-menu registration and initial setup. |
| `OnUpdate(dt)` | `on_update(dt)` | `dt` (`number`) | Called every render frame (Unity `Update`). `dt` is `Time.deltaTime`. Used for input polling and visual logic. |
| `OnFixedUpdate(dt)` | `on_fixed_update(dt)` | `dt` (`number`) | Called every physics simulation step (Unity `FixedUpdate`). `dt` is `Time.fixedDeltaTime`. Used for forces and physics ticks. |
| `OnSceneLoaded(idx, name)` | `on_scene_loaded(idx, name)` | `idx` (`number`), `name` (`string`) | Called whenever a new scene finishes loading. Passes build index and scene name. |
| `OnGUI()` | `on_gui()` | `—` | Called during Unity's Immediate Mode GUI (IMGUI) pass for debug overlays. |
| `OnUnload()` | `on_unload()` | `—` | Called before the mod is disabled or reloaded. Used for cleaning up custom state. |

---

## Example

```lua
local frames = 0

function OnInit()
    Log("Mod initialized")
end

function OnUpdate(dt)
    frames = frames + 1
    if Input.get_key_down("Space") then
        Log("Space pressed on frame: " .. frames .. " (dt: " .. dt .. ")")
    end
end

function OnFixedUpdate(dt)
    -- Fixed physics tick
end

function OnSceneLoaded(scene_index, scene_name)
    Log("Scene loaded: " .. scene_name)
end

function OnUnload()
    Log("Mod unloaded cleanly")
end
```
