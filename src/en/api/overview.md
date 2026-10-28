# API Reference

The VCore runtime exposes global modules for interacting with the physics world, camera, input, and assets.

---

## Global Tables

All tables and methods support both **PascalCase** and **snake_case**:

| Global Table | Alias | Description |
| :--- | :--- | :--- |
| [`Mod`](mod.md) | `mod` | Mod metadata, paths, sprite/texture/text asset loaders |
| [`World`](world.md) | `world` | Spawning props, crates, pistols, finding and destroying GameObjects |
| [`Camera`](camera.md) | `camera` | Orthographic size, camera zoom limits, positioning, screen-to-world |
| [`Input`](input.md) | `input` | Keyboard keys (KeyCode), mouse buttons, cursor coordinates, scroll |
| [`Physics`](physics.md) | `physics` | 2D Raycast and global gravity manipulation |
| [`Events`](events.md) | `events` | Cross-mod publish/subscribe event bus |
| [`Dials`](dials.md) | `dials` | System settings (language, audio volume, solver iterations, gore) |
| [`Time`](time_log.md) | `time` | Delta time, time scale manipulation (slow-motion, pause) |
| [`Log`](time_log.md) | `log` | Mod-prefixed console logging (`Log`, `LogWarning`, `LogError`) |

---

## Registered Unity Types (UserData)

- **Math:** `Vector2`, `Vector3`, `Color`
- **Game Objects & Hierarchy:** `GameObject`, `Transform`, `Component`
- **2D Physics:** `Rigidbody2D`, `Collider2D`, `BoxCollider2D`
- **Rendering:** `SpriteRenderer`, `Sprite`, `Texture2D`
- **Camera Systems:** `Camera`, `RoamCam`
