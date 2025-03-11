# ALT Mobile Virtual Machine

## Installing ALT Mobile on a Virtual Machine

### Downloading the ALT Mobile Image

The image of the ALT Mobile operating system can be downloaded from [ftp](https://beta.altlinux.org/mobile/sisyphus/latest/). Select a format image containing `def` in the name. Unzip the downloaded image to a place convenient for you.

**Note:** For virtualization purposes, an image with the architecture `x86_64` is required. Images for the `aarch64` and `risc-v` architectures are also supported and can be used in a similar way.

### Configuration and Launch in Qemu

#### With Acceleration (Qemu-KVM)

1. Install Qemu-KVM:

```shell
apt-get install /usr/bin/qemu-kvm
```

2. Start the system as a regular user (not as root):

```shell
kvm -m 4G -k en-gb -hda /path/to/image.img
```

Here:

- `kvm` - indicates that it is run using qemu-kvm
- `-m 4G` - 4 GB of RAM will be allocated for the machine
- `-k en-gb` - an English keyboard layout will be used
- `-hda /path/to/image.img` - путь к нашему образу

Instructions for running images for [aarch64](https://www.altlinux.org/Ports/aarch64/QEMU) and [riscv64](https://www.altlinux.org/Ports/riscv64/QEMU)

3. To work with the graphical interface, install and use remote-viewer:

```shell
apt-get install /usr/bin/remote-viewer
remote-viewer vnc://localhost:5900
```

#### Without Acceleration

1. Install Qemu and the SDL interface:

```shell
apt-get install qemu-system-x86 qemu-ui-sdl
```

2. Start the system as a regular user:

```shell
qemu-system-x86_64 -m 4G -k en-gb -hda /path/to/image.img -smp cpus=4 -net user
```

Here:

- `qemu-system-x86_64` - indicates that we are emulating an x86_64 computer
- `-m 4G` - 4 GB of RAM will be allocated for the machine
- `-k en-gb` - an English keyboard layout will be used
- `-hda /path/to/image.img` - path to our image
- `-smp cpus=4` - 4 CPU cores will be used
- `-net user` - the computer's network will be used

### Result

After launching the system in QEMU, you will be able to control the ALT Mobile interface using the mouse, simulating finger input, as well as enter characters from a physical keyboard. Note that when using a virtual machine, access to hardware functions like telephony, camera, and other devices will be limited. Nonetheless, the virtual machine is an excellent tool for adapting and testing applications under the ALT Mobile interface.

## Additional

### Standard Account Information

- Default logins:
  root: `root`, password: `altlinux`;
  user: `altlinux`, password: `271828`.
