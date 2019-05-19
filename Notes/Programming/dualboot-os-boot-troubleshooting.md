##After installing/upgrading os of dual boot system. One of os boot/grub load removed.
a. Linux missing solution:
   1. Using cd-rom/usb goto live os.
   2. Connect internet to install boot-repair.
   3. Launch boot-repair and takes it's guide line.
   4. It will solve your problem of linux loader.
   Boot-repair downloading command:
      sudo add-apt-repository ppa:yannubuntu/boot-repair
      sudo apt-get update
      sudo apt-get install -y boot-repair && boot-repair
   
   ## If above fail then try next one
   ## Another one: using windows cmd run:
        bcdedit /set {bootmgr} path \EFI\ubuntu\grubx64.efi
   ## Another one: windows cmd
       bootrec /fixmbr
       bootrec /fixboot
       
   ## If above fail the add a boot partition/diskspace on your hd.
   ## Another one: on linux command:
       sudo update-grub
       sudo grub-install /dev/sda
       sudo update-grub
       
   
 b. Windows missing solution:
    1. Go to windows recovery from disk/usb if fails then go next
    2. Go to windows installation->recovery to command prompt
      ## Another one: windows cmd
         bootrec /fixmbr
         bootrec /fixboot
