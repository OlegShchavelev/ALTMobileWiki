# Полнодисковое шифрование

Данная инструкция не представляет из себя точный алгоритм действий, но показывает, какие шаги нужно выполнить, чтобы получить полнодисковое шифрование на ALT Mobile. Чётко понимайте, что делаете т.к. многие из требуемых шагов безвозвратно уничтожают информацию на носителях и не пытайтесь вбить команды как есть — ничего хорошего из этого не получится.

## Установка с помощью `alt-rootfs-installer`

Установить систему на зашифрованный раздел можно с помощью интерактивной утилиты `alt-rootfs-installer`. Для этого у неё есть опции `--luks` и `--luks-opt="OPTSTR"` для передачи опций к `cryptsetup luksFormat`

Пример команды:

```sh
alt-rootfs-installer --luks --rootfs=/path/to/rootfs.tar.xz
--target=pinephone-pro-rk3399 --media=/dev/mmcblk2
```

## Ручная установка

Я устанавливал по этой инструкции как на внутреннюю память PPP, так и на SD-карт. Если на устройстве есть зашифрованная внутренняя память и SD-карта, то `initrd` будет требовать расшифровать два раздела, пока не добьется успеха, иначе никуда не пустит.

Сначала нужно создать разделы под `/boot` (напр. 512Мб) и шифрованный корень.

```sh
fdisk /dev/sda
```

Создаем и открываем LUKS-раздел.

```sh
cryptsetup luksFormat --type luks2 --label YOURLABEL_LUKSROOT /dev/sda2
cryptsetup open /dev/sda2 luks_root
```

Форматируем LUKS-раздел и добавляем ярлык файловой системы.

```sh
mkfs.ext4 /dev/mapper/luks_root
e2label /dev/mapper/luks_root YOURLABEL_ROOT
```

Форматируем `/boot` раздел и также добавляем ярлык.

```sh
mkfs.ext2 /dev/sda1
e2label /dev/sda1 YOURLABEL_BOOT
```

Монтируем файловую систему с корнем.

```sh
mkdir /mnt/luks_root
mount LABEL=YOURLABEL_ROOT /mnt/luks_root/
```

Создаем директорию `/boot` и монтируем boot внутри корня.

```sh
umask 077; mkdir -p /mnt/luks_root/boot/
mount LABEL=YOURLABEL_BOOT /mnt/luks_root/boot/
```

Распаковываем тарболл в смонтированный корень.

```sh
tar xf alt-mobile-phosh-pine-20241010-aarch64.tar.xz -C /mnt/luks_root/
```

Исправляем `extlinux.conf` указав правильный `LABEL=YOURLABEL_ROOT`.

```sh
vim /mnt/luks_root/boot/extlinux/extlinux.conf
```

Исправляем ярлык корня в `/etc/fstab` на `LABEL=YOURLABEL_ROOT` и добавляем правила монтирования для `/boot`:

```sh
"LABEL=YOURLABEL_BOOT /boot ext2 defaults 0 2"
vim /mnt/luks_root/etc/fstab
```

Размонтируем рекурсивно корень.

```sh
umount -R /mnt/luks_root
```

Закрываем LUKS-раздел.

```sh
cryptsetup close luks_root
```

Пробуем запуститься...
