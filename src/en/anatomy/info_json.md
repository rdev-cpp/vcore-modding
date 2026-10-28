# Manifest info.json

The `info.json` file is placed in the root of the mod folder and describes metadata for the `ModManager` and in-game Workshop.

---

## Schema Specification

```json
{
  "id": "custom_props",
  "version": "1.0.0",
  "name": "Custom Props Pack",
  "author": "rdev",
  "description": "Adds custom steel crates, barrels, and concrete barriers",
  "dependencies": []
}
```

### Fields

| Field | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `id` | `string` | Yes | Unique identifier. Used to persist enabled state in PlayerPrefs (`vc.mod.<id>`). |
| `version` | `string` | Yes | Semantic version string (`MAJOR.MINOR.PATCH`). Default: `"1.0.0"`. |
| `name` | `string` | Yes | Human-readable name displayed in mods menu and workshop cards. |
| `author` | `string` | No | Author or studio name. |
| `description`| `string` | No | Description of mod functionality and controls. |
| `dependencies`| `string[]` | No | Array of other mod IDs required by this mod. |

---

## Fallback Rules

- **Missing `id`:** The engine automatically falls back to the folder name.
- **Missing `name`:** The engine falls back to `id`.
- **Missing `dependencies`:** Initialized to an empty array `[]`.
- **Malformed JSON:** The mod enters an error state (`errorMessage = "Failed to deserialize info.json"`) without crashing the game.
