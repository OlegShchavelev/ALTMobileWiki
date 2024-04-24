# ALT Mobile Virtual Machine

## Installing ALT Mobile on a Virtual Machine

### Downloading the ALT Mobile Image

The ALT Mobile operating system image can be downloaded from:
[ftp](http://beta.altlinux.org/mobile/latest/)

Please select the image format as:

- **phosh-20231004-x86_64.img.xz**

**Note:** For virtualization purposes, an image with x86_64 architecture is required. Images for architectures aarch64 and risc-v are also supported and can be used in a similar manner.

Extract the downloaded image to a convenient location, for example:

- `/home/petr/images/phosh-20231004-x86_64.img`

### Configuration and Launch in Qemu

#### With Acceleration (Qemu-KVM)

1. Install Qemu-KVM:
```Shell
apt-get install /usr/bin/qemu-kvm
```

2. Start the system as a regular user (not as root):
```Shell
kvm -m 4G -k en-gb -hda /home/petr/images/phosh-20231004-x86_64.img
```

Here:

- `kvm` - indicates that it is run using qemu-kvm
- `-m 4G` - 4 GB of RAM will be allocated for the machine
- `-k en-gb` - an English keyboard layout will be used
- `-hda /home/user/images/phosh-20231004-x86_64.img` - path to our image

Instructions for running images for
[aarch64](https://www.altlinux.org/Ports/aarch64/QEMU)
and [riscv64](https://www.altlinux.org/Ports/riscv64/QEMU)

3. To work with the graphical interface, install and use remote-viewer:
```Shell
apt-get install /usr/bin/remote-viewer
remote-viewer vnc://localhost:5900
```

#### Without Acceleration

1. Install Qemu and the SDL interface:
```Shell
apt-get install qemu-system-x86 qemu-ui-sdl
```
2. Start the system as a regular user:
```Shell
qemu-system-x86_64 -m 4G -k en-gb -hda /home/petr/images/phosh-20231004-x86_64.img -smp cpus=4 -net user
```
Here:

- `qemu-system-x86_64` - indicates that we are emulating an x86_64 computer
- `-m 4G` - 4 GB of RAM will be allocated for the machine
- `-k en-gb` - an English keyboard layout will be used
- `-hda /home/user/images/phosh-20231004-x86_64.img` - path to our image
- `-smp cpus=4` - 4 CPU cores will be used
- `-net user` - the computer's network will be used

### Result

After launching the system in QEMU, you will be able to control the ALT Mobile interface using the mouse, simulating finger input, as well as enter characters from a physical keyboard. Note that when using a virtual machine, access to hardware functions like telephony, camera, and other devices will be limited. Nonetheless, the virtual machine is an excellent tool for adapting and testing applications under the ALT Mobile interface.

## Additional

### Standard Account Information

- Default logins: root: `root`, password: `altlinux`; user: `altlinux`,
  password: `271828`.