
const sliders = (slides,direction,prev,next) => {
   let slideIndex = 1,
      paused = false;

   const items = document.querySelectorAll(slides);

   function showSlides(n) {
      if (n > items.length) {
         slideIndex = 1;
      }

      if (n < 1) {
         slideIndex = items.length;
      }

      items.forEach(items => {
         items.classList.add('animated');
         items.style.display = 'none';
      });

      items[slideIndex - 1].style.display = 'block';
   }

   showSlides(slideIndex);

   function plusSlides(n) {
      showSlides(slideIndex += n);
   }

   function animationBounceRight() {
      items[slideIndex - 1].classList.remove('bounceInLeft');
      items[slideIndex - 1].classList.add('bounceInRight');
   }
   function animationBounceLeft() {
      items[slideIndex - 1].classList.remove('bounceInRight');
      items[slideIndex - 1].classList.add('bounceInLeft');
   }

   try {
      const prevBtn = document.querySelector(prev),
         nextBtn = document.querySelector(next);

      prevBtn.addEventListener('click',() => {
         plusSlides(-1);
         animationBounceRight();
      });

      nextBtn.addEventListener('click',() => {
         plusSlides(1);
         animationBounceLeft();
      });
   } catch (e) { } // To prevent bags with sliders which have no such arguments.

   function activateAnimation() {
      if (direction === 'vertical') {
         paused = setInterval(function () {
            plusSlides(1);
            items[slideIndex - 1].classList.add('bounceInDown');
         },3000);
      } else {
         paused = setInterval(function () {
            plusSlides(1);
            animationBounceRight();
         },3000);
      }
   }

   activateAnimation();

   items[0].parentNode.addEventListener('mouseenter',() => {
      clearInterval(paused);
   });

   items[0].parentNode.addEventListener('mouseleave',() => {
      activateAnimation();
   });

};

export default sliders;