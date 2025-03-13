# Установка ALT Mobile на Chuwi HiBook (CWI514)

Данная инструкция описывает процесс установки ОС Ал ьт, в частности, ALT Mobile, на планшет Chuwi HiBook (CWI514).

:::danger Внимание!
Все действия, описанные в данной статье, вы выполняете на свой страх и риск. Автор статьи и сообщество ALT Linux Team, а также ООО «Базальт СПО» не несут ответственность за «окирпиченные» и сгоревшие устройства, затёртые данные пользователя, а также сгоревшие инструменты и прочие последствия.
:::

### Технические характеристики

|     Компонент      |                              Название                               |      Статус      |
| :----------------: | :-----------------------------------------------------------------: | :--------------: |
|     Процессор      |                Intel® Atom™ Z8300, 4 ядра на 1,840 ГГц              |  :green_circle:  |
|      Дисплей       |      10`1 дюйма, 1200x1920 пикселей, встроенная графика Intel HD    |  :green_circle:  |
| Оперативная память |                              DDR3L 4GB                              |  :green_circle:  |
| Постоянная память  |                  64GB eMMC, слот microSD (до 64 GB)                 |  :green_circle:  |
|  Сенсорная панель  |                      GSL3680, 10 точек касания                      |  :green_circle:  |
|        Звук        |            Intel Atom x5-E8000/J3xxx/N3xxx Series Imaging Unit      |  :green_circle:  |
|      Питание       |                Аккумулятор, 6 600 мАч, контроллер AXP288            |  :green_circle:  |
|        WiFi        | Адаптер беспроводной сети Broadcom BCM43430 802.11b/g/n 2.4GHz SDIO |  :green_circle:  |
|     Bluetooth      |                        Realtek RGN RTL8723BS                        |  :green_circle:  |
|       Камеры       |   2MP (фронтальная) и 2MP (основная), обе на базе датчика OV2680    | :red_circle:(\*) |
|  Датчик освещения  |                          Solteam JSA-1212                           |  :green_circle:  |
|      Гироскоп      |                            Bosch BMG160                             |  :green_circle:  |
|    Акселерометр    |                        AK09911C 8KXCJK-1013                         |  :green_circle:  |
|    Вывод звука     |               Моно динамик, порт для наушников 3,5мм                |  :green_circle:  |
|    Вывод видео     |                              Micro HDMI                             |  :green_circle:  |
|        USB         | Порт Micro USB 2.0 (OTG / зарядка), порт USB TypeC (только зарядка) |  :green_circle:  |

:::details Условные обозначения

:green_circle: `Работает` — работает в полном объёме

:yellow_circle: `Частично` — работает частично

:red_circle: `Не работает` — не работает

:white_circle: `Отсутствует` — не предусмотрено спецификацией

:::

### Примечания

\* Отсутствует полноценный модуль ядра и драйвер.

## Подготовка

Для установки ОС alt Mobile на планшет Chuwi HiBook (CWI514) понадобятся:

1. Флешка с записанным образом ALT Regular для `x86_64`;

2. USB-разветвитель для клавиатуры, либо клавиатура со встроенным тачпадом;

3. Переходник с USB на Micro USB

### Подготовка накопителя

1. Скачайте образы ОС ALT Regular (для примера — IceWM):

```shell
wget https://nightly.altlinux.org/sisyphus/tested/regular-icewm-latest-x86_64.iso
```

2. Вставьте флешку в ПК и запишите образ `regular-icewm-latest-x86_64.iso` через ALT Media Writer;

3. Скачайте образ ALT Mobile:

```shell
wget https://beta.altlinux.org/mobile/sisyphus/latest/alt-mobile-phosh-def-latest-x86_64.img.xz
```
4. Войдите в супер-пользователя (`root`) и скопируйте образ в корень флешки

```shell
[user@comp~]$ su -

cp alt-mobile-phosh-def-latest-x86_64.img.xz /run/media/<username>/<ваша_флешка>

```


5. Отмонтируйте флешку.

### Установка

1. Подключите USB-разветвитель в USB-разъём через переходник Micro USB, к нему — клавиатуру, мышь и флешку;

2. Включите планшет (зажмите кнопку включения на 2-3 секунды) и нажмите на клавиатуре клавишу [[Esc]] до входа в BIOS.

3. Во вкладке «Exit», в самом низу, выберите нужный пункт загрузки;

4. Перейдите во вкладку «Save & Exit» (клавиша вправо), выберите пункт «Save Changes and Exit», подтвердите выход, выбрав пункт «Yes» и нажав на [[Enter]], перезагрузите планшет;

5. Загрузитесь в ОС и откройте терминал нажатием комбинации клавиш [[Ctrl + Alt + T]];

7. Войдите в супер-пользователя (`root`), узнайте название устройства eMMC и запишите образ:

```shell
[user@comp~]$ su -

lsblk

xzcat alt-mobile-phosh-def-latest-x86_64.img.xz | dd of=/dev/<имя_eMMC> oflag=direct,sync iflag=fullblock bs=1M status=progress
```

9. По окончании процесса записи выполните команду `poweroff`. Планшет выключится. После выключения отключите внешний накопитель.

## Доведение до ума

1. Включите планшет и загрузитесь в ОС. Первый запуск может занять некоторое время — раздел с системой расширится на весь объём eMMC;

2. Подключите планшет к сети и запустите Центр приложений, перейдите на вкладку «Обновления» и нажмите кнопку «Обновить»;

3. Установите все обновления и подтвердите перезагрузку. После перезагрузки планшет снова загрузится в ОС;

4. После установки обновлений нужно поставить пакет с прошивкой для звука. Откройте терминал и от имени супер-пользователя (`root`) установите следующий пакет:

```shell
[user@comp~]$ su -

[root@comp~]# apt-get install firmware-alsa-sof 
```

5. Скачайте файл прошивки сенсорной панели:

```shell
wget https://github.com/onitake/gsl-firmware/raw/refs/heads/master/firmware/chuwi/hibook/firmware.fw
```

6. Создайте каталог для прошивки и скопируйте её с нужным именем:

```shell
[root@comp~]# mkdir /lib/firmware/silead && cp firmware.fw /lib/firmware/silead/mssl0017.fw
```
7. Так как данный планшет идёт с UEFI, необходимо установить соответствующий загрузчик:

```shell
[root@comp~]# grub-install
[root@comp~]# grub-efi-autoupdate
```

8. Открываем файл /etc/default/grub и приводим строку с параметрами загрузки к следующему виду (данное решение работает, начиная с версии ядра 6.10):

```shell
[root@comp~]# mcedit /etc/default/grub

GRUB_CMDLINE_LINUX_DEFAULT='panic=30 splash psi=1 console=tty0 console=ttyS0,115200n8  i2c_touchscreen_props=MSSL0017:touchscreen-min-x=3:touchscreen-min-y=7:touchscreen-size-x=1860:touchscreen-size-y=1280:touchscreen-swapped-x-y:touchscreen-inverted-y:silead,home-button'
# Обновляем конфиг настроек загрузчика
[root@comp~]# update-grub
```

9. Перезагрузите планшет командой `reboot` и (скорее всего) радуемся работающему планшету.
