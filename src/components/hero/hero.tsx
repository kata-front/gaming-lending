import { useRef, useState } from "react";
import styles from "./hero.module.scss";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Button from "../UI/button/button";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(1);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const getSrc = (currentIndex: number) => {
    return `videos/hero-${currentIndex}.mp4`;
  };

  useGSAP(
    () => {
      gsap.from(videoRef.current, {
        opacity: 0,
        width: 0,
        height: 0,
        duration: 1,
        ease: "power4.out",
      });
    },
    { dependencies: [currentIndex] },
  );

  useGSAP(() => {
    gsap.fromTo(
      containerRef.current,
      {
        clipPath: "polygon(100% 0%, 100% 100%, 0% 100%, 0% 0%)",
      },
      {
        clipPath: "polygon(66% 13%, 85% 91%, 12% 90%, 21% 12%)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "bottom 90%",
          end: "bottom center",
          scrub: 2,
        },
      },
    );
  }, []);

  return (
    <>
      <div className="z-1 w-screen h-screen relative" ref={containerRef}>
        <div
          className={
            styles["absolute-center"] +
            " z-11 opacity-0 w-30.75 h-30.75 cursor-pointer"
          }
          onClick={() => {
            setCurrentIndex((prev) => (prev === 4 ? 1 : prev + 1));
          }}
        >
          <video
            className="w-full h-full object-cover rounded-3xl"
            src={getSrc(currentIndex + 1 === 5 ? 1 : currentIndex + 1)}
            muted
          />
        </div>

        <video
          ref={videoRef}
          loop
          muted
          autoPlay
          src={getSrc(currentIndex)}
          className="w-screen h-screen object-cover z-1 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        ></video>

        <video
          src={getSrc(currentIndex)}
          className="w-full h-full object-cover absolute top-0 left-0 "
          muted
          loop
          autoPlay
        ></video>

        <div className="max-w-[40vw] absolute top-10 left-10 flex flex-col gap-5 z-10">
          <h1 className="font-special text-7xl md:text-9xl text-white ">
            Enter the Battlefield
          </h1>
          <p className="text-2xl text-white font-basic">
            Join millions of players in the most intense multiplayer shooter.
          </p>
          <Button>Play Now</Button>
        </div>

        <h1 className="z-10 font-special text-7xl md:9xl text-white absolute bottom-10 right-10">
          Gaming
        </h1>
      </div>
      <h1 className="font-special text-7xl md:9xl text-black absolute bottom-10 right-10">
        Gaming
      </h1>
    </>
  );
};

export default Hero;
