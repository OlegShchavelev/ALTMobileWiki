# Anbernic RG 552

:::danger Внимание!
Все действия, описанные в данной статье, вы выполняете на свой страх и риск. Автор статьи и сообщество ALT Linux Team, а также ООО "Базальт СПО" не несут ответственность за "окирпиченные" и сгоревшие приставки, затёртые данные пользователя, а также сгоревшие инструменты и прочие последствия.
:::

### Технические характеристики

|     Компонент      |                                Название                                 |        Статус        |
| :----------------: | :---------------------------------------------------------------------: | :------------------: |
|     Процессор      |    Rockchip RK3399, Cortex-A72 x2 / Cortex-A53 x4, от 1,4 до 1,8 Ггц    |    :green_circle:    |
|      Дисплей       |    5,3 дюйма, 1920 x 1152 пикселей, Mali-T860 MP4 4 ядра по 600 Мгц     |    :green_circle:    |
| Оперативная память |                               4 GB LPDDR4                               |    :green_circle:    |
| Постоянная память  |                 eMMC 64 Gb, 2 слота microSD (до 512 GB)                 | :green_circle: (\*)  |
|  Сенсорная панель  |                        Goodix, 10 точек касания                         |    :green_circle:    |
|      Питание       |    Сборка на 6400 mAh - 2 аккумулятора по 3200 mAh, порт USB Type-C     |    :green_circle:    |
|        WiFi        | Адаптер беспроводной сети Realtek RTL8188FTV 802.11b/g/n 1T1R 2.4G SDIO |    :green_circle:    |
|        Звук        |        2 динамика, порт для наушников 3,5мм, встроенный микрофон        |    :green_circle:    |
|    Вывод видео     |                                Mini HDMI                                | :yellow_circle: (\*) |
|        USB         |                          Порт USB Type-C (OTG)                          |    :green_circle:    |

:::details Условные обозначения

:green_circle: `Работает` - работает в полном объёме

:yellow_circle: `Частично` - работает частично

:red_circle: `Не работает` - не работает

:white_circle: `Отсутствует` - не предусмотрено спецификацией

:::

### Примечания:

\* Проблемы при инициализации звука в HDMI

\*\* Может не выдержать активного процесса чтения-записи

## Подготовка карты памяти

Устанавливаем утилиту `alt-rootfs-installer`

```shell
su -
apt-get install alt-rootfs-installer
```

Скачиваем образ с ядром rocknix:

```shell
wget https://beta.altlinux.org/mobile/sisyphus/latest/alt-mobile-phosh-rocknix-latest-aarch64.img.xz
```

Вставляем адаптер с картой памяти в порт USB

```shell
su -
alt-rootfs-installer --image-in=/путь/до/образа.img.xz --media=/dev/sdX --target=anbernic-rg552-rk3399
```

## Подготовка приставки

К превеликому сожалению, на текущий момент, для успешной загрузки и запуска ОС семейства ALT Linux на данном устройстве придётся затереть стоковый Android вместе с загрузчиком, ибо ни с чем, кроме стоковой прошивки от самой Anbernic, а также костылями с разбивкой карты памяти и патчами для загрузчика, загрузчик нормально не дружит.

Если мы решаем сделать копию содержимого встроенной памяти приставки, то нам ещё понадобится карта памяти объёмом от 128 гигабайт, чтобы в будущем восстановить стоковый Android. Если же сохранения Android не планируется, то пункты с 4 по 7 можно проигнорировать.

Переводим устройство в режим Recovery, зажав при запуске клавишу увеличения громкости. Мы попадаем в меню восстановления системы.

0. Подключаем устройство к ПК через разъём, который подписан как OTG. Все дальнейшие действие производим из под `root`:

```shell
su -
```

1. Устанавливаем `android-tools`:

```shell
apt-get install android-tools
```

2. Вводим одну за другой команды, дожидаясь завершения выполнения каждой из них.

Ищем наше устройство. Должна появиться строка к кодовым номером и названием \"Recovery\":

```shell
adb devices
```

Получаем привилегии суперпользователя на системе устройства:

```shell
adb root
```

Заходим в устройство:

```shell
adb shell
```

3. Ищем блочное устройство памяти, которое будем затирать.

```shell
ls /dev/block/ | grep mmcblk
```

Встроенная память определится как `/dev/block/mmcblkX`, с большим количеством разделов.

4. Вставляем карту памяти во второй слот, она определится как `/dev/block/mmcblkY`, с одним разделом.

5. Монтируем раздел нашей карты памяти:

```shell
mount /dev/block/mmcblkYp1 /mnt
```

6. Создаём образ с содержимым eMMC:

```shell
dd if=/dev/block/mmcblkX of=/mnt/android_rg552.img
```

:::info
Создание образа будет долгой (объём встроенной памяти - 64 гигабайта).
:::

7. После завершения процесса отмонтируем карту памяти.

```shell
umount /mnt
```

и вынимаем карту из приставки

8. Начинаем затирание встроенного ПЗУ

```shell
dd if=/dev/zero of=/dev/block/mmcblkX bs=4M
```

И ждём, пока утилита нам не скажет, что место закончилось.

Вот и всё. По идее, теперь ALT Mobile должен загрузиться с карты памяти без проблем.

## Восстановление Android

Для восстановления Android нужно:

0. Вставить карту с образом Android во второй слот приставки. Запустить терминал и перейти в режим рута:

```shell
su -
```

1. Посмотреть список блочных устройств:

```shell
lsblk
```

Накопитель объёмом 58,2G с названием, схожим с `mmcblkXboot1`, и есть наша встроенная память, а устройство вида `/dev/mmcblkApB` с одним разделом без точки монтирования - карта памяти с образом.

2. Примонтировать раздел карты памяти с образом:

```shell
mount /dev/mmcblkApB /mnt
```

3. Записать образ стокового Android обратно во встроенную память с помощью dd:

```shell
dd if=/mnt/android_rg552.img of=/dev/mmcblkX oflag=direct,sync iflag=fullblock bs=1M status=progress
```

По завершении записи выключить приставку, вынуть обе карты памяти, и включить устройство. Android должен начать загрузку.

## Аппаратные проблемы

### Охлаждение чипов ОЗУ

Вследствие то ли ошибки в расчётах, то ли недосмотра, медная площадка радиатора у RG 552 не прилегает к чипам оперативной памяти, в результате чего память начинает быстро и качественно "отваливаться" (замечено автором статьи уже на 3-х приставках), один из симптомов - нежелание утилиты dd записывать данные с флагом "sync" - процесс закончится ошибкой ввода-вывода. Причина — крышка "процессора" (SoC), которая возвышается на над чипами памяти 1 миллиметр.

Если начали появляться подобные заскоки, то стоит провести "улучшение" системы охлаждения.

:::info Инструменты

Для проведения профилактики нам понадобятся:

- Отвёртки с наконечниками +1,5 и Т6;
- Спиртовые салфетки или изопропиловый спирт и плотные салфетки, не оставляющие ворсинок (чтобы очистить поверхность чипов);
- Пластиковая карта, медиатор или набор для наклейки экрана смартфона;
- Термопрокладка толщиной 1,5 мм (под давлением она сожмётся и оформит плотный контакт между чипами и радиатором);
- Термопаста для процессора;

:::

#### Процесс разбора

0. Вынимаем карты памяти из слотов;
1. Выкручиваем 4 винта отвёрткой Т6;
2. Картой или медиатором проходим по периметру корпуса, отщёлкивая крышку приставки;
3. Приподняв крышку, аккуратно отсоединяем аккумулятор;
4. Аккуратно отсоединяем все шлейфы и провода;
5. Откручиваем 11 чёрных шурупов по периметру материнской платы приставки с помощью отвёртки +1,5;
6. Вынимаем плату из корпуса и переворачиваем её;
7. Откручиваем 4 винта, держащие радиатор, и снимаем систему охлаждения;
8. Вот и наши чипы. Убираем старую термопрокладку, протираем чипы от грязи;
9. Отрезаем от термопрокладки кусочки нужного размера и накладываем их на чипы памяти. На процессор наносим термопасту;
10. Прикручиваем систему охлаждения обратно к плате;
11. Собираем приставку в обратном порядке;
