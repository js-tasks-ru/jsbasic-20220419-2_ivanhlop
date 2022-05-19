function initCarousel() {
  let left = document.querySelector('.carousel__arrow_left');
  let right = document.querySelector('.carousel__arrow_right');
  let carousel = document.querySelector('.carousel__inner');
   let width = carousel.offsetWidth;
   let min = 0;
   let max =(-1 *(carousel.childElementCount - 1)*width);
   
   left.style.display = 'none';
  
   document.querySelectorAll(`.carousel__arrow`).forEach((arrow) => {
    arrow.addEventListener('click', (event) => {
      let position;
      let nextPosition = parseInt(carousel.style.transform.replace('translateX(','').replace('px)', '')) || 0;
      if ((nextPosition <= min) && (nextPosition >= max)) {
        position = event.currentTarget == right ? -1 : position;
        position = event.currentTarget == left  ?  1 : position;
        carouselInner();
       }

      right.style.display = nextPosition <= max ? 'none' : '';
      left.style.display = nextPosition >= min ? 'none' : '';

      function carouselInner() {
        nextPosition = nextPosition + (position * width);
        carousel.style.transform = `translateX(${nextPosition}px)`;
      };
    });
  });
}
