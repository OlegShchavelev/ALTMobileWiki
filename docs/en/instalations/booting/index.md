# Tow-Boot

## Installing Tow-Boot on Pine Phone Pro

### Writing the Tow-Boot image to an SD card using the graphical interface:

- Unpack the downloaded ALT Mobile image.
- Use gnome-disk-utility to write the image to the SD card:
    - Open gnome-disks and select the SD card.
    - Format the card and select the "Restore Disk Image" option.
    - Specify the unpacked image and begin the writing process.

### Writing the Tow-Boot image to an SD card via terminal:

- Write it to an SD card, where /dev/XXX is your SD
  card (replace XXX with your details):

```Shell
dd if=spi.installer.img of=/dev/XXX bs=1M oflag=direct,sync status=progress
```

- After writing the Tow-Boot image to the SD card, follow these steps:

**Note:** If you are not sure that the battery is fully charged, it is recommended to connect the phone to a power source.

### Installation process

- The process of installing Tow-Boot on Pinephone Pro is well explained in this [video](https://yandex.ru/video/preview/7204406835731215668)

1. Turn off the Pinephone Pro.
2. Remove the battery from the device.
3. Insert the SD card with the Tow-Boot image into the SD card slot.
4. Reinsert the battery into the Pinephone Pro.
5. Press and hold the RE button while turning on the device.
6. Keep holding the RE button until the phone vibrates and the LED indicator turns red. It might be more convenient to connect the phone to a power source via USB than to press the power button.
7. After turning on with the Tow-Boot image, the phone will vibrate slightly, the LED indicator will light up red and then turn yellow after a short time.
8. After a while, the screen will turn on showing a blue color or directly load into the graphical installer interface.
9. In the graphical installer interface, select "Install Tow-Boot to SPI", connect the charger to the phone, and press the "Start installation" button.

**Note:** Erasing the storage before installation is not required. The erasing option can be used to remove Tow-Boot (or any other firmware installed in the SPI partition).

<Video id="7piXOM8G2uQ" />

# Additional

### Default Account Data

- Default logins: root: `root`, password: `altlinux`; user: `altlinux`, password: `271828`.

### Boot Order in Pinephone Pro

In the Pinephone Pro, the following boot order is used by default:

1. **SPI flash:** The first source for the bootloader search is the SPI flash. If a bootloader is installed there (such as Tow-Boot or U-Boot), it will be used to boot the system.
2. **Internal memory (eMMC):** If the bootloader is not found in the SPI flash, the device will attempt to boot from the internal eMMC memory.
3. **MicroSD card:** If there is no bootloader in the SPI flash and eMMC, the system will try to boot from the microSD card.

**Choosing the Boot Source:**

- In the **Explorer Edition, ordered after November 2023**, the microSD card boots first due to the use of rk2aw instead of Tow-Boot.
- In the **Explorer Edition, ordered after July 2022**, hold the volume down button while turning on the device. These devices come with Tow-Boot firmware for SPI.
- In the **Explorer Edition, ordered from January to July 2022**, hold the RE button under the cover for a few seconds when turning on the device. Older batches require re-flashing of Tow-Boot.

This boot order and the ability to choose the boot source provide flexibility in using the Pinephone Pro, allowing easy switching between different operating systems installed on various media.

Possible Issues

**Problems with eMMC flashing:**

- If you experience connectivity issues, try flipping the Type-C connector.
- Ensure that you are using the appropriate port and cable.