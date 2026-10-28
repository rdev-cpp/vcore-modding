# Модуль Mod (Ресурсы и данные)

Таблица `Mod` (или `mod`) предоставляет доступ к свойствам текущего мода и безопасным функциям загрузки ресурсов (спрайтов, текстур и текстовых файлов).

---

## Свойства

| Свойство | Тип | Описание |
| :--- | :--- | :--- |
| `Mod.id` | `string` | Идентификатор мода из `info.json` |
| `Mod.name` | `string` | Отображаемое имя мода |
| `Mod.version` | `string` | Версия мода |
| `Mod.author` | `string` | Автор мода |
| `Mod.description` | `string` | Описание |
| `Mod.folder` | `string` | Полный абсолютный путь к папке мода на диске |
| `Mod.assets` | `string` | Полный абсолютный путь к подпапке `assets/` |

---

## Методы загрузки ресурсов

### `Mod.load_sprite(relativePath, pixelsPerUnit)`
Загружает растровое изображение (`.png`, `.jpg`) и создает экземпляр Unity `Sprite`.

- **Параметры:**
  - `relativePath` (`string`): путь к файлу относительно папки `assets/` или корня мода.
  - `pixelsPerUnit` (`number`, опционально): количество пикселей на одну игровую единицу (PPU). По умолчанию: `20.0` (стандартный масштаб физики Velvetics-Core).
- **Возвращает:** объект `Sprite` (`UserData`) или `nil` при ошибке.
- **Псевдоним:** `Mod.LoadSprite(...)`.

```lua
-- Загрузка спрайта с дефолтным PPU 20.0
local sword_sprite = Mod.load_sprite("textures/katana.png")

-- Загрузка спрайта высокого разрешения с PPU 48.0
local hi_res = Mod.load_sprite("textures/katana.png", 48.0)
```

---

### `Mod.load_texture(relativePath)`
Загружает изображение в виде низкоуровневой текстуры `Texture2D` с билинейной фильтрацией.

- **Параметры:** `relativePath` (`string`).
- **Возвращает:** объект `Texture2D` (`UserData`) или `nil`.
- **Псевдоним:** `Mod.LoadTexture(...)`.

---

### `Mod.read_text(relativePath)`
Считывает текстовый файл (конфигурацию, CSV, JSON-разметку) целиком в виде строки.

- **Параметры:** `relativePath` (`string`).
- **Возвращает:** содержимое файла (`string`) или `nil` при ошибке/отсутствии.
- **Псевдоним:** `Mod.ReadText(...)`.

```lua
local raw_json = Mod.read_text("data/stats.json")
if raw_json then
    Log("Конфигурация успешно прочитана, размер: " .. string.len(raw_json) .. " байт")
end
```

---

### `Mod.asset_exists(relativePath)`
Проверяет наличие файла по указанному относительному пути.

- **Параметры:** `relativePath` (`string`).
- **Возвращает:** `boolean` (`true`, если файл существует).
- **Псевдоним:** `Mod.AssetExists(...)`.

---

## Автоматическая очистка памяти

Все созданные через `Mod.load_sprite` и `Mod.load_texture` объекты автоматически регистрируются в реестре мода. При вызове выгрузки мода (`Unload`) движок автоматически вызывает `UnityEngine.Object.Destroy` для каждой текстуры и спрайта, исключая утечки видеопамяти.
