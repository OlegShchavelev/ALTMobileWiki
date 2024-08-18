## Installation using Flatpak

If you have the Flatpak package, you can install **«{{ $frontmatter?.appstream?.name }}»** with one command. Terminal commands are entered via the virtual terminal **«Console»** or via a remote SSH connection:

```shell-vue
flatpak install flathub {{ $frontmatter?.aggregation?.flatpak }}
```

<!--@include: @en/apps/.parts/install/software-flatpak.md-->
