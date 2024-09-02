# Страница приложения

Страница подченненая разделу «Програмное обеспечение», состоит из нескольких блоков

## Методанные

```md
---
aggregation:
  sisyphus: # srpms id
  flatpak:
    id:    # flatpak id
    build: # сборка official/unofficial
  snap:
    id:    # snap id
    build: # сборка official/unofficial
  epm:
    play:
      id:    # epm play id
      build: # сборка official/unofficial
appstream:
  id:   # appstream id приложения
  name: # Название приложения
  icon: # путь к логотипу приложения
  summary: # краткое описание
  keywords: # список бейджей (подробнее ниже)
  metadata_license:
    name: # лицензия
    link: # ссылка на лицензию
  developer:
    name:     # имя разработчика
    nickname: # nickname разработчика
    avatar:   # ссылка или путь на аватар разработчика
  url:
    homepage:   # ссылка на страницу проекта
    bugtracker: # ссылка на багтрекер (например, github issue)
    translate:  # ссылка на помощь с переводом
    help:       # ссылка на гайд по использованию
    donation:   # ссылка на донаты

---
```

## Список бейджей

В боковом баре используется следующий список бейджей:

```md
---
keywords:
  - core         # GNOME Core
  - circle       # GNOME Circle
  - dev          # GNOME Development
  - oobe         # Предустановлено
  - adaptive     # Адаптивное
  - proprietary  # Проприетарное
  - restrictions # Региональные ограничения
  - dontthemes   # Please don’t theme
---
```

## Установка

Текстовые блоки описвающий порядок установки приложения, необходимо лишь заполнить Frontmatter переменные и подключить шаблоны.

::: tabs
== Репозиторий

```markdown-vue
<!--{{`@include: @apps/.parts/install/content-repo.md`}}-->
```

== Flatpak

```markdown-vue
<!--{{`@include: @apps/.parts/install/content-flatpak.md`}}-->
```

:::
