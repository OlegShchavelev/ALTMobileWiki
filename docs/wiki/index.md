# Документация

В рамках проекта ALT Mobile проводится работа по поддержке мобильных устройств на базе проекта Sisyphus.

## Целеполагание

### Базовая система на СПО

Фундаментальной целью проекта является построение операционной системы мобильного устройства (телефон, планшет) целиком и полностью на свободном ПО. Мы считаем, что это единственный способ, при котором пользователь может получить полноценный контроль над своим устройством, а не наоборот; это работающий способ контроля над своими данными и путь к цифровому суверенитету.

В нашей системе загрузчик, ядро, базовые компоненты операционной системы (пользовательская оболочка, ядро, браузер, основные пользовательские приложения) являются СПО — таким образом, устройством можно пользоваться из коробки без проприетарного ПО на основном системном процессоре.

Исключение делается только для низкоуровневых компонент, работающих на обособленных чипах: например, прошивки wifi, bluetooth и прочих периферийных устройств. Но и здесь мы отдаём предпочтение свободным прошивкам при их наличии, например, [`pinephone_modem_sdk`](https://github.com/the-modem-distro/pinephone_modem_sdk) для модемов EG25-G.

**А как же проприетарное ПО?**

Его вполне можно использовать при желании и наличии совместимости, но его использование не должно быть обязательным для нормального функционирования устройства. Безусловно, это может негативно сказаться на безопасности и приватности.

### Полноценный Linux на телефоне

Наша цель — предоставить на мобильном устройстве полноценный Линукс, точно тот же Альт, что есть и на других устройствах, но с оболочкой и приложениями, поддерживающими мобильный интерфейс. Это не какая-то отдельная операционная система, не клон Android, а самый обычный Альт Линукс.

## Поддерживаемое оборудование

Построение базовой системы на СПО позволяет легко добавить поддержку нового оборудования при условии наличия `devicetree` и исходников драйверов устройств.

На текущий момент поддерживается ниже перечисленное оборудование

### Смартфоны

| **Модель**           |    PinePhone    |  PinePhone Pro  |
| -------------------- | :-------------: | :-------------: |
| **Статус**           | Готов к работе  | Готов к работе  |
| **Процессор / SoC**  |  Allwinner A64  | Rockchip RK3399 |
| **Экран**            | :green_circle:  | :green_circle:  |
| **Графика**          | :green_circle:  | :green_circle:  |
| **Накопитель**       | :green_circle:  | :green_circle:  |
| **Батарея**          | :green_circle:  | :green_circle:  |
| **Датчики**          | :green_circle:  | :green_circle:  |
| **Звук**             | :green_circle:  | :green_circle:  |
| **Bluetooth**        | :green_circle:  | :green_circle:  |
| **Wi-Fi**            | :green_circle:  | :green_circle:  |
| **Сеть по USB**      | :green_circle:  | :green_circle:  |
| **Камера**           | :yellow_circle: | :yellow_circle: |
| **Мобильные данные** | :green_circle:  | :green_circle:  |
| **USB-OTG**          | :green_circle:  | :green_circle:  |
| **NFC**              | :black_circle:  | :black_circle:  |

### Планшеты

| **Модель**           |     PineTab 2     |     MIG T8X     |
| -------------------- | :---------------: | :-------------: |
| **Статус**           | Требует доработки |                 |
| **Процессор / SoC**  |  Rockchip RK3566  |                 |
| **Экран**            |  :green_circle:   | :green_circle:  |
| **Графика**          |  :green_circle:   | :green_circle:  |
| **Накопитель**       |  :green_circle:   | :green_circle:  |
| **Батарея**          |  :green_circle:   | :green_circle:  |
| **Датчики**          |  :yellow_circle:  | :green_circle:  |
| **Звук**             |  :green_circle:   | :green_circle:  |
| **Bluetooth**        |  :red_circle:\*   | :green_circle:  |
| **Wi-Fi**            |  :yellow_circle:  | :yellow_circle: |
| **Сеть по USB**      |  :green_circle:   | :green_circle:  |
| **Камера**           |  :red_circle:\*   | :green_circle:  |
| **Мобильные данные** |  :black_circle:   | :black_circle:  |
| **USB-OTG**          |  :green_circle:   | :green_circle:  |
| **NFC**              |  :black_circle:   | :black_circle:  |

### Планшеты-трансформеры

| **Модель**           | Chuwi Hi8 Pro  | Chuwi HiBook (CWI514) | HP Pro Tablet 608 G1 | Lenovo MIIX 320-10ICR | RCA Cambio w101v2 |
| -------------------- | :------------: | :-------------------: | :------------------: | :-------------------: | :---------------: |
| **Статус**           |                |                       |                      |                       |                   |
| **Процессор / SoC**  |                |                       |                      |                       |                   |
| **Экран**            | :green_circle: |    :green_circle:     |    :green_circle:    |    :green_circle:     |  :green_circle:   |
| **Графика**          | :green_circle: |    :green_circle:     |    :green_circle:    |    :green_circle:     |  :green_circle:   |
| **Накопитель**       | :green_circle: |    :green_circle:     |    :green_circle:    |    :green_circle:     |  :green_circle:   |
| **Батарея**          | :green_circle: |    :green_circle:     |    :green_circle:    |    :green_circle:     |  :green_circle:   |
| **Датчики**          | :green_circle: |    :green_circle:     |    :green_circle:    |    :green_circle:     |  :green_circle:   |
| **Звук**             | :green_circle: |    :green_circle:     |    :green_circle:    |    :green_circle:     |  :green_circle:   |
| **Bluetooth**        | :green_circle: |    :green_circle:     |    :green_circle:    |    :green_circle:     |  :green_circle:   |
| **Wi-Fi**            | :green_circle: |    :green_circle:     |    :green_circle:    |    :green_circle:     |  :green_circle:   |
| **Сеть по USB**      | :green_circle: |    :green_circle:     |    :green_circle:    |    :green_circle:     |  :green_circle:   |
| **Камера**           | :red_circle:\* |    :red_circle:\*     |    :red_circle:\*    |    :red_circle:\*     |  :red_circle:\*   |
| **Мобильные данные** | :black_circle: |    :black_circle:     |    :black_circle:    |    :black_circle:     |  :black_circle:   |
| **USB-OTG**          | :green_circle: |    :green_circle:     |    :green_circle:    |    :green_circle:     |  :green_circle:   |
| **NFC**              | :black_circle: |    :black_circle:     |    :black_circle:    |    :black_circle:     |  :black_circle:   |

### Игровые приставки — первый этап

| **Модель**           |    RG-353P     |    RG-353V     |    RG-353VS    |    RG-353M     |    RG-353PS    |       RG-503        |     RG-552     |  PowKiddy X55  |     RK2023     | RK2023 (Wi-Fi model) | PowKiddy RGB30 |    RG ARC-D    |    RG ARC-S    |   RGB10MAX3    |    RGB20SX     |        X35S         |     RGB20 Pro      |   GAMEMT E6 Plus    |
| -------------------- | :------------: | :------------: | :------------: | :------------: | :------------: | :-----------------: | :------------: | :------------: | :------------: | :------------------: | :------------: | :------------: | :------------: | :------------: | :------------: | :-----------------: | :----------------: | :-----------------: |
| **Статус**           | Готов к работе | Готов к работе | Готов к работе | Готов к работе | Готов к работе |  Требует доработки  | Готов к работе | Готов к работе | Готов к работе |    Готов к работе    | Готов к работе | Готов к работе | Готов к работе | Готов к работе | Готов к работе |  Требует доработки  | Требует доработки  |  Требует доработки  |
| **Процессор / SoC**  |     RK3566     |     RK3566     |     RK3566     |     RK3566     |     RK3566     |       RK3566        |     RK3399     |     RK3566     |     RK3566     |        RK3566        |     RK3566     |     RK3566     |     RK3566     |     RK3566     |     RK3566     |       RK3566        |       RK3566       |       RK3566        |
| **Экран**            | :green_circle: | :green_circle: | :green_circle: | :green_circle: | :green_circle: | :yellow_circle:\*\* | :green_circle: | :green_circle: | :green_circle: |    :green_circle:    | :green_circle: | :green_circle: | :green_circle: | :green_circle: | :green_circle: | :yellow_circle:\*\* | :yello_circle:\*\* | :yello_circle:\*\*  |
| **Графика**          | :green_circle: | :green_circle: | :green_circle: | :green_circle: | :green_circle: |   :green_circle:    | :green_circle: | :green_circle: | :green_circle: |    :green_circle:    | :green_circle: | :green_circle: | :green_circle: | :green_circle: | :green_circle: |   :green_circle:    |   :green_circle:   |   :green_circle:    |
| **Накопитель**       | :green_circle: | :green_circle: | :green_circle: | :green_circle: | :green_circle: |   :green_circle:    | :green_circle: | :green_circle: | :green_circle: |    :green_circle:    | :green_circle: | :green_circle: | :green_circle: | :green_circle: | :green_circle: |   :green_circle:    |   :green_circle:   |   :green_circle:    |
| **Батарея**          | :green_circle: | :green_circle: | :green_circle: | :green_circle: | :green_circle: |   :green_circle:    | :green_circle: | :green_circle: | :green_circle: |    :green_circle:    | :green_circle: | :green_circle: | :green_circle: | :green_circle: | :green_circle: |   :green_circle:    |   :green_circle:   | :yellow_circle:\*\* |
| **Датчики**          | :black_circle: | :black_circle: | :black_circle: | :black_circle: | :black_circle: |   :black_circle:    | :black_circle: | :black_circle: | :black_circle: |    :black_circle:    | :black_circle: | :black_circle: | :black_circle: | :black_circle: | :black_circle: |   :black_circle:    |   :black_circle:   |   :black_circle:    |
| **Звук**             | :black_circle: | :black_circle: | :black_circle: | :black_circle: | :black_circle: |   :black_circle:    | :black_circle: | :black_circle: | :black_circle: |    :black_circle:    | :black_circle: | :black_circle: | :black_circle: | :black_circle: | :black_circle: |   :black_circle:    |   :black_circle:   |   :black_circle:    |
| **Bluetooth**        | :green_circle: | :green_circle: | :green_circle: | :green_circle: | :green_circle: |   :green_circle:    | :black_circle: | :green_circle: | :black_circle: |    :green_circle:    | :green_circle: | :green_circle: | :green_circle: | :green_circle: | :green_circle: |   :red_circle:\*    |   :red_circle:\*   |   :red_circle:\*    |
| **Wi-Fi**            | :green_circle: | :green_circle: | :green_circle: | :green_circle: | :green_circle: |   :green_circle:    | :green_circle: | :green_circle: | :black_circle: |    :green_circle:    | :green_circle: | :green_circle: | :green_circle: | :green_circle: | :green_circle: |   :red_circle:\*    |   :red_circle:\*   |   :red_circle:\*    |
| **Сеть по USB**      | :green_circle: | :green_circle: | :green_circle: | :green_circle: | :green_circle: |   :green_circle:    | :green_circle: | :green_circle: | :green_circle: |    :green_circle:    | :green_circle: | :green_circle: | :green_circle: | :green_circle: | :green_circle: |   :red_circle:\*    |   :green_circle:   |   :red_circle:\*    |
| **Камера**           | :black_circle: | :black_circle: | :black_circle: | :black_circle: | :black_circle: |   :black_circle:    | :black_circle: | :black_circle: | :black_circle: |    :black_circle:    | :black_circle: | :black_circle: | :black_circle: | :black_circle: | :black_circle: |   :black_circle:    |   :black_circle:   |   :black_circle:    |
| **Мобильные данные** | :black_circle: | :black_circle: | :black_circle: | :black_circle: | :black_circle: |   :black_circle:    | :black_circle: | :black_circle: | :black_circle: |    :black_circle:    | :black_circle: | :black_circle: | :black_circle: | :black_circle: | :black_circle: |   :black_circle:    |   :black_circle:   |   :black_circle:    |
| **USB-OTG**          | :green_circle: | :green_circle: | :green_circle: | :green_circle: | :green_circle: |   :green_circle:    | :green_circle: | :green_circle: | :green_circle: |    :green_circle:    | :green_circle: | :green_circle: | :green_circle: | :green_circle: | :green_circle: |   :green_circle:    |   :green_circle:   |   :green_circle:    |
| **NFC**              | :black_circle: | :black_circle: | :black_circle: | :black_circle: | :black_circle: |   :black_circle:    | :black_circle: | :black_circle: | :black_circle: |    :black_circle:    | :black_circle: | :black_circle: | :black_circle: | :black_circle: | :black_circle: |   :black_circle:    |   :black_circle:   |   :black_circle:    |

### Игровые приставки — второй этап

| **Характеристика**   | Retroid Pocket 5 \*\* |    RG-34XX     |   RG Cube XX   |    RG-40XXV    |    RG-40XXH    |   RG-35XX SP   |    RG-28XX     |  RG-35XX 2024  |   RG-35XX H    |  RG-35XX Plus  | RGb10 Max 3 Pro |
| -------------------- | :-------------------: | :------------: | :------------: | :------------: | :------------: | :------------: | :------------: | :------------: | :------------: | :------------: | :-------------: |
| **Статус**           |      Эксперимент      |                |  Эксперимент   |                |                |  Эксперимент   |                |                |  Эксперимент   |                |   Эксперимент   |
| **Процессор / SoC**  |    Qualcomm SD825     | Allwinner H700 | Allwinner H700 | Allwinner H700 | Allwinner H700 | Allwinner H700 | Allwinner H700 | Allwinner H700 | Allwinner H700 | Allwinner H700 |  Amlogic A311D  |
| **Экран**            |    :green_circle:     |                |                |                |                |                |                |                |                |                |                 |
| **Графика**          |    :green_circle:     |                |                |                |                |                |                |                |                |                |                 |
| **Накопитель**       |    :green_circle:     |                |                |                |                |                |                |                |                |                |                 |
| **Батарея**          |    :green_circle:     |                |                |                |                |                |                |                |                |                |                 |
| **Датчики**          |    :black_circle:     |                |                |                |                |                |                |                |                |                |                 |
| **Звук**             |     :red_circle:      |                |                |                |                |                |                |                |                |                |                 |
| **Bluetooth**        |     :red_circle:      |                |                |                |                |                |                |                |                |                |                 |
| **Wi-Fi**            |     :red_circle:      |                |                |                |                |                |                |                |                |                |                 |
| **Сеть по USB**      |    :green_circle:     |                |                |                |                |                |                |                |                |                |                 |
| **Камера**           |    :black_circle:     |                |                |                |                |                |                |                |                |                |                 |
| **Мобильные данные** |    :black_circle:     |                |                |                |                |                |                |                |                |                |                 |
| **USB-OTG**          |    :green_circle:     |                |                |                |                |                |                |                |                |                |                 |
| **NFC**              |    :black_circle:     |                |                |                |                |                |                |                |                |                |                 |

## Образы

Образы для `aarch64` оборудования и `qemu` для поддерживаемых архитектур доступны на FTP для веток [sisyphus](https://beta.altlinux.org/mobile/sisyphus/latest/) и [p11](https://beta.altlinux.org/mobile/p11/latest/).

Инструмент сборки образов `mkimage-profiles` доступен в [git](https://altlinux.space/antohami/mkimage-profiles).

### Дисковые образы

Есть сборки образов для архитектур `x86_64`, `aarch64`, `riscv`. Их можно как запускать на оборудовании, поддерживаемом ядром `def`, так и с помощью QEMU.

Они вполне достаточны для работ над мобильным интерфейсом, адаптацией приложений. При подключении внешнего модема, поддерживаемого ModemManager (в идеале Quectel EG25-G) возможна и работа с мобильными сетями и сопутствующей телефонией).

### Сборка

Для самостоятельной сборки образов следует клонировать вышеуказанный `git` и перейти в ветку `next`.

Затем следует на целевой архитектуре собрать соответствующую цель сборки. Например, для сборки образа для PinePhone Pro нужно на aarch64 хосте выполнить:

```shell
make vm/pinephone-phosh.img ARCH=aarch64 DEBUG=1
```

:::info
Кросс-компиляция образов не поддерживается.
:::

Для изменения состава пакетов см. pkg.in/lists/mobile. Параметры и сценарий сборки настраиваются в conf.d/phone.mk. Детальная информация по работе с инструментом сборки содержится [в документации `mkimage-profiles`](https://www.altlinux.org/Mkimage-profiles).

## Установка

Подробнее про установку ALT Mobile на поддерживаемые устройства и виртуальные машины можно прочитать в статье ALT Mobile Wiki:

- [Установка ALT Mobile на телефон PinePhone Pro](/instalations/mobile-devices/)
- [Установка ALT Mobile на портативные приставки Anbernic](/instalations/portable-game-consoles/)
- [Установка ALT Mobile на планшеты-трансформеры](/instalations/tablets/)
- [ALT Mobile Виртуальная машина](/instalations/virtual-machine/)
- [Полнодисковое шифрование](/instalations/luks/)

## Использование

На данный момент использование предназначено только в целях разработки, повседневное применение как основного смартфона пока что не рекомендуется.

Логины по умолчанию: `root` (пароль: `altlinux`), `altlinux` (пароль: `271828`).

### Обновление

Обновлять следует методом, который гарантирует работоспособность среды обновления в процессе обновления. Например, если запустить обновление в GUI консоли Phosh и в процессе обновления будет перезагружен Phosh, обновление прервётся и система может оказаться неработоспособной.

Поддерживаемые способы:

**`screen`**

Стандартный `apt-get update && apt-get dist-upgrade -a` рекомендуется выполнять в менеджерах терминалов `screen` или `tmux`, гарантирующих продолжение работы при прерывании родительских процессов. Рекомендуется использовать `ssh` или последовательный порт для контроля над процессом.

В таком сценарии пользователь сам должен перезагрузить устройство по необходимости (например, при обновлении ядра).

**`packagekit`**

PackageKit работает путём скачивания обновлений, перезагрузки и установки всех пакетов в контролируемом окружении и последующей перезагрузки для полноценной работы. Интерфейсом для работы с `packagekit` является Gnome Software ("магазин" приложений из Сизифа).

## Статус ПО

Доступно всё программное обеспечение из репозитория Сизиф. Детальная информация [на отдельной странице](/software/).

## TODO

Перечень открытых задач достаточно большой, поэтому его можно найти [на отдельной странице](/todo/).

## Известные проблемы

**Полностью разряженная батарея**

При полностью разряженной батарее телефон может не загрузиться даже при подключении к сети. Эта проблема решена с свежих версиях `tow-boot`, необходимо обновиться. Если нет батарея уже полностью разряжена и нет возможности обновить `tow-boot`, нужно зарядить её на внешнем устройстве, можно подать питание `5V` ненадолго.

**Система перестала загружаться в ходе обновления**

Обновляться следует рекомендуемыми способами. Если система уже сломана, следует записать новый образ, перед этим необходимо сохранить все важные пользовательские данные (в первую очередь `~/.local` и `~./config`)
