import { useRef, useState } from "react";
import styles from "./hero.module.scss";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Button from "../UI/button/button";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(1);
  const videoContRef = useRef<HTMLDivElement>(null);

  const getSrc = (currentIndex: number) => {
    return `videos/hero-${currentIndex}.mp4`;
  };

  return (
    <div className="w-screen h-screen relative">
      <div
        className={
          styles["absolute-center"] +
          " z-10 opacity-0 w-30.75 h-30.75 cursor-pointer"
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

      <div className="w-screen h-screen" ref={videoContRef}>
        <video
          loop
          muted
          autoPlay
          src={getSrc(currentIndex)}
          className="w-full h-full object-cover"
        ></video>
      </div>

      <div className="max-w-[40vw] absolute top-10 left-10 flex flex-col gap-5">
        <h1 className="font-special text-9xl text-white">
          Enter the Battlefield
        </h1>
        <p className="text-2xl text-white font-basic">
          Join millions of players in the most intense multiplayer shooter.
          Customize your loadout, dominate the arena.
        </p>
        <Button>Play Now</Button>
      </div>

      <h1 className="font-special text-9xl text-white absolute bottom-10 right-10">
        Gaming
      </h1>
    </div>
  );
};

export default Hero;
