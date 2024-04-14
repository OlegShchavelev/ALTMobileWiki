---
aggregation:
    flatpak: io.bassi.Amberol
    sisyphus: amberol
appstream:
    id: io.bassi.Amberol
    name: Amberol
    icon: https://dl.flathub.org/repo/appstream/x86_64/icons/128x128/io.bassi.Amberol.png
    summary: Воспроизводит музыку и ничего больше
    keywords: 
        - adaptive
        - circle
        - altmobile
    developer: 
        name: GNOME
    metadata_license: 
        name: GNU GPLv3
        link: https://choosealicense.com/licenses/gpl-3.0/
    url: 
        homepage: https://gitlab.gnome.org/World/amberol/
        bugtracker: https://github.com/flathub/com.anydesk.Anydesk/issues
---

# Amberol

Amberol стремится быть максимально компактным, ненавязчивым и простым. Он не управляет вашей музыкальной коллекцией, не позволяет вам управлять плейлистами, не позволяет вам редактировать метаданные для ваших песен, не показывает вам тексты ваших песен.

Amberol воспроизводит музыку и ничего больше.

## Установка из репозитория

Существует несколько способов установки Amberol на ALT Mobile:

<!--@include: @apps/parts/install/software-repo.md-->

**Установка через терминал**

Ввод терминальных команд осуществляется через вириртуальный терминал Консоль или через удаленное подключение по протоколу SSH:

```shell
su -
apt-get install amberoll
```

## Установка c помощью Flatpak

При наличии пакета Flatpak, можно установить Amberol одной командой. Ввод терминальных команд осуществляется через вириртуальный терминал Консоль или через удаленное подключение по протоколу SSH:

```shell
flatpak install io.bassi.Amberol
```

<!--@include: @apps/parts/install/software-flatpak.md-->