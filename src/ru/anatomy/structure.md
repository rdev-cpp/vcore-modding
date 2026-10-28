# Файловая структура

Для поддержания чистоты проекта и удобства сопровождения рекомендуется следовать стандартной иерархии файлов внутри папки модификации.

---

## Рекомендуемое дерево каталогов

```text
Mods/CustomProps/
├── info.json              # Метаданные мода
├── main.lua               # Точка входа
├── config.lua             # Вспомогательный модуль настроек
├── logic/
│   ├── spawner.lua        # Вспомогательный модуль логики
│   └── helper.lua
└── assets/                # Папка бинарных и текстовых ресурсов
    ├── textures/
    │   ├── steel_crate.png
    │   └── wood_barrel.png
    └── icons/
        ├── steel_crate_icon.png
        └── wood_barrel_icon.png
```

---

## Модульность и функция `require`

VCore переопределяет стандартную функцию `require` для обеспечения безопасной подгрузки вспомогательных Lua-файлов внутри директории мода.

### Пример использования:

В файле `config.lua`:
```lua
local Config = {
    prop_scale = 1.0,
    prop_mass = 12.0,
    prop_friction = 0.6
}

return Config
```

В файле `main.lua`:
```lua
local Config = require("config")
-- Также допустимо: require("config.lua") или require("logic/spawner")

function OnInit()
    Log("Загружена конфигурация с массой: " .. Config.prop_mass)
end
```

### Защита от выхода за пределы папки (Path Traversal)

Среда исполнения строго контролирует пути к подгружаемым файлам:
- Разрешены только пути внутри корневой папки текущего мода.
- Любая попытка использовать относительный путь с выходом наружу (например, `require("../another_mod/secret")`) немедленно прерывается вызовом исключения безопасности `ScriptRuntimeException`:
  ```text
  Security violation: path outside mod folder '../another_mod/secret'
  ```

---

## Разрешение путей к ассетам

При вызове методов загрузки ресурсов (`Mod.load_sprite`, `Mod.load_texture`, `Mod.read_text`, `Mod.asset_exists`) движок производит поиск:
1. Сначала проверяется путь относительно подпапки `assets/` мода:  
   `Mod.load_sprite("textures/steel_crate.png")` -> ищет в `Mods/CustomProps/assets/textures/steel_crate.png`.
2. Если файл не найден, проверяется путь относительно корня мода:  
   `Mods/CustomProps/textures/steel_crate.png`.
