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

Нативный клиент для мгновенного обмена сообщениями, адаптирован для работы с мобильными устройствами. Возможность авторизации с помощью QR-кода или SMS на номер телефона.

<!--@include: @apps/.parts/install/content-repo.md-->

::: info
В настоящее время в репозитории находится версия клиента `5.2.3` из ветки `sisyphus`. Адаптивный интерфейс был улучшен в версии `5.8.0`, подробности можно найти в репорте [BZ #51252](https://bugzilla.altlinux.org/51252).
:::

<!--@include: @apps/.parts/install/content-flatpak.md-->

## Масштабирование

Для полного отображения клиента в вертикальной ориентации необходимо изменить масштаб приложения. Перейдите в меню (☰) и измените масштаб по умолчанию на значение 180%.

## Отключение уведомления об активном окне (Draw attention to the window)

Мессенджер информирует пользователя об активном чате путём отправки уведомления. Вы можете отключить опцию, перейдя в Настройки -> «Уведомления и звуки» и отключите опцию подсветка окна («Draw attention to the window»)

## Использование системной рамки в Telegram

Для включения системной рамки окна перейдите в Настройки -> «Продвинутые настройки» и снимите флажок «Рамка окна QT»

## Сброс настроек

Для версии из репозитория:

```shell
rm -rfv ~/.local/share/TelegramDesktop
```

Для Flatpak-версии:

```shell
rm -rfv ~/.var/app/org.telegram.desktop/config
```
