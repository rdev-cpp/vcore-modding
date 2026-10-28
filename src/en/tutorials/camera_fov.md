# Tutorial: Camera Zoom Tool (CameraFovChanger)

This tutorial walks through creating a utility mod that adjusts camera zoom limits and changes the field of view using the `F1` and `F2` keys.

---

## 1. Manifest `info.json`

Create `info.json` in `Mods/CameraFovChanger/`:

```json
{
  "id": "velvetics.camera_fov",
  "version": "1.0.0",
  "name": "Camera FOV Changer",
  "author": "rdev",
  "description": "Adjusts camera zoom limits and changes FOV via F1 and F2 keys",
  "dependencies": []
}
```

---

## 2. Lua Script `main.lua`

Create `main.lua`:

```lua
function OnInit()
    print("Camera FOV Changer initialized")
    -- Expand camera roam zoom limits (1.0 to 50.0)
    Camera.set_limits(1.0, 50.0)
end

function OnUpdate(dt)
    -- Zoom out on F1
    if Input.get_key_down("F1") then
        local size = Camera.get_size()
        Camera.set_size(size + 2.0)
        print("Camera zoom out: " .. tostring(Camera.get_size()))
    end

    -- Zoom in on F2
    if Input.get_key_down("F2") then
        local size = Camera.get_size()
        Camera.set_size(math.max(1.0, size - 2.0))
        print("Camera zoom in: " .. tostring(Camera.get_size()))
    end
end

function OnUnload()
    print("Camera FOV Changer unloaded")
    -- Restore default zoom limits
    Camera.set_limits(2.5, 28.0)
end
```
