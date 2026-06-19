import { useRef, useState } from "react";
import styles from "./hero.module.scss";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Button from "../UI/button/button";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(1);
  const nextVideoRef = useRef<HTMLVideoElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const totalVideos = 4;

  const getSrc = (currentIndex: number) => {
    return `videos/hero-${currentIndex}.mp4`;
  };

  useGSAP(
    () => {
      // gsap.from(nextVideoRef.current, {
      //   transformOrigin: "center center",
      //   scale: 0,
      //   width: '100%',
      //   height: '100%',
      //   duration: 1,
      //   ease: "power1.inOut",
      // })

      gsap.from(videoRef.current, {
        transformOrigin: "center center",
        scale: 0,
        duration: 1,
        ease: "power4.out",
      });
    },
    { dependencies: [currentIndex] },
  );

  useGSAP(() => {
    gsap.set(containerRef.current, {
      clipPath: "polygon(100% 0%, 100% 100%, 0% 100%, 0% 0%)",
    });

    gsap.to(containerRef.current, {
      clipPath: "polygon(69% 6%, 91% 93%, 0% 100%, 12% 6%)",
      borderRadius: '25px',
      scrollTrigger: {
        trigger: containerRef.current,
        start: "bottom 90%",
        end: "bottom center",
        scrub: 2,
      },
    });
  }, []);

  return (
    <>
      <div className="z-1 w-screen h-screen relative" ref={containerRef}>
        <div className="w-screen h-screen relative">
          <div
            className={
              styles["absolute-center"] +
              " overflow-hidden rounded-3xl z-11 w-30.75 h-30.75 cursor-pointer scale-100 opacity-0 transition-all duration-300 hover:opacity-100 hover:scale-150"
            }
            onClick={() => {
              setCurrentIndex((prev) => (prev === totalVideos ? 1 : prev + 1));
            }}
          >
            <video
              ref={nextVideoRef}
              className="size-full object-cover object-center transition-all duration-700 hover:scale-150"
              src={getSrc(
                currentIndex + 1 === totalVideos + 1 ? 1 : currentIndex + 1,
              )}
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

          <div className="max-w-[40vw] absolute top-15 left-10 flex flex-col gap-5 z-10">
            <h1 className="font-special text-7xl md:text-9xl text-white ">
              Start
            </h1>
            <p className="text-2xl text-white font-basic">
              Join millions of players in the most intense multiplayer shooter.
            </p>
            <Button leftIconPath="img/play.svg">Play Now</Button>
          </div>

          <h1 className="z-10 font-special text-7xl md:text-9xl text-white absolute bottom-10 right-10">
            Gaming
          </h1>
        </div>
      </div>
      <h1 className="font-special text-7xl md:text-9xl text-black absolute bottom-10 right-10">
        Gaming
      </h1>
    </>
  );
};

export default Hero;
