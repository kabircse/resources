1. Use CDN for speedup site.Free CDN: https://cdnjs.com/, https://www.bootstrapcdn.com/, https://www.bootstrapcdn.com/, http://code.jquery.com/ 
   Use SRI(integrity unique) for loading cdn with security like as <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha256-KXn5puMvxCw+dAYznun+drMdG1IFl3agK0p/pqT9KAo= sha512-2e8qq0ETcfWRI4HJBzQiA3UoyFk6tbNyG+qSaIBZLyW9Xf3sWZHN/lxe9fTh1U45DpPf07yj94KsUHHWe4Yk1A=="crossorigin="anonymous"></script>

2.   self -> refers current class. use static instead of self
3.   $this-> refers current object.



reverse proxy   -> huge request handle-> varnish (2,000000 response/sec) 
asynchronus taks -> parallel tasking -> swoole 
memory leak         -> large request handling, then time increasing similarly garbage memeory increasing 
load balancing      -> 
elastic search       -> 
cdn -> for static assets (images,css,js)
