# Модуль World (Мир и спавн)

Таблица `World` (или `world`) предоставляет функции для взаимодействия со сценой, создания стандартных и кастомных физических объектов, регистрации предметов в интерфейсе спавна и управления жизненным циклом игровых объектов.

---

## Методы создания объектов

### `World.create_prop(name, sprite, x, y, mass, friction, bounce, scale)`
Создает полноценный интерактивный 2D физический объект со спрайтом, коллайдером и стандартными компонентами песочницы Velvetics-Core.

- **Параметры:**
  - `name` (`string`): имя создаваемого `GameObject` в иерархии Unity.
  - `sprite` (`Sprite`): объект спрайта, полученный через `Mod.load_sprite`.
  - `x`, `y` (`number`): координаты начального положения в мировом пространстве.
  - `mass` (`number`, опционально, по умолчанию `1.0`): масса объекта в килограммах.
  - `friction` (`number`, опционально, по умолчанию `0.4`): коэффициент трения.
  - `bounce` (`number`, опционально, по умолчанию `0.1`): коэффициент упругости отскока (от `0.0` до `1.0`).
  - `scale` (`number`, опционально, по умолчанию `1.0`): масштабирование объекта (`localScale`).
- **Возвращает:** созданный `GameObject` (`UserData`).
- **Псевдоним:** `World.CreateProp(...)`.

> **Автоматически подключаемые компоненты:**  
> Созданный объект автоматически получает:
> - `Rigidbody2D` с непрерывным детектированием коллизий (`Continuous`) и интерполяцией (`Interpolate`).
> - `BoxCollider2D`, точно подогнанный под габариты переданного спрайта.
> - `PhysicsMaterial2D` с заданными параметрами трения и упругости.
> - `Grit` (система прочности и разрушения с запасом `tough = 50`).
> - `Knocker` (обработка звуков ударов и кинетических импульсов).
> - `Blotch` (система наложения следов крови, грязи и сколов).

```lua
local sprite = Mod.load_sprite("textures/katana.png", 24.0)
local katana = World.create_prop(
    "Katana_Blade",
    sprite,
    0.0, 5.0,  -- X, Y
    2.5,       -- Масса (2.5 кг)
    0.5,       -- Трение
    0.1,       -- Упругость
    1.0        -- Масштаб
)
```

---

### `World.spawn_crate(x, y)`
Создает стандартный физический ящик Velvetics-Core в указанных мировых координатах.

- **Параметры:** `x`, `y` (`number`).
- **Возвращает:** `GameObject` (`UserData`).
- **Псевдоним:** `World.SpawnCrate(...)`.

---

### `World.spawn_pistol(x, y)`
Спавнит стандартный огнестрельный пистолет Velvetics-Core.

- **Параметры:** `x`, `y` (`number`).
- **Возвращает:** `GameObject` (`UserData`).
- **Псевдоним:** `World.SpawnPistol(...)`.

---

## Регистрация в меню спавна (SpawnShelf)

### `World.register_spawn_item(lane, icon_sprite, spawn_func)`
Регистрирует кастомный предмет в боковом меню спавна (открывается по клавише `Q`).

- **Параметры:**
  - `lane` (`number`): индекс полки (от `0` до `5`). Подробнее см. раздел [SpawnShelf](../shelf.md).
  - `icon_sprite` (`Sprite`): спрайт квадратной иконки для слота (рекомендуется размер 32x32 или 48x48).
  - `spawn_func` (`function(x, y)`): функция обратного вызова, принимающая координаты курсора в мире `x`, `y` и возвращающая созданный `GameObject`.
- **Псевдоним:** `World.RegisterSpawnItem(...)`.

```lua
local icon = Mod.load_sprite("icons/sword_icon.png", 20.0)

World.register_spawn_item(3, icon, function(x, y)
    local spr = Mod.load_sprite("textures/sword.png", 24.0)
    return World.create_prop("CustomSword", spr, x, y, 2.0, 0.4, 0.1, 1.0)
end)
```

---

## Поиск и уничтожение объектов

### `World.find(name)`
Выполняет поиск активного игрового объекта по имени в текущей сцене Unity.

- **Параметры:** `name` (`string`).
- **Возвращает:** `GameObject` (`UserData`) или `nil`, если объект не найден.

---

### `World.find_with_tag(tag)`
Находит все активные объекты с указанным тегом.

- **Параметры:** `tag` (`string`).
- **Возвращает:** массив (`table`) объектов `GameObject`.

---

### `World.destroy(gameObject)`
Безопасно уничтожает игровой объект и все связанные с ним компоненты.

- **Параметры:** `gameObject` (`UserData`).
- **Псевдоним:** `World.Destroy(...)`.

```lua
local old_prop = World.find("ObsoleteProp")
if old_prop then
    World.destroy(old_prop)
end
```
