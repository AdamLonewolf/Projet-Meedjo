/*Scroll reveal*/
  
const sr = ScrollReveal({
    reset:true
  });


  var TitleArticle = {
    duration:1000,
    origin:"top",
    distance:"50px",
  }


  var Textslideleft = {
    duration:2000,
    delay:400,
    origin:"left",
    distance:"70px",
  }

  var image = {
    duration: 1000,
    origin:"bottom",
    distance: "50px"
  }

sr.reveal(".presentation-title",Textslideleft)
sr.reveal(".presentation-text", Textslideleft)
sr.reveal(".about-article-image",image)
sr.reveal(".presentation-article-title", TitleArticle)