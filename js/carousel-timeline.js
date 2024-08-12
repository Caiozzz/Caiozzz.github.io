const btnRight = window.document.querySelector('.carousel-button.-right');
const btnLeft = window.document.querySelector('.carousel-button.-left');
const carouselTimeline = window.document.querySelector('.carousel-timeline');
let positionX = 0;

btnRight.onclick = ()=> {
   if (positionX > -450){
      positionX -= 150;
      carouselTimeline.style = `transform: translateX(${positionX}px);`;
      btnLeft.classList.remove('-disabled');
      if (positionX <= -450){
         btnRight.classList.add('-disabled');
      }
   }
};

btnLeft.onclick = ()=> {
   if (positionX < 450){
      positionX += 150;
      carouselTimeline.style = `transform: translateX(${positionX}px);`;
      btnRight.classList.remove('-disabled');
      if (positionX >= 450){
         btnLeft.classList.add('-disabled');
      }
   }
};