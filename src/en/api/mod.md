# Module: Mod (Assets & Metadata)

The `Mod` (or `mod`) table provides access to the current mod's properties and sandboxed asset loading methods.

---

## Properties

| Property | Type | Description |
| :--- | :--- | :--- |
| `Mod.id` | `string` | Mod ID from `info.json` |
| `Mod.name` | `string` | Display name |
| `Mod.version` | `string` | Version string |
| `Mod.author` | `string` | Author name |
| `Mod.description` | `string` | Description |
| `Mod.folder` | `string` | Absolute path to the mod directory |
| `Mod.assets` | `string` | Absolute path to the `assets/` subfolder |

---

## Asset Loading Methods

### `Mod.load_sprite(relativePath, pixelsPerUnit)`
Loads an image (`.png`, `.jpg`) and creates a Unity `Sprite`.

- **Parameters:**
  - `relativePath` (`string`): Path relative to `assets/` or the mod root.
  - `pixelsPerUnit` (`number`, optional): Pixels per unit (PPU). Default: `20.0` (standard VCore physics scale).
- **Returns:** `Sprite` (`UserData`) or `nil`.
- **Alias:** `Mod.LoadSprite(...)`.

```lua
local katana_sprite = Mod.load_sprite("textures/katana.png", 24.0)
```

---

### `Mod.load_texture(relativePath)`
Loads an image into a low-level `Texture2D` with bilinear filtering.

- **Parameters:** `relativePath` (`string`).
- **Returns:** `Texture2D` (`UserData`) or `nil`.
- **Alias:** `Mod.LoadTexture(...)`.

---

### `Mod.read_text(relativePath)`
Reads an entire text file (JSON, TXT, CSV) into a string.

- **Parameters:** `relativePath` (`string`).
- **Returns:** `string` or `nil`.
- **Alias:** `Mod.ReadText(...)`.

---

### `Mod.asset_exists(relativePath)`
Checks if a file exists within the mod's directory.

- **Parameters:** `relativePath` (`string`).
- **Returns:** `boolean`.
- **Alias:** `Mod.AssetExists(...)`.

---

## Automatic Resource Cleanup

All sprites and textures loaded through `Mod.load_sprite` and `Mod.load_texture` are tracked by the runtime and destroyed via `UnityEngine.Object.Destroy` when the mod unloads, preventing GPU memory leaks.
