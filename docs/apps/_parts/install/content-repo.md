## Установка из репозитория

Существует несколько способов установки **«{{ $frontmatter?.appstream?.name }}»** на ALT Mobile:

<!--@include: @apps/_parts/install/software-repo.md-->

**Установка через терминал**

Ввод терминальных команд осуществляется через виртуальный терминал **«Консоль»** или через удалённое подключение по протоколу SSH:

```shell-vue
su -
apt-get install {{ $frontmatter?.aggregation?.sisyphus }}
```
