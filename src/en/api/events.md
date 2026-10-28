# Module: Events (Event Bus)

The `Events` (or `events`) table provides a Publish/Subscribe mechanism for communication between different mods and runtime systems.

---

## Methods

### `Events.subscribe(eventName, callback)`
Registers a listener callback for the specified event string.

- **Alias:** `Events.Subscribe(...)`.

### `Events.unsubscribe(eventName, callback)`
Removes a previously registered listener callback.

- **Alias:** `Events.Unsubscribe(...)`.

### `Events.fire(eventName, data)`
Fires an event and delivers the payload to all registered listeners.

- **Alias:** `Events.Fire(...)`.

---

## Example: Cross-Mod Communication

### Mod A: Spawner
```lua
function SpawnBigExplosion(x, y)
    Events.fire("custom_explosion", { x = x, y = y, radius = 5.0 })
end
```

### Mod B: Camera Effects
```lua
function OnInit()
    Events.subscribe("custom_explosion", function(data)
        Log("Explosion caught at X=" .. data.x .. " Y=" .. data.y)
    end)
end
```

---

## Automatic Cleanup

When a mod is disabled or reloaded, `ModEventBus` automatically unbinds all listeners registered by that mod's script instance.
