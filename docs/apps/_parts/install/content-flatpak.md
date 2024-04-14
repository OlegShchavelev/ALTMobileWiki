## Установка c помощью Flatpak

При наличии пакета Flatpak, можно установить **«{{ $frontmatter?.appstream?.name }}»** одной командой. Ввод терминальных команд осуществляется через вириртуальный терминал **«Консоль»** или через удаленное подключение по протоколу SSH:

```shell-vue
flatpak install flathub {{ $frontmatter?.aggregation?.flatpak }}
```

<!--@include: @apps/_parts/install/software-flatpak.md-->