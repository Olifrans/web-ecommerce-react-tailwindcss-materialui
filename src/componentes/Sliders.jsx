import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { useState } from "react";
import { SlidersApi } from "../apifolder/SlidersApi";
import "./Sliders.css";

function Sliders() {
  //hooks-useState
  const [slides] = useState(SlidersApi);
  const [activeSlides, setActiveSlides] = useState(0);

  //style
  const arrowStyle =
    "rounded-full bg-grey flex justify-center items-center shadow-sm hover:cursor-pointer";

  const nextSlides = () => {
    if (activeSlides === slides.length - 1) {
      setActiveSlides(0);
    } else {
      setActiveSlides(activeSlides + 1);
    }
  };

  const prevSlides = () => {
    if (activeSlides === 0) {
      setActiveSlides(slides.length - 1);
    } else {
      setActiveSlides(activeSlides - 1);
    }
  };

  return (
    <div className="parentDiv h-[540px] bg-white flex items-center justify-between mobile:hidden ">
      {/* Leftarrow div */}
      <div className={arrowStyle}>
        <ArrowLeftOutlined style={{ fontSize: "50px" }} onClick={prevSlides} />
      </div>

      {/* Sliders div */}
      {slides.map((slide, index) => {
        if (index === activeSlides) {
          return (
            <div
              className={
                `wrapper flex w-[100%] h-[500px] items-center justify-center shadow-2xl rounded-lg border-[#c0c0c0] border-10px overflow-hidden relative` +
                slide.background
              }
            >
              <div className="slide flex items-center justify-center h-[100%]">
                <div className="forImage flex flex-1 justify-center items-center h-[100%]">
                  <img
                    className="h-[100%] object-cover"
                    src={slide.src}
                    alt="slide_image"
                  />
                </div>

                <div className="des flex flex-col flex-1 place-items-start justify-center -ml-11">
                  <h2 className="tex-[55px]">{slide.content.h2}</h2>
                  <p className="tex-[30px]">{slide.content.p}</p>
                  <button className="btn">Olifrans Shop</button>
                </div>
              </div>
            </div>
          );
        }
      })}

      {/* Rightarrow div */}
      <div className={arrowStyle}>
        <ArrowRightOutlined style={{ fontSize: "50px" }} onClick={nextSlides} />
      </div>
    </div>
  );
}

export default Sliders;
