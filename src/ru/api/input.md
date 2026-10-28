# Модуль Input (Ввод и клавиши)

Таблица `Input` (или `input`) предоставляет доступ к состоянию физической клавиатуры, кнопок мыши и координат курсора.

---

## Опрос клавиатуры

Все строковые имена клавиш нечувствительны к регистру и соответствуют именам перечисления [KeyCode](https://docs.unity3d.com/ScriptReference/KeyCode.html) движка Unity (например: `"Space"`, `"F1"`, `"LeftShift"`, `"Return"`, `"Alpha1"`, `"W"`, `"A"`, `"S"`, `"D"`).

### `Input.get_key(keyName)`
Возвращает `true`, пока указанная клавиша удерживается зажатой.

- **Параметры:** `keyName` (`string`).
- **Возвращает:** `boolean`.
- **Псевдоним:** `Input.GetKey(...)`.

---

### `Input.get_key_down(keyName)`
Возвращает `true` строго в течение одного кадра, в который клавиша была нажата.

- **Параметры:** `keyName` (`string`).
- **Возвращает:** `boolean`.
- **Псевдоним:** `Input.GetKeyDown(...)`.

---

### `Input.get_key_up(keyName)`
Возвращает `true` строго в кадр, когда клавиша была отпущена.

- **Параметры:** `keyName` (`string`).
- **Возвращает:** `boolean`.
- **Псевдоним:** `Input.GetKeyUp(...)`.

```lua
function OnUpdate(dt)
    if Input.get_key_down("R") then
        Log("Клавиша R нажата")
    end
    
    if Input.get_key("LeftShift") and Input.get_key_down("F") then
        Log("Комбинация Shift + F активирована")
    end
end
```

---

## Опрос кнопок мыши

Индексы кнопок мыши:
- `0` — Левая кнопка мыши (ЛКМ)
- `1` — Правая кнопка мыши (ПКМ)
- `2` — Средняя кнопка мыши (колесико)

| Метод | Псевдоним | Описание |
| :--- | :--- | :--- |
| `Input.get_mouse_button(btn)` | `Input.GetMouseButton(btn)` | `true`, пока кнопка `btn` зажата |
| `Input.get_mouse_button_down(btn)` | `Input.GetMouseButtonDown(btn)` | `true` в кадр нажатия кнопки `btn` |
| `Input.get_mouse_button_up(btn)` | `Input.GetMouseButtonUp(btn)` | `true` в кадр отпускания кнопки `btn` |

---

## Координаты и колесико мыши

### `Input.get_mouse_position()`
Возвращает координаты курсора в экранных пикселях (где `(0, 0)` — левый нижний угол экрана).

- **Возвращает:** таблицу `{ x = number, y = number }`.
- **Псевдоним:** `Input.GetMousePosition()`.

---

### `Input.get_mouse_scroll()`
Возвращает дельту вращения колесика мыши за текущий кадр.

- **Возвращает:** таблицу `{ x = number, y = number }` (где `y > 0` при прокрутке вперед, `y < 0` при прокрутке назад).
- **Псевдоним:** `Input.GetMouseScroll()`.
