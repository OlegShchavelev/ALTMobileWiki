# Установка ALT Mobile на портативные приставки Anbernic

Данная инструкция описывает процесс подготовки игровых приставок
Anbernic для запуска на них ОС ALT, в частности, ALT Mobile

Возможность запуска была протестирована на следующих моделях приставок:

`- Anbernic RG 552`\
`- Anbernic RG 353M`

## Подготовка карты памяти {#подготовка_карты_памяти}

Устанавливаем утилиту alt-rootfs-installer

`su -`

`apt-get install alt-rootfs-installer`

Для RG552 Скачиваем образ с ядром rocknix:

`wget `[`https://beta.altlinux.org/mobile/latest/20240623/alt-mobile-phosh-rocknix-ad-20240623-aarch64.img.xz`](https://beta.altlinux.org/mobile/latest/20240623/alt-mobile-phosh-rocknix-ad-20240623-aarch64.img.xz)

Для RG353M - образ с pine:

`wget `[`https://beta.altlinux.org/mobile/latest/20240623/alt-mobile-phosh-pine-ad-20240623-aarch64.img.xz`](https://beta.altlinux.org/mobile/latest/20240623/alt-mobile-phosh-pine-ad-20240623-aarch64.img.xz)

Вставляем адаптер с картой памяти в порт USB и в режиме
суперпользователя выполняем команду

Для Anbernic RG 552:

`alt-rootfs-installer --image-in=/путь/до/образа.img.xz --media=/dev/sdX --target=anbernic-rg552-rk3399`

Для Anbernic RG 353M:

`alt-rootfs-installer --image-in=/путь/до/образа.img.xz --media=/dev/sdX --target=anbernic-rgxx3-rk3566`

где /dev/sdX - путь до нашей карты памяти.

## Подготовка приставки {#подготовка_приставки}

К превеликому сожалению, на текущий момент (31 мая 2024 года), для
успешной загрузки и запуска ОС семейства ALT на данных устройствах
придётся затереть стоковый Android вместе с загрузчиком, ибо ни с чем,
кроме стоковой прошивки от самой Anbernic, а также костылями с разбивкой
карты памяти и патчами для загрузчика, загрузчик нормально не дружит.

Если мы решаем сделать копию содержимого встроенной памяти приставки, то нам ещё понадобится карта
памяти объёмом от 128 гигабайт, чтобы в будущем восстановить стоковый Android. Если же сохранения
Android не планируется, то пункты с 4 по 7 можно проигнорировать.

0\. Переводим устройство в режим Recovery, зажав при запуске клавишу
увеличения громкости. Мы попадаем в меню восстановления системы.

Подключаем устройство к ПК через разъём, который подписан как OTG.

1\. Устанавливаем android-tools:

`su -`

`apt-get install andriod-tools`

2\. Вводим одну за другой команды, дожидаясь завершения выполнения
каждой из них.

`adb devices` - Ищем наше устройство. Должна появиться
строка к кодовым номером и названием \"Recovery\"

`adb root` - получаем привелегии суперпользователя на системе устройства

`adb shell` - заходим в устройство.

3\. Ищем блочное устройство памяти, которое будем затирать.

`ls /dev/block/ | grep mmcblk`

Встроенная память определится как `/dev/block/mmcblkX`, с кучей
разделов.

4\. Вставляем карту памяти во второй слот, она определится как
`/dev/block/mmcblkY`, с одним разделом.

5\. Монтируем раздел нашей карты памяти:

`mount /dev/block/mmcblkYp1 /mnt`

6, Создаём образ с содержимым eMMC:

`dd if=/dev/block/mmcblkX of=/mnt/android_rg552.img`

Создание образа будет долгой (объём встроенной памяти - 64 гигабайта).

7\. После завершения процесса отмонтируем карту памяти.

`umount /mnt`

и вынимаем карту из приставки

8\. Начинаем затирание встроенного ПЗУ

`dd if=/dev/zero of=/dev/block/mmcblkX bs=4M`

И ждём, пока утилита нам не скажет, что место закончилось.

Вот и всё. По идее, теперь ALT должен загрузиться с карты памяти без
проблем.

## Восстановление Android {#восстановление_android}

Для восстановления Android нужно:

1\. Вставить карту с образом Android во второй слот приставки;

2\. Запустить терминал и перейти в режим рута;

`su -`

3\. Посмотреть список блочных устройств:

`lsblk`

Накопитель объёмом 58,2G с названием, схожим с mmcblkXboot1, и есть наша
встроенная память, а устройство вида /dev/mmcblkApB с одним разделом без
точки монтирования - карта памяти с образом.

4\. Примонтировать раздел карты памяти с образом:

`mount /dev/mmcblkApB /mnt`

5\. Записать образ стокового Android обратно во встроенную память с
помощью dd:

`dd if=/mnt/android_rg552.img of=/dev/mmcblkX oflag=direct,sync iflag=fullblock bs=1M status=progress`

6\. По завершении записи выключить приставку, вынуть обе карты памяти, и
включить устройство. Android должен начать загрузку.