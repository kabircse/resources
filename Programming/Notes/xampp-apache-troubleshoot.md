##Port Problem: change port
  A:
  1. httpd.conf ->
  
      ```Listen 80```
      
  Change the 80 into any number / port you want. In my scenario I’m using port 8080.
  
    Listen 8080
    
  2. Still from the httpd.conf file, I found another line that says:
  
        ServerName localhost:80
    
      Change 80 to 8080.
    ServerName localhost:8080
    
  B: 
  1. httpd-ssl.conf->
  
      Listen 443
    
  Vhange the 443 into any number / port you want. I’ll using 4433 as the new port number.  
  
  Listen 4433
  
  2. Still from the httpd-ssl.conf file, find another line that says
      <VirtualHost _default_:443>
      ServerName localhost:443
      
      And change 443 to 4433.      
      <VirtualHost _default_:4433>
      ServerName localhost:4433
      
      
   ##Error not known: so debug error
    In XAMPP Control Panel V3.2.1, click on "NetStat" button on top right. 
    Make sure port 80 is not used by any other program. Then click on "Shell" Right below it. 
    Issue this command "Type ap then TAB two times"    
        Apache_Start.bat
