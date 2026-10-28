# Tutorial: Gravity Controller (GravityController)

This tutorial walks through creating a gameplay utility **"GravityController"** that manipulates world gravity in real-time using hotkeys.

---

## 1. Directory Tree

```text
Mods/GravityController/
├── info.json
└── main.lua
```

---

## 2. Manifest `info.json`

```json
{
  "id": "vcore.gravity_controller",
  "version": "1.0.0",
  "name": "Gravity Controller",
  "author": "rdev",
  "description": "Switch gravity in real-time: G (Zero-G), H (Inverted), J (Normal)",
  "dependencies": []
}
```

---

## 3. Lua Script `main.lua`

```lua
function OnInit()
    Log("GravityController active: [G] Zero-G, [H] Inverted, [J] Normal")
end

function OnUpdate(dt)
    -- Key G: Zero-G mode
    if Input.get_key_down("G") then
        Physics.set_gravity(0, 0)
        Log("Zero-G mode activated")
    end

    -- Key H: Inverted gravity (upward pull)
    if Input.get_key_down("H") then
        Physics.set_gravity(0, 9.81)
        Log("Inverted gravity activated")
    end

    -- Key J: Restore standard downward gravity
    if Input.get_key_down("J") then
        Physics.set_gravity(0, -9.81)
        Log("Standard gravity restored")
    end
end

function OnUnload()
    -- Safely restore default gravity when disabling mod
    Physics.set_gravity(0, -9.81)
    Log("GravityController unloaded: gravity reset to normal")
end
```

---

## 4. Key Takeaways

1. **`Input.get_key_down("G")`:**  
   Fires strictly on the frame the key was pressed, preventing command flooding.
2. **`Physics.set_gravity(x, y)`:**  
   Instantly updates global physics acceleration for all active entities in the scene.
3. **Safe Cleanup (`OnUnload`):**  
   Restores standard gravity `(0, -9.81)` if the mod is disabled in the menu.
