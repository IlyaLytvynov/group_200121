
import {test} from './test.js';

const HELLO = 'WORLD';
console.log(HELLO, test);
function runSlideShow(root) {
  const ACTIVE_SLIDE_CLASS_NAME = 'active';
  const slides = root.querySelectorAll('.mySlides');
  const btns = root.querySelectorAll('.slideshow__control');
  const DIRECTIONS = {
    NEXT: 'next',
    PREV: 'prev',
    DIRECT: 'direct'
  }
  const pagerBtns = root.querySelectorAll('.pager');
  let activeSlideIndex = 0;

  slides[activeSlideIndex].classList.add(ACTIVE_SLIDE_CLASS_NAME);

  const increaseSlide = () => {
    if(activeSlideIndex + 1 < slides.length) {
      activeSlideIndex++;
    } else {
      activeSlideIndex = 0;
    };
  }

  const decreaseSlide = () => {
    if(activeSlideIndex > 0) {
      activeSlideIndex--;
    } else {
      activeSlideIndex = slides.length - 1;// индекс последнего элемента
    };
  }

  const changeSlide = (direction, directIndex) => {
    slides[activeSlideIndex].classList.remove(ACTIVE_SLIDE_CLASS_NAME);
    if (direction === DIRECTIONS.NEXT) {
      increaseSlide() 
    } else if (direction === DIRECTIONS.DIRECT && directIndex !== undefined) {
      activeSlideIndex = directIndex;
    } else {
      decreaseSlide()
    }

    slides[activeSlideIndex].classList.add(ACTIVE_SLIDE_CLASS_NAME);
  }


  btns[0].addEventListener('click', () => {
    console.log('PREV');
    changeSlide(DIRECTIONS.PREV);
  })

  btns[1].addEventListener('click', () => {
    console.log('NEXT');
    changeSlide(DIRECTIONS.NEXT);
  });

  for(let i = 0; i < pagerBtns.length; i++) {
    pagerBtns[i].addEventListener('click', () => {
      console.log('DIRECT', i);
      if (activeSlideIndex === i) {
        return;
      }
      changeSlide(DIRECTIONS.DIRECT, i);
    })
  }
}

export {runSlideShow, HELLO}
