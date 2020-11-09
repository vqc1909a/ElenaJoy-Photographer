const enlaces = document.querySelectorAll('.nav-links a')
const gallery_button = document.querySelector('.gallery-button')
const burger = document.querySelector(".burger")
burger.addEventListener("click", function(){
     this.classList.toggle("active");
})
gallery_button.addEventListener("click", (e) =>{
          const gallery = document.querySelector('.gallery')
          gallery.scrollIntoView({behavior: "smooth", alignTo: false});
})


enlaces.forEach(enlace => {
     enlace.addEventListener("click", (e) =>{
          const section = document.querySelector(`.${e.target.dataset.section}`)
          section.scrollIntoView({behavior: "smooth", alignTo: false});
          burger.classList.toggle("active");
     })
});

window.onscroll = function(){
     const y = this.scrollY;
     console.log(y);
     const main_head = document.querySelector('.main-head');
     if(y > 0){
          main_head.style.background = "rgba(255,255,255,.6)";
     }else{
          main_head.style.backgroundColor = "white";
     }
}