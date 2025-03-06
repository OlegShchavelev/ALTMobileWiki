# Страница приложения

Страница, относящаяся к разделу «Программное обеспечение», состоит из нескольких блоков.

## Метаданные

Описываются в сегменте Frontmatter с помощью языка YAML.

```yml
---
aggregation:
  sisyphus: # SRPMS ID
  flatpak:
    id: # Flatpak ID
    build: # сборка — official/unofficial
  snap:
    id: # Snap ID
    build: # сборка — official/unofficial
  epm:
    play:
      id: # EPM Play ID
      build: # сборка — official/unofficial
appstream:
  id: # Appstream ID приложения
  name: # Название приложения
  icon: # Путь к логотипу приложения
  summary: # Краткое описание
  keywords: # Список бейджей (подробнее ниже)
  metadata_license:
    name: # Лицензия
    link: # Ссылка на лицензию
  developer:
    name: # Имя разработчика
    nickname: # Псевдоним разработчика
    avatar: # Ссылка или путь на аватар разработчика
  url:
    homepage: # Ссылка на страницу проекта
    bugtracker: # Ссылка на багтрекер (например, github issue)
    translate: # Ссылка на помощь с переводом
    help: # Ссылка на гайд по использованию
    donation: # Ссылка на донаты
---
```

## Список бейджей

В боковом баре используется следующий список бейджей:

```yaml
---
keywords:
  - core # GNOME Core
  - circle # GNOME Circle
  - dev # GNOME Development
  - oobe # Предустановлено
  - adaptive # Адаптивное
  - proprietary # Проприетарное
  - restrictions # Региональные ограничения
  - dontthemes # Please don’t theme (stopthemingmy.app)
---
```

## Установка

Текстовые блоки, описывающий порядок установки приложения. Необходимо лишь заполнить Frontmatter-переменные и подключить шаблоны.

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
