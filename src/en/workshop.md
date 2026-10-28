# Workshop & Publishing

VCore features an in-game mod manager and community workshop scaffold directly accessible from the main menu.

---

## In-Game Mod Manager

Accessed via the **`mods`** button in the main menu:

- **`[ON] / [OFF]` Toggle:** Enable or disable any mod with one click (saved in PlayerPrefs).
- **`open folder`:** Opens the local `Mods/` directory in the system file explorer.
- **`reload`:** Reloads all active mods, flushes textures, rescans the folder, and re-executes scripts without restarting the game.
- **`workshop >`:** Navigates to the community workshop catalog.

---

## Workshop Catalog

### Categories:
- `trending` — Rapidly rising mods.
- `all` — Full catalog.
- `popular` — Highest total downloads and ratings.
- `newest` — Recent releases.
- `weapons` — Firearms and melee weapon packs.
- `props` — Physics items, blocks, and decor.
- `scripts` — Utilities, camera tools, and gameplay systems.

### Sorting:
- `by_trend`, `by_rating`, `by_downloads`, `by_date`.

---

## Packaging for Release

1. Verify `info.json` has a unique `id`, SemVer `version`, and descriptive text.
2. Remove `.bak` or temporary files.
3. Package into a clean `.zip` archive where `info.json` and `main.lua` are located at the root (or in a single top folder).
4. Prepare an optional `256x256` preview image for catalog listings.
