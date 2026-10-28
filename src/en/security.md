# Sandbox & Security

Security and isolation are core design requirements of the VCore modding runtime.

---

## Sandbox Preset: `Preset_SoftSandbox`

Each mod's MoonSharp virtual machine runs with `CoreModules.Preset_SoftSandbox`, allowing only safe algorithmic libraries:

### Allowed Libraries:
- **`Basic`**: `assert`, `error`, `ipairs`, `pairs`, `next`, `pcall`, `xpcall`, `select`, `tonumber`, `tostring`, `type`, `unpack`.
- **`Table`**: `table.insert`, `table.remove`, `table.sort`, `table.concat`.
- **`String`**: `string.format`, `string.sub`, `string.find`, `string.gsub`, `string.match`, `string.len`.
- **`Math`**: `math.abs`, `math.sin`, `math.cos`, `math.floor`, `math.ceil`, `math.random`, `math.sqrt`.
- **`Bit32`**: `bit32.band`, `bit32.bor`, `bit32.bxor`, `bit32.lshift`, `bit32.rshift`.

---

## Blocked APIs

| Blocked Library | Security Reason |
| :--- | :--- |
| **`os`** (`os.execute`, `os.getenv`) | Blocks executing arbitrary system commands, launching external processes, or reading host environment variables. |
| **`io`** (`io.open`, `io.read`) | Blocks unconstrained direct disk access outside the mod folder. |
| **`debug`** (`debug.getinfo`) | Blocks callstack inspection and VM sandbox escapes. |
| **`package`** (`package.loadlib`) | Blocks loading arbitrary native C/C++ `.dll` / `.so` libraries. |

---

## Path Traversal Protection

All file access operations (`Mod.load_sprite`, `Mod.load_texture`, `Mod.read_text`, `Mod.asset_exists`, and `require`) validate canonical file paths.

If a path resolves outside the root directory of the mod, it is immediately rejected:
```text
Security violation: attempt to access path outside mod directory: ../../secret
```

---

## Mod Isolation

Every mod runs inside an independent `Script` instance. Global variables declared in Mod A are completely invisible to Mod B. Inter-mod messaging is performed strictly via the [`Events`](api/events.md) bus.
