
    // Transparent Navbar //
    var nav = document.querySelector('nav');

    window.addEventListener('scroll', function () {
    if (window.pageYOffset > 450) {
        nav.classList.add("bg-dark", 'shadow');
    } else {
        nav.classList.remove("bg-dark", 'shadow');
    }
    });

 // Get the current year for the copyright
 $('#year').text(new Date().getFullYear());

 // Init Scrollspy
 $('body').scrollspy({ target: '#main-nav' });

 // Smooth Scrolling
 $("#main-nav a").on('click', function (event) {
   if (this.hash !== "") {
     event.preventDefault();

     const hash = this.hash;

     $('html, body').animate({
       scrollTop: $(hash).offset().top
     }, 800, function () {

       window.location.hash = hash;
     });
   }
 });