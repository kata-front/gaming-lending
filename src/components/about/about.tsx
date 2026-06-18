import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { SplitText } from "gsap/all";

const About = () => {
  const imageDivRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const split = new SplitText(titleRef.current, {
      type: "words",
    });

    gsap.from(split.words, {
      opacity: 0,
      yPercent: 200,
      xPercent: -500,
      stagger: 0.1,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top center',
        toggleActions: 'play none none reverse',
      }
    });

    gsap.to(imageDivRef.current, {
      width: "100vw",
      height: "100vh",
      borderRadius: "0px",
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'center center',
        end: '+=500px center',
        scrub: 2,
        pin: true,
        pinSpacing: true
      }
    });
  });

  return (
    <div
      ref={containerRef}
      className="w-screen h-screen flex flex-col justify-center items-center gap-2"
    >
      <span className="font-basic">Welcome to world of games</span>
      <span
        className="opacity-100 font-special text-3xl text-center"
        ref={titleRef}
      >
        Lets to start your adventure
      </span>

      <div ref={imageDivRef} className="w-30 h-50 rounded-2xl md:w-75 md:h-50">
        <img
          className="object-cover object-center w-full h-full"
          src="img/about.webp"
        />
      </div>
    </div>
  );
};

export default About;
