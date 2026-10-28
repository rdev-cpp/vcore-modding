# Руководство: Холодное оружие (CoolSwords)

В этом практическом руководстве мы создадим полноценный пак оружия **"CoolSwords"**, состоящий из 5 клинков с собственными текстурами, иконками для меню спавна и физическими свойствами.

---

## 1. Структура файлов

```text
Mods/CoolSwords/
├── info.json
├── main.lua
└── assets/
    ├── iron_sword.png           # Спрайт 20x80 px
    ├── iron_sword_icon.png      # Иконка 32x32 px
    ├── blood_sword.png
    ├── blood_sword_icon.png
    ├── shadow_blade.png
    ├── shadow_blade_icon.png
    ├── golden_saber.png
    ├── golden_saber_icon.png
    ├── ember_katana.png
    └── ember_katana_icon.png
```

---

## 2. Манифест `info.json`

```json
{
  "id": "velvetics.cool_swords",
  "version": "1.0.0",
  "name": "Новые крутые мечи",
  "author": "rdev",
  "description": "Добавляет 5 пропов мечей и иконки к ним",
  "dependencies": []
}
```

---

## 3. Скрипт `main.lua`

```lua
local swords = {
    { name = "Железный меч", file = "iron_sword", mass = 2.0 },
    { name = "Кровавый меч", file = "blood_sword", mass = 2.2 },
    { name = "Клинок теней", file = "shadow_blade", mass = 1.8 },
    { name = "Золотая сабля", file = "golden_saber", mass = 2.5 },
    { name = "Катана тления", file = "ember_katana", mass = 1.5 }
}

function OnInit()
    print("Cool Swords mod loaded: " .. Mod.name)
    
    for i, s in ipairs(swords) do
        -- 1. Загрузка иконки для панели спавна
        local icon = Mod.load_sprite(s.file .. "_icon.png")
        
        -- 2. Загрузка игрового спрайта меча с PPU = 24.0
        local sprite = Mod.load_sprite(s.file .. ".png", 24.0)

        -- 3. Регистрация в SpawnShelf (дорожка 1 - Melee/Weapons)
        World.register_spawn_item(1, icon, function(x, y)
            local prop = World.create_prop(
                s.name, 
                sprite, 
                x, y, 
                s.mass, -- Физическая масса оружия
                0.4,    -- Трение
                0.1     -- Упругость отскока
            )
            return prop
        end)
    end
end

function OnUnload()
    print("Cool Swords mod unloaded")
end
```

---

## 4. Разбор масштабирования (Pixels Per Unit)

В двумерном физическом движке Unity одна единица сетки (`1 unit`) эквивалентна **1 метру**.

Если размер текстуры меча составляет `20x80` пикселей:
- При стандартном `PPU = 100`: длина меча составит `80 / 100 = 0.8` метра (короткий кинжал).
- При `PPU = 24.0`: длина меча составит `80 / 24 ≈ 3.33` метра (двуручный меч / катана под масштаб рэгдоллов Velvetics).

Движок автоматически применяет к загружаемым спрайтам режим фильтрации `Point` (Nearest Neighbor), благодаря чему пиксель-арт остается кристально четким при любом приближении камеры без размытия.
