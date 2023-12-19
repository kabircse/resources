Cron Jobs configure:
  1. When it has default version and it works for you then
  php job_reminder/artisan schedule:run
  
  2. If it is not working then you need to find your desired version. Like as
  	/opt/php71/bin/php job_reminder/artisan schedule:run >> /dev/null 2>&1
*job_reminder is your artisan.php file location on your project
