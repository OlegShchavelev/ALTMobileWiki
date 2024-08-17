<div class="header" align="center">

[<img src="https://altmobile.org/hero.png" height="256">](https://github.com/OlegShchavelev/ALTMobileWiki)

# ALT Mobile Wiki

Библиотека знаний ALT Mobile — операционная система для мобильных устройств семейства «Альт»

![GitHub License](https://img.shields.io/github/license/OlegShchavelev/ALTMobileWiki)
![GitHub commit activity](https://img.shields.io/github/commit-activity/y/OlegShchavelev/ALTMobileWiki)
![GitHub Issues or Pull Requests](https://img.shields.io/github/issues/OlegShchavelev/ALTMobileWiki)
![GitHub deployments](https://img.shields.io/github/deployments/OlegShchavelev/ALTMobileWiki/github-pages?label=Last%20Deploy)

[![Telegram](https://img.shields.io/badge/Group-%235AA9E6?logo=telegram&label=Telegram)](https://t.me/altmobile_channel)

</div>

## Разработка

### :inbox_tray: Создание форка репозитория

Для контроля качества и безопасности контента проекта ALT Mobile Wiki все изменения вносятся в личную копию репозитория (Fork). Процесс создания форка описан в разделе [Внесение изменений](#).

### :gear: Локальный запуск проекта

Перед запуском проекта локально убедитесь, что в вашей операционной системе установлены необходимые для запуска приложения: Git, Node.js, npm. Ниже приведен пример установки приложений для операционной системы «Альт»:

```shell
su -
apt-get install node npm git
```

**Клонируем** созданную ранее личную копию репозитория:

```shell
# Клонирование с использованием доступа к репозиторию по HTTPS
git clone https://github.com/{user}/ALTMobileWiki.git

# Клонирование с использование доступа к репозиторию по SSH
git clone git@github.com:{user}/ALTMobileWiki.git
```

Теперь на вашем компьютере в папке `ALTMobileWiki`, находится полная копия репозитория.

> [!NOTE]
> Замените `{user}` на ваше имя пользователя на GitHub. Проще всего его найти в cервисе GitHub в самом верху страницы репозитория.

**Перейдите** в папку проекта и для начала работы запустите в режиме разработки (редактирования) склонированный проект ALT Mobile Wiki:

```shell
cd ALTMobileWiki
npm i
npm run docs:dev
```

### :pencil: Внесение изменений

Для вашего удобства, все инструкции по созданию и редактированию статей собраны в разделе [«Для авторов»](#).

Участники проекта разработали материалы, которые вы можете найти на странице [«Общие правила»](#). Они помогут вам лучше понять, как работает проект, и позволят вам эффективно и просто работать с ALT Mobile Wiki в роли участника.

Настоятельно рекомендуется проверить ваши коммиты на орфографические и критические ошибки до отправке PR в основную ветку проекта. Для этого ознакомьтесь со страницей [«Проверка текста на ошибки»](#)

> [!TIP]
> Следование вышеперечисленному — залог хорошего будущего проекта.

### :outbox_tray: Отправка изменений

Для того, чтобы изменения стали доступны всем, нужно создать Запрос на слияние (Pull Request). Процесс создания описан в разделе [Внесение изменений](#).

## Зеркало

Вся документация из репозитория [ALTMobileWiki](https://github.com/OlegShchavelev/ALTMobileWiki) размещается на cайте [altmobile.org](https://altmobile.org), обновление происходит автоматически, после переноса изменений в основную ветку проекта.

## Участники проекта ALT Mobile Wiki

Список людей внесших вклад в проект:

[![Участники](https://contrib.rocks/image?repo=OlegShchavelev/ALTMobileWiki)](https://github.com/OlegShchavelev/ALTMobileWiki/graphs/contributors)

## Активность проекта ALT Mobile Wiki

![Статистика активности участников проекта ALT Mobile Wiki](https://repobeats.axiom.co/api/embed/02b02ba7dae626566a4b2737c0c2b1ab6714fac5.svg 'Repobeats analytics image')

## Как помочь проекту ALT Mobile Wiki

Вы можете поддержать проект несколькими способами:

- Создать задачу с проблемой или предложением по улучшению (Issue);
- Создать запрос на слияние с добавлением/исправлением статьи или функционала проекта ALT Mobile Wiki разработанной на платформе VitePress.

## Лицензия

[MIT](https://gitea.basealt.ru/schavelevoi/ALTMobileWiki/src/branch/main/LICENCE) Copyright © 2024-present <OLEG SHCHAVELEV>
