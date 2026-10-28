# Mod Anatomy

Each modification in VCore lives in its own dedicated subfolder inside the `Mods/` directory.

---

## Required Files

For the game to recognize and load a mod, the folder must contain:

1. **`info.json`** — manifest describing mod ID, display name, version, author, and dependencies.
2. **`main.lua`** — entry point containing Lua code and lifecycle hook implementations.

---

## Subsections

- [Manifest info.json](anatomy/info_json.md) — complete schema, data types, and fallback rules.
- [Folder Structure](anatomy/structure.md) — organizing `assets/`, modular `require()`, and path security.
