import createElement from "../../assets/lib/create-element.js";

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    let carousel = createElement(`<div class="carousel">
      <div class="carousel__arrow carousel__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </div>
      <div class="carousel__arrow carousel__arrow_left">
        <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
      </div>
    </div>`);
    let inner = createElement(`<div class="carousel__inner"></div>`);
    for (let slide of slides) {
      inner.innerHTML += `
      <div class="carousel__slide" data-id="penang-shrimp">
        <img src="/assets/images/carousel/${
          slide.image
        }" class="carousel__img" alt="slide">
        <div class="carousel__caption">
          <span class="carousel__price">€${slide.price.toFixed(2)}</span>
          <div class="carousel__title">${slide.name}</div>
          <button type="button" class="carousel__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
      `;
    }
    carousel.appendChild(inner);
    this.elem = carousel;
    const buttonRight = carousel.querySelector(".carousel__arrow_right");
    const buttonLeft = carousel.querySelector(".carousel__arrow_left");
    const carouselInner = carousel.querySelector(".carousel__inner");
    const slidesCount =
      carouselInner.querySelectorAll(".carousel__slide").length;

    let activeSlideIndex = 0;
    buttonLeft.style.display = "none";

    buttonRight.addEventListener("click", () => {
      changeSlide("right");
    });
    buttonLeft.addEventListener("click", () => {
      changeSlide("left");
    });

    function changeSlide(direction) {
            if (direction === "left") {
        activeSlideIndex--;
      } else if (direction === "right") {
        activeSlideIndex++;
      }
      if (activeSlideIndex !== 0) {
        buttonLeft.style.display = "";
      } else {
        buttonLeft.style.display = "none";
      }
      if (activeSlideIndex === slidesCount - 1) {
        buttonRight.style.display = "none";
      } else {
        buttonRight.style.display = "";
      }

      carouselInner.style.transform = `translateX(-${
        activeSlideIndex * carouselInner.offsetWidth
      }px)`;
    }
    let buttonAdds = carouselInner.querySelectorAll(".carousel__button");
    for (let button of buttonAdds) {
      button.addEventListener("click", function () {
        buttonAdds[activeSlideIndex].dispatchEvent(
          new CustomEvent("product-add", {
            detail: slides[activeSlideIndex].id,
            bubbles: true,
          })
        );
      });
    }
  }
}
/* import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
constructor(slides) {
this.slides = slides;
this.createCarousel();
}

createCarousel(){
let carousel = createElement(`
<div class="carousel">
`
);

let caruselDivs = `
<div class="carousel__arrow carousel__arrow_right">
<img src="/assets/images/icons/angle-icon.svg" alt="icon">
</div>
<div class="carousel__arrow carousel__arrow_left">
<img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
</div>
<div class="carousel__inner">
`;
for(let i = 0; i < this.slides.length; i++){
caruselDivs += `
<div class="carousel__slide" data-id="${this.slides[i].id}">
<img src="/assets/images/carousel/${this.slides[i].image}" class="carousel__img" alt="slide">
<div class="carousel__caption">
<span class="carousel__price">€${this.slides[i].price.toFixed(2)}</span>
<div class="carousel__title">${this.slides[i].name}</div>
<button type="button" class="carousel__button">
<img src="/assets/images/icons/plus-icon.svg" alt="icon">
</button>
</div>
</div>
`;

}
carousel.innerHTML = caruselDivs;
this.elem = carousel;

let carouselDiv = this.elem.querySelector(".carousel__inner")
let carouselDivWidth = document.querySelector(".container").offsetWidth;
let arrowRight = this.elem.querySelector(".carousel__arrow_right").children[0];
let arrowLeft = this.elem.querySelector(".carousel__arrow_left").children[0];
let widthNow = 0;
let slideNumber = 1;
let slidesValue = carouselDiv.children.length;

arrowLeft.style.display = "none";

arrowRight.onclick = function(){
if (slideNumber <= slidesValue){
slideNumber += 1;
widthNow -= carouselDivWidth;
carouselDiv.style.transform = `translateX(${widthNow}px)`;
}
display(slideNumber);
}

arrowLeft.onclick = function(){
if (slideNumber >= 1){
slideNumber -= 1;
widthNow += carouselDivWidth;
carouselDiv.style.transform = `translateX(${widthNow}px)`;
}
display(slideNumber);
}

function display(slideNumber){
slideNumber == 1 ? arrowLeft.style.display = "none":arrowLeft.style.display = "";
slideNumber == slidesValue ? arrowRight.style.display = "none":arrowRight.style.display = "";
}

let buttons = this.elem.querySelectorAll('.carousel__button');
buttons.forEach((button) => {
button.addEventListener('click', (event) => {
let data = event.target.closest('.carousel__slide').getAttribute('data-id');

event = new CustomEvent("product-add", {
detail: data,
bubbles: true
});
this.elem.dispatchEvent(event);
});
});
}
}
Пытался, так решить еще решить. Но автотесты непроходили
*/

