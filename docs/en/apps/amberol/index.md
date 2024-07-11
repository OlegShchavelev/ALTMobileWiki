---
aggregation:
    flatpak: io.bassi.Amberol
    sisyphus: amberol
appstream:
    id: io.bassi.Amberol
    name: Amberol
    icon: https://dl.flathub.org/repo/appstream/x86_64/icons/128x128/io.bassi.Amberol.png
    summary: Plays music, and nothing else
    keywords: 
        - adaptive
        - circle
        - oobe
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

Amberol strives to be as compact, unobtrusive and simple as possible. It does not manage your music collection, does not allow you to manage playlists, does not allow you to edit metadata for your songs, does not show you the lyrics of your songs.

Amberol plays music and nothing else.

## Installation from the repository

There are several ways to install Amberol on ALT Mobile:

<!--@include: @en/apps/_parts/install/software-repo.md-->

**Installation via the terminal**

The execution of terminal commands is carried out through a virtual terminal Console or through a remote SSH connection:

```shell
su -
apt-get install amberol
```

## Installation using Flatpak

If you have the Flatpak package, you can install Amberol with one command. Terminal commands are entered via the virtual terminal Console or via a remote SSH connection:

```shell
flatpak install io.bassi.Amberol
```

<!--@include: @en/apps/_parts/install/software-flatpak.md-->