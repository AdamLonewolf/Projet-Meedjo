const UpdateHeader = () => {
    if (scrollY > 10) {
      document.getElementById("navbar").classList.remove("nav-top");
    } else {
      document.getElementById("navbar").classList.add("nav-top");
    }
  };

  
  window.addEventListener("scroll", UpdateHeader);

  

  var BigTitle = {
    duration:2000,
    origin:"left",
    distance:"70px",
  }

  var Textslideleft = {
    duration:2000,
    delay:200,
    origin:"left",
    distance:"70px",
  }

  var TitleArticle = {
    duration:1000,
    origin:"top",
    distance:"50px",
  }

  var image = {
    duration: 1000,
    origin:"bottom",
    distance: "50px"
  }

  var button = {
    duration: 1500,
    origin: "bottom",
    distance: "60px"
  }

  sr.reveal(".hero-subtitle",{
    duration:2000,
    origin:"left",
    distance:"70px",
    
  });

  sr.reveal(".hero-bigtitle", {
    duration:2000,
    origin:"left",
    distance:"70px",
    delay: 400,
  })


  sr.reveal(".wara-title", TitleArticle)
  sr.reveal(".banner-title", BigTitle)
  sr.reveal(".waralocate-title", TitleArticle)
  sr.reveal(".wara-text", Textslideleft)
  sr.reveal(".rubrique-title", Textslideleft)
  sr.reveal(".article-title", TitleArticle)
  sr.reveal(".wara-image",image)
  sr.reveal(".article-image",image)
  sr.reveal(".hero-btn-wrapper",button)
  
       //Close menu-hamburger (code js pour fermer automatiquement le menu hamburger)

        var home = document.getElementById('home');
        var discover = document.getElementById('discover');
        var about = document.getElementById('about');
        
        home.addEventListener("click", ()=>{
            document.getElementById('check').checked = false
        })
        discover.addEventListener("click", ()=>{
            document.getElementById('check').checked = false
        })
        about.addEventListener("click", ()=>{
            document.getElementById('check').checked = false
        })
  

 