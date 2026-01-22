
import { ArrowRight } from "lucide-react";
import React, { useState, useRef, useId, useEffect, useCallback } from "react";

interface SlideData {
  title: string;
  button: string;
  src: string;
}

interface SlideProps {
  slide: SlideData;
  index: number;
  current: number;
  handleSlideClick: (index: number) => void;
}

const Slide: React.FC<SlideProps> = ({ slide, index, current, handleSlideClick }) => {
  const slideRef = useRef<HTMLLIElement>(null);
  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const animate = () => {
      if (!slideRef.current) return;
      slideRef.current.style.setProperty("--x", `${xRef.current}px`);
      slideRef.current.style.setProperty("--y", `${yRef.current}px`);
      frameRef.current = requestAnimationFrame(animate);
    };
    frameRef.current = requestAnimationFrame(animate);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  const handleMouseMove = (event: React.MouseEvent) => {
    const el = slideRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
    yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
  };

  const handleMouseLeave = () => {
    xRef.current = 0;
    yRef.current = 0;
  };

  const { src, title } = slide;

  return (
    <div className="[perspective:1200px] [transform-style:preserve-3d]">
      <li
        ref={slideRef}
        className="flex flex-1 flex-col items-center justify-center relative text-center text-white opacity-100 transition-all duration-300 ease-in-out w-[70vmin] h-[70vmin] mx-[4vmin] z-10 list-none cursor-pointer"
        onClick={() => handleSlideClick(index)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform:
            current !== index
              ? "scale(0.9) rotateX(8deg)"
              : "scale(1) rotateX(0deg)",
          transition: "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
          transformOrigin: "bottom",
        }}
      >
        <div
          className="absolute top-0 left-0 w-full h-full bg-[#1D1F2F] rounded-[40px] overflow-hidden transition-all duration-150 ease-out shadow-2xl"
          style={{
            transform:
              current === index
                ? "translate3d(calc(var(--x) / 30), calc(var(--y) / 30), 0)"
                : "none",
          }}
        >
          <img
            className="absolute inset-0 w-[120%] h-[120%] object-cover transition-all duration-700 ease-in-out max-w-none"
            style={{
              opacity: current === index ? 1 : 0.4,
              filter: current === index ? 'none' : 'grayscale(100%)',
              left: "-10%",
              top: "-10%"
            }}
            alt={title}
            src={src}
            loading="eager"
          />
          <div className={`absolute inset-0 transition-opacity duration-700 ${current === index ? 'bg-black/20' : 'bg-black/60'}`} />
        </div>

        <article
          className={`relative p-[4vmin] transition-all duration-700 ease-in-out pointer-events-none ${
            current === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-2xl md:text-4xl lg:text-6xl font-alfa relative mb-4 drop-shadow-lg leading-tight uppercase tracking-tight">
            {title}
          </h2>
        </article>
      </li>
    </div>
  );
};

interface CarouselControlProps {
  type: string;
  title: string;
  handleClick: () => void;
}

const CarouselControl: React.FC<CarouselControlProps> = ({ type, title, handleClick }) => (
  <button
    className={`w-14 h-14 flex items-center mx-2 justify-center bg-black border-2 border-black rounded-full focus:outline-none transition-all duration-300 shadow-xl hover:bg-white group active:scale-90 ${
      type === "previous" ? "rotate-180" : ""
    }`}
    title={title}
    onClick={handleClick}
  >
    <ArrowRight className="w-6 h-6 text-white group-hover:text-black transition-colors duration-300" />
  </button>
);

interface CarouselProps {
  slides: SlideData[];
}

export function Carousel({ slides }: CarouselProps) {
  const [current, setCurrent] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handlePreviousClick = useCallback(() => {
    setCurrent((prev) => (prev - 1 < 0 ? slides.length - 1 : prev - 1));
  }, [slides.length]);

  const handleNextClick = useCallback(() => {
    setCurrent((prev) => (prev + 1 === slides.length ? 0 : prev + 1));
  }, [slides.length]);

  const handleSlideClick = (index: number) => {
    if (current !== index) {
      setCurrent(index);
    }
  };

  const id = useId();

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[85vmin] md:h-[80vmin] flex items-center justify-center overflow-visible"
      aria-labelledby={`carousel-heading-${id}`}
    >
      <div className="relative w-[78vmin] h-full overflow-visible flex items-center">
        <ul
          className="absolute flex transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] m-0 p-0 list-none"
          style={{
            transform: `translate3d(calc(-${current * 78}vmin), 0, 0)`,
            width: `${slides.length * 78}vmin`,
          }}
        >
          {slides.map((slide, index) => (
            <Slide
              key={index}
              slide={slide}
              index={index}
              current={current}
              handleSlideClick={handleSlideClick}
            />
          ))}
        </ul>
      </div>

      <div className="absolute flex justify-center w-full bottom-[-10vmin] md:bottom-[-8vmin] z-50">
        <CarouselControl
          type="previous"
          title="Anterior"
          handleClick={handlePreviousClick}
        />

        <CarouselControl
          type="next"
          title="Próximo"
          handleClick={handleNextClick}
        />
      </div>
    </div>
  );
}
