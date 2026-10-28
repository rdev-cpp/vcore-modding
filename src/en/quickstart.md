# Quickstart

In this guide, we will build a working mod called **"BoxSpawner"** in under 3 minutes. The mod will print an initialization greeting and spawn a physical crate at the cursor position whenever the `H` key is pressed.

---

## Step 1. Create Mod Folder

Navigate to the game directory and open the `Mods/` folder. Inside, create a new folder:

```text
Mods/BoxSpawner/
```

---

## Step 2. Create info.json

Inside `Mods/BoxSpawner/`, create an `info.json` file:

```json
{
  "id": "box_spawner",
  "version": "1.0.0",
  "name": "Box Spawner",
  "author": "Modder",
  "description": "Spawns crates at the cursor position on key H",
  "dependencies": []
}
```

---

## Step 3. Write Logic in main.lua

Create `main.lua` in the same directory:

```lua
function OnInit()
    Log("BoxSpawner initialized! Press H to spawn crates.")
end

function OnUpdate(dt)
    if Input.get_key_down("H") then
        local mouse = Input.get_mouse_position()
        local world_pos = Camera.screen_to_world(mouse.x, mouse.y)
        
        local crate = World.spawn_crate(world_pos.x, world_pos.y)
        Log("Crate spawned at: X=" .. string.format("%.2f", world_pos.x) .. ", Y=" .. string.format("%.2f", world_pos.y))
    end
end
```

---

## Step 4. Test in Game

1. Launch VCore.
2. In the main menu, click **mods**.
3. You will see **Box Spawner [ON]**.
4. Click **play** to enter the sandbox.
5. Move the mouse cursor anywhere and press `H`. A physical crate will appear, obeying Box2D physics and collisions.
