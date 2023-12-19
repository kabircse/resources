## After installing/upgrading OS of dual boot system. One of OS boot/grub load removed.
### a. Linux missing solution:
  ##### Method-1 :
      1. Using cd-rom/usb goto live os.
      2. Connect internet to install boot-repair.
      3. Launch boot-repair and takes it's guide line.
      4. It will solve your problem of linux loader.
      Boot-repair downloading command:
         ``` sudo add-apt-repository ppa:yannubuntu/boot-repair
         sudo apt-get update
         sudo apt-get install -y boot-repair && boot-repair
   
   ##### Method-2:
       using windows cmd run:
       bcdedit /set {bootmgr} path \EFI\ubuntu\grubx64.efi
       
   ##### Method-3:
      Go to ubuntu recovery and run this command:
         sudo update-grub
         sudo grub-install /dev/sda
         sudo update-grub
   ##### Method-4:
   If above fail then add a boot partition/diskspace on your hd.       
         
 ### b. Windows missing solution:
   ##### Method-1: Go to windows recovery from disk/usb if fails then go next
   ##### Method-2: Go to windows installation->recovery to command prompt run
      bootrec /fixmbr
      bootrec /fixboot
