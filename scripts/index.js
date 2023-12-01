// const links = document.querySelectorAll('a')
// for (link of links) {
//     link.addEventListener('click', (e) => e.preventDefault())
// }

let position = 0;
let sliding = 0

function pepe() {
  const sliders = document.querySelectorAll(".slider");

  for (i = 0; i < sliders.length; i++) {
    let slider = document.querySelectorAll('.slider-item-container')[i]
    let leftArrow = document.querySelectorAll(".carousel-left")[i];
    let rightArrow = document.querySelectorAll(".carousel-right")[i];
  

    leftArrow.addEventListener("click", () => {

        if (position != 0) {
            sliding -= 50
    
            slider.style = `transform: translateX(-${sliding}%)`;
            position--
        } else {
            slider.style = `transform: translateX(-200%)`;
            position = 4
            sliding = 200
        }
      });
    
      rightArrow.addEventListener("click", () => {



        if (position != 4) {
            sliding += 50
            slider.style = `transform: translateX(-${sliding}%)`;
    
            position++
        } else {
            slider.style = `transform: translateX(0%)`;
            position = 0
            sliding = 0
        }
      });

  }

}


pepe()