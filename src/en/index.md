# Introduction to VCore Modding

**VCore** provides a modular, high-performance environment for building custom modifications using **Lua**. The modding subsystem enables creators to expand the 2D physics sandbox: add custom props and weapons, control the camera, manipulate game physics and time, and integrate custom content into the spawn shelf (SpawnShelf / Q-menu).

---

## Subsystem Architecture

Modding in VCore is powered by **MoonSharp (Lua 5.2)**, running fully in Unity's managed environment without native binary dependencies (ensuring full compatibility across both Mono and IL2CPP build targets).

Key architectural features:
- **Sandbox Isolation:** Each mod runs inside an isolated `Script(CoreModules.Preset_SoftSandbox)` virtual machine.
- **Hot Reload:** Mods can be toggled and reloaded directly from the in-game main menu (`mods`) without restarting the game.
- **Dual-Style API:** All built-in API functions support both `PascalCase` (`Camera.SetSize`) and `snake_case` (`camera.set_size`).
- **Global Event Bus:** Mods can publish and subscribe to cross-mod events via `Events`.
- **Path Traversal Protection:** Built-in security guards block attempts to access files outside the mod's folder.

---

## Mods Location

Installed mods are stored in the root `Mods/` directory alongside the game executable:

```text
VCore/
├── VCore.exe
└── Mods/
    ├── CameraFovChanger/
    │   ├── info.json
    │   └── main.lua
    └── CoolSwords/
        ├── info.json
        ├── main.lua
        └── assets/
            ├── katana.png
            └── katana_icon.png
```

---

## Required Tools

No Unity Editor or C# compilation tools are needed:
1. **Code Editor:** Any text editor (VS Code with *Lua by sumneko*, Sublime Text, Notepad++).
2. **Graphics Editor:** Any image editor supporting transparent `.png` (Aseprite, Photoshop, Paint.NET).
3. **VCore Game Client:** Any test build or development release.
