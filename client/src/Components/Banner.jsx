import { useEffect } from "react";
import { Chevron } from "../Assets/svg";
import Image1 from "../Assets/images/cbr-1.jpg";
import Image2 from "../Assets/images/cbr-2.jpg";
import Image3 from "../Assets/images/cbr-3.jpg";

function Banner() {

  useEffect(() => {
    const slides = document.getElementsByClassName("carousel-item");
    const totalSlides = slides.length;
    let slidePosition = 0;
    const buttonPrev = document.getElementsByClassName("button-prev");
    const buttonNext = document.getElementsByClassName("button-next");
    if(slides && buttonPrev && buttonNext) {
      const updateSlidePosition = () => {
        for (let _i = 0; _i < slides.length; _i++ ) {
          slides[_i].classList.remove('carousel-item-visible');
          slides[_i].classList.add('carousel-item-hidden');
        }
        slides[slidePosition].classList.add('carousel-item-visible');
      }
      const moveToNext = () => {
        if (slidePosition === totalSlides - 1) {
          slidePosition = 0;
        } else {
          slidePosition++;
        }
        updateSlidePosition();
      }
      const moveToPrev = () => {
        if (slidePosition === 0) {
          slidePosition = totalSlides - 1;
        } else {
          slidePosition--;
        }
        updateSlidePosition();
      }
      buttonPrev[0].addEventListener("click", () => {
        moveToNext();
      });
      buttonNext[0].addEventListener("click", () => {
        moveToPrev();
      });
    }
  }, []);

  return (
    <div className="w-full overflow-hidden hide-scroll relative group" id="banner">
      <div className="carousel-item carousel-item-visible">
        <img src={Image1} className="h-screen object-cover" alt="banner 1" />
      </div>
      <div className="carousel-item">
        <img src={Image2} className="h-screen object-cover" alt="banner 2" />
      </div>
      <div className="carousel-item">
        <img src={Image3} className="h-screen object-cover" alt="banner 3" />
      </div>
      <div
        style={{textShadow: "0 0 8px #11182777"}}
        className="flex w-full justify-between absolute top-1/2 transform -translate-y-1/2"
      >
        <Chevron class="button-prev transform duration-200 ml-3 sm:-ml-3 group-hover:ml-2 rotate-90" />
        <Chevron class="button-next transform duration-200 mr-3 sm:-mr-3 group-hover:mr-2 -rotate-90" />
      </div>
    </div>
  )
}

export default Banner;