# Руководство: Кастомные пропы и ящики (CustomProps)

В этом практическом руководстве мы создадим пак новых физических объектов **"CustomProps"**, добавив в игру стальной ящик, деревянную бочку и тяжелый бетонный блок.

---

## 1. Структура файлов

```text
Mods/CustomProps/
├── info.json
├── main.lua
└── assets/
    ├── steel_crate.png          # Спрайт 32x32 px
    ├── steel_crate_icon.png     # Иконка для Q-меню 32x32 px
    ├── wood_barrel.png
    ├── wood_barrel_icon.png
    ├── heavy_block.png
    └── heavy_block_icon.png
```

---

## 2. Манифест `info.json`

```json
{
  "id": "vcore.custom_props",
  "version": "1.0.0",
  "name": "Набор новых пропов",
  "author": "rdev",
  "description": "Добавляет стальной ящик, бочку и бетонный блок на полку пропов",
  "dependencies": []
}
```

---

## 3. Скрипт `main.lua`

```lua
local props = {
    { name = "Стальной ящик", file = "steel_crate", mass = 12.0, friction = 0.6, bounce = 0.05 },
    { name = "Деревянная бочка", file = "wood_barrel", mass = 4.0, friction = 0.4, bounce = 0.3 },
    { name = "Бетонный блок", file = "heavy_block", mass = 30.0, friction = 0.8, bounce = 0.02 }
}

function OnInit()
    Log("CustomProps mod загружен: " .. Mod.name)

    for _, p in ipairs(props) do
        -- 1. Загрузка иконки для слота Q-меню
        local icon = Mod.load_sprite(p.file .. "_icon.png")

        -- 2. Загрузка игрового спрайта (PPU = 20.0)
        local sprite = Mod.load_sprite(p.file .. ".png", 20.0)

        -- 3. Регистрация на полке 0 (Props)
        World.register_spawn_item(0, icon, function(x, y)
            local prop = World.create_prop(
                p.name,
                sprite,
                x, y,
                p.mass,     -- Физическая масса
                p.friction, -- Коэффициент трения
                p.bounce    -- Коэффициент отскока
            )
            return prop
        end)
    end
end

function OnUnload()
    Log("CustomProps mod выгружен")
end
```

---

## 4. Разбор параметров физики

- **`mass`:** Масса объекта в килограммах. Легкая бочка (4 кг) легко катится и сдвигается персонажами, а бетонный блок (30 кг) устойчив к ударам.
- **`friction`:** Трение поверхности (от 0.0 до 1.0). Высокое трение у бетона (0.8) предотвращает скольжение по наклонным плоскостям.
- **`bounce`:** Упругость отскока. Деревянная бочка (0.3) отскакивает при падении, а тяжелый блок (0.02) поглощает кинетическую энергию.
