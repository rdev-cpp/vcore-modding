# Introduction to VCore Modding

**VCore** provides a modular, integrated environment for building custom modifications using **Lua**. The modding subsystem enables creators to expand the 2D physics sandbox: add custom physical props and crates, control world gravity and physics, manipulate the camera, time, and integrate directly into the Q-menu (SpawnShelf).

---

## Subsystem Architecture

Modding in VCore is powered by a lightweight, fast Lua scripting engine. The system is fully self-contained, isolated, and optimized for smooth 2D physics simulation.

Key features:
- **Sandbox Isolation:** Each mod runs inside an isolated `Script(CoreModules.Preset_SoftSandbox)` virtual machine.
- **Hot Reload:** Mods can be toggled and reloaded directly from the in-game main menu (`mods`) without restarting the game.
- **Dual-Style API:** All built-in API functions support both `PascalCase` (`Camera.SetSize`) and `snake_case` (`camera.set_size`).
- **Global Event Bus:** Mods can publish and subscribe to cross-mod events via `Events`.
- **Path Traversal Protection:** Built-in security guards block attempts to access files outside the mod's folder.

---

## Mods Location

Installed mods are stored in the `Mods/` directory directly alongside `VCore.exe`:

```text
VCore/
├── VCore.exe
└── Mods/
    ├── CustomProps/
    │   ├── info.json
    │   ├── main.lua
    │   └── assets/
    │       ├── steel_crate.png
    │       └── steel_crate_icon.png
    └── GravityController/
        ├── info.json
        └── main.lua
```

The game scans the `Mods/` folder on startup, validates `info.json` manifests, and executes `main.lua` for active mods.

---

## Required Tools

1. **Code Editor:** Any text editor (VS Code, Sublime Text, Notepad++).
2. **Graphics Editor:** Any image editor supporting transparent `.png` (Aseprite, Photoshop, Paint.NET).
3. **VCore Game Client:** Any current game build.
