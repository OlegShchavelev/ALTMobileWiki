## Установка c помощью Flatpak

При наличии пакета Flatpak, можно установить **«{{ $frontmatter?.appstream?.name }}»** одной командой. Ввод терминальных команд осуществляется через виртуальный терминал **«Консоль»** или через удалённое подключение по протоколу SSH:

```shell-vue
flatpak install flathub {{ $frontmatter?.aggregation?.flatpak }}
```

<!--@include: @apps/_parts/install/software-flatpak.md-->
