# Руководство: Управление камерой (CameraFovChanger)

В этом туториале мы разберем реализацию служебной модификации, позволяющей изменять угол обзора (ортографический зум) камеры с помощью горячих клавиш `F1` и `F2`, а также расширять стандартные лимиты приближения и отдаления свободной камеры.

---

## 1. Манифест `info.json`

Создайте файл `info.json` в папке `Mods/CameraFovChanger/`:

```json
{
  "id": "velvetics.camera_fov",
  "version": "1.0.0",
  "name": "Camera FOV Changer",
  "author": "rdev",
  "description": "Adjusts camera zoom limits and changes FOV via F1 and F2 keys",
  "dependencies": []
}
```

---

## 2. Исходный код `main.lua`

Создайте файл `main.lua`:

```lua
function OnInit()
    print("Camera FOV Changer initialized")
    -- Расширяем стандартные границы масштабирования камеры (от 1.0 до 50.0)
    Camera.set_limits(1.0, 50.0)
end

function OnUpdate(dt)
    -- Нажатие F1: отдаление камеры (увеличение ортографического размера)
    if Input.get_key_down("F1") then
        local size = Camera.get_size()
        Camera.set_size(size + 2.0)
        print("Camera zoom out: " .. tostring(Camera.get_size()))
    end

    -- Нажатие F2: приближение камеры (уменьшение ортографического размера)
    if Input.get_key_down("F2") then
        local size = Camera.get_size()
        Camera.set_size(math.max(1.0, size - 2.0))
        print("Camera zoom in: " .. tostring(Camera.get_size()))
    end
end

function OnUnload()
    print("Camera FOV Changer unloaded")
    -- Возвращаем стандартные лимиты при выгрузке мода
    Camera.set_limits(2.5, 28.0)
end
```

---

## 3. Разбор ключевых моментов

1. **Инициализация (`OnInit`):**  
   Компонент `RoamCam` по умолчанию ограничивает зум колесиком мыши. Вызов `Camera.set_limits(1.0, 50.0)` снимает это ограничение, позволяя игроку как рассматривать микродетали вблизи (`1.0`), так и охватывать колоссальные масштабы арены (`50.0`).
2. **Опрос ввода (`OnUpdate`):**  
   Используется `Input.get_key_down("F1")`, что предотвращает непрерывный спам и срабатывает строго один раз за нажатие клавиши.
3. **Безопасная очистка (`OnUnload`):**  
   При отключении мода через игровое меню восстанавливаются исходные границы камеры `(2.5, 28.0)`, что предотвращает появление артефактов в игре.
