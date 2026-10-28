# vcore-modding

Documentation and Lua API reference for VCore.

Online guide: [https://rdev-cpp.github.io/vcore-modding/](https://rdev-cpp.github.io/vcore-modding/)

---

## Overview

VCore supports user modifications written in Lua, running in an isolated sandbox.

This repository hosts the source markdown files for the documentation site, built with [mdBook](https://rust-lang.github.io/mdBook/).

### Topics Covered
- **Quickstart:** Simple mod creating crates on key press
- **Mod Anatomy:** `info.json` specification, directory tree, modular `require`
- **Lifecycle:** `OnInit`, `OnUpdate`, `OnFixedUpdate`, `OnSceneLoaded`, `OnGUI`, `OnUnload`
- **API Reference:** `Mod`, `World`, `Camera`, `Input`, `Physics`, `Events`, `Dials`, `Time`, `Log`
- **SpawnShelf:** Adding custom props to the Q-menu
- **Sandbox:** Allowed libraries, restricted functions, path traversal protection
- **Tutorials:** Custom props pack (`CustomProps`) and gravity controller (`GravityController`)

---

## Local Development

```bash
# Build documentation
mdbook build

# Run local preview server
mdbook serve --open
```

Site opens at `http://localhost:3000`.

---

## License

MIT
