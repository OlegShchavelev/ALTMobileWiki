---
aggregation:
  flatpak: org.telegram.desktop
  sisyphus: telegram-desktop
appstream:
  id: org.telegram.desktop
  name: Telegram Desktop
  icon: https://dl.flathub.org/repo/appstream/x86_64/icons/128x128/org.telegram.desktop.png
  summary: Кроссплатформенная система мгновенного обмена сообщениями
  keywords:
    - adaptive
    - oobe
  developer:
    name: Telegram FZ-LLC
  metadata_license:
    name: GNU GPLv3
    link: https://choosealicense.com/licenses/gpl-3.0/
  url:
    homepage: https://desktop.telegram.org/
    bugtracker: https://github.com/telegramdesktop/tdesktop/issues
---

# Telegram Desktop

A native client for instant messaging, adapted to work with mobile devices. The ability to log in using a QR code or SMS to a phone number.

<!--@include: @apps/.parts/install/content-repo.md-->

::: info
Currently, the repository contains the client version `5.2.3` from the `sisyphus` branch. The adaptive interface has been improved in version `5.8.0`, details can be found in the report [BZ #51252](https://bugzilla.altlinux.org/51252).
:::

<!--@include: @apps/.parts/install/content-flatpak.md-->

## Scaling

To fully display the client in vertical orientation, you need to change the scale of the application. Go to the menu (☰) and change the default zoom to 180%.

## Disabling notification of an active window (Draw attention to the window)

The messenger informs the user about an active chat by sending a notification. You can disable the option by going to Settings -> "Notifications and Sounds" and disable the window backlight option ("Draw attention to the window")

## Using the system frame in Telegram

To enable the system window frame, go to Settings -> Advanced Settings and uncheck the "QT window frame" box

## Reset settings

For the version from the repository:

```shell
rm -rfv ~/.local/share/TelegramDesktop
```

For the Flatpak version:

```shell
rm -rfv ~/.var/app/org.telegram.desktop/config
```
