# Файловая структура

Для поддержания чистоты проекта и удобства сопровождения рекомендуется следовать стандартной иерархии файлов внутри папки модификации.

---

## Рекомендуемое дерево каталогов

```text
Mods/CoolSwords/
├── info.json              # Метаданные мода
├── main.lua               # Точка входа
├── config.lua             # Вспомогательный модуль настроек
├── logic/
│   ├── spawner.lua        # Вспомогательный модуль логики
│   └── weapons.lua
└── assets/                # Папка бинарных и текстовых ресурсов
    ├── textures/
    │   ├── katana.png
    │   └── claymore.png
    └── icons/
        ├── katana_icon.png
        └── claymore_icon.png
```

---

## Модульность и функция `require`

Velvetics-Core переопределяет стандартную функцию `require` для обеспечения безопасной подгрузки вспомогательных Lua-файлов внутри директории мода.

### Пример использования:

В файле `config.lua`:
```lua
local Config = {
    sword_scale = 1.0,
    sword_mass = 2.5,
    sword_friction = 0.5
}

return Config
```

В файле `main.lua`:
```lua
local Config = require("config")
-- Также допустимо: require("config.lua") или require("logic/spawner")

function OnInit()
    Log("Загружена конфигурация с массой: " .. Config.sword_mass)
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

При вызове методов загрузки ресурсов (`Mod.load_sprite`, `Mod.load_texture`, `Mod.read_text`, `Mod.asset_exists`) движок производит умный поиск:
1. Сначала проверяется путь относительно подпапки `assets/` мода:  
   `Mod.load_sprite("textures/katana.png")` -> ищет в `Mods/CoolSwords/assets/textures/katana.png`.
2. Если файл не найден, проверяется путь относительно корня мода:  
   `Mods/CoolSwords/textures/katana.png`.

Это позволяет указывать пути кратко и лаконично, не дублируя префикс `assets/`.
