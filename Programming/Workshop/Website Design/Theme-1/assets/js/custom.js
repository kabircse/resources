mobile_bar = document.querySelector(".mobile-bar");
console.log(mobile_bar);
mobile_bar.addEventListener('click', function(){
    document.querySelector(".categories-nav").classList.toggle("show");
    console.log('clicked');
});