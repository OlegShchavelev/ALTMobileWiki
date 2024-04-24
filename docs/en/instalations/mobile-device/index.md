# ALT Mobile Pinephone / Pinephone Pro

This section is dedicated to the installation of the ALT Mobile system on devices such as Pinephone and Pinephone Pro and other important information that may be useful during the installation process.

## Installing ALT Mobile on Pinephone / Pinephone Pro

### Downloading ALT Mobile Image

- The ALT Mobile image can be downloaded from [ftp](http://beta.altlinux.org/mobile/latest/). We need images starting with "pinephone", for example, `pinephone-phosh-20231123-aarch64.img.xz`.

### Installing on Internal Memory (emmc)

**Preparing the Phone:**

- Make sure your Pine Phone has the tow-boot loader installed on the SPI flash.
- To boot the phone in emmc export mode as a USB drive, hold the Volume Up button while turning it on.

**Graphical Method of Installation:**

- Unpack the downloaded ALT Mobile image.
- Use gnome-disk-utility to write the image to the SD card:
- Open gnome-disks and select your Pinephone’s USB drive.
- Format it and select the "Restore Disk Image" option.
- Specify the unpacked image and begin the writing process.
- After writing, it is recommended to extend the system partition. For this, choose the "Resize" option.

**Installing ALT Mobile on emmc via Terminal:**

- Execute the command where `sdX` is your Pinephone’s drive (replace X with your specific data):

```Shell
xzcat pinephone-phosh-latest-aarch64.img.xz | dd of=/dev/sdX oflag=direct,sync iflag=fullblock bs=1M status=progress
```
- It is recommended to increase the size of the file system, which can be done with the commands:

```
echo ", +" | sfdisk -N 1 /dev/sdX
resize2fs -p /dev/sdX1
```
- After completing the procedure, restart the device to boot from the new system.

### Installing on SD Card

**Graphical Method of Installation:**

- Unpack the downloaded ALT Mobile image.
- Use gnome-disk-utility to write the image to the SD card:
- Open gnome-disks and select the SD card.
- Format the card and select the "Restore Disk Image" option.
- Specify the unpacked image and begin the writing process.

**Installing via Terminal:**

- Use the `dd` command to write the ALT Mobile image to the SD card:
```Shell
    xzcat your-image-file.img.xz | dd of=/dev/sdX oflag=direct,sync iflag=fullblock bs=1M status=progress
```
- After completing the writing process, remove the card from the computer and insert it into the Pine Phone.
- To boot from the SD card, hold down the Volume Down button while turning on the phone.

### Installing Tow-Boot on Pinephone Pro

- Download the Tow-Boot installer image from the [release page](https://github.com/Tow-Boot/Tow-Boot/releases/tag/release-2022.07-006). Search for an image according to your device model.

## Additional Information

### Standard Account Data

- Default logins: root: `root`, password: `altlinux`; user: `altlinux`, password: `271828`.

### Boot Order in Pinephone Pro

In Pinephone Pro, the following default boot order is used:

1.  **SPI flash:** The first source to search for a bootloader is the SPI flash. If a bootloader (such as Tow-Boot or U-Boot) is installed there, it will be used to boot the system.
2.  **Internal Memory (eMMC):** If no bootloader is found in SPI flash, the device will attempt to boot from the internal eMMC memory.
3.  **MicroSD Card:** In the absence of a bootloader in SPI flash and on eMMC, the system will attempt to boot from the microSD card.

**Choosing the Boot Source:**

- In **Explorer Edition, ordered after November 2023**, the microSD card boots first due to the use of rk2aw instead of Tow-Boot.
- In **Explorer Edition, ordered after July 2022**, hold the volume down button during the device's power-on. These devices come with Tow-Boot firmware for SPI.
- In **Explorer Edition, ordered from January to July 2022**, hold the RE button under the cover for a few seconds when powering on the device. Older batches require Tow-Boot firmware reflashing.

This boot order and the ability to choose the boot source provide flexibility in using the Pinephone Pro, allowing easy switching between different operating systems installed on various media.

## Possible Issues


**Problems with emmc firmware:**

- If there are connection issues, try reversing the Type-C connector.
- Ensure you are using the appropriate port and cable.