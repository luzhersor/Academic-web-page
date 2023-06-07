
    // Transparent Navbar //
    var nav = document.querySelector('nav');

    window.addEventListener('scroll', function () {
    if (window.pageYOffset > 200) {
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
     }, 100, function () {

       window.location.hash = hash;
     });
   }
 });



//TEXT EFFECT//
 gsap.registerPlugin(ScrollTrigger);
// REVEAL //
gsap.utils.toArray(".revealUp").forEach(function (elem) {
  ScrollTrigger.create({
    trigger: elem,
    start: "top 80%",
    end: "bottom 20%",
    markers: true,
    onEnter: function () {
      gsap.fromTo(
        elem,
        { y: 100, autoAlpha: 0 },
        {
          duration: 1.25,
          y: 0,
          autoAlpha: 1,
          ease: "back",
          overwrite: "auto"
        }
      );
    },
    onLeave: function () {
      gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
    },
    onEnterBack: function () {
      gsap.fromTo(
        elem,
        { y: -100, autoAlpha: 0 },
        {
          duration: 1.25,
          y: 0,
          autoAlpha: 1,
          ease: "back",
          overwrite: "auto"
        }
      );
    },
    onLeaveBack: function () {
      gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
    }
  });
});