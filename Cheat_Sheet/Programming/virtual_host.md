# Create virtual host:
Step 1) C:\WINDOWS\system32\drivers\etc\ Open the "hosts" file :

127.0.0.1       localhost
127.0.0.1       test.com
127.0.0.1       example.com
Step 2) xampp\apache\conf\extra\httpd-vhosts.conf

<VirtualHost *:80>
    DocumentRoot C:/xampp/htdocs/test/
    ServerName www.test.com
</VirtualHost>
<VirtualHost *:80>
    DocumentRoot C:/xampp/htdocs/example/
    ServerName www.example.com
</VirtualHost>

Step 3) C:\xampp\apache\conf\httpd.conf. Scroll down to the Supplemental configuration section at the end, and locate the following section (around line 500), Remove the # from the beginning of the second line so the section now looks like this:

#Virtual hosts
Include conf/extra/httpd-vhosts.conf
Step 4) Restart XAMPP and now run in your browser :

www.example.com or www.test.com
