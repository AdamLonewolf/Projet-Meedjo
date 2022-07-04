const UpdateHeader = () => {
    if (scrollY > 10) {
      document.getElementById("navbar").classList.remove("nav-top");
    } else {
      document.getElementById("navbar").classList.add("nav-top");
    }
  };
  
  window.addEventListener("scroll", UpdateHeader);

  /*Initialisation du carousel*/

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})