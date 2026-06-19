import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Navbar = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlayedMusic, setIsPlayedMusic] = useState<boolean>(false);

  const navbarRef = useRef<HTMLDivElement>(null);

  const [isTop, setIsTop] = useState<boolean>(true);
  const [isVisibleNav, setIsVisibleNav] = useState<boolean>(true);
  const links: { title: string; path: string }[] = [
    {
      title: "Home",
      path: "#",
    },
    {
      title: "About",
      path: "#",
    },
    {
      title: "Contact",
      path: "#",
    },
  ];

  useEffect(() => {
    if (isPlayedMusic) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  }, [isPlayedMusic]);

  useEffect(() => {
    let lastScroll = window.scrollY;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > lastScroll) {
        setIsVisibleNav(false);
      } else if (scrollPosition < lastScroll) {
        setIsVisibleNav(true);
      }

      setIsTop(scrollPosition === 0);

      lastScroll = scrollPosition;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    gsap.to(navbarRef.current, {
      opacity: isVisibleNav ? 1 : 0,
      yPercent: isVisibleNav ? 0 : -100,
      duration: 0.5,
      ease: "power1.inOut",
    });
  }, [isVisibleNav]);

  return (
    <header
      ref={navbarRef}
      className={`rounded-2xl h-14 p-2 fixed top-4 left-4 right-4 z-1000 transition-bg duration-300 ${isTop ? "bg-transparent" : "bg-bg-dark"}`}
    >
      <nav className="w-full h-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src="img/logo.png"
            alt="logo"
            className="w-8 h-8 object-contain"
          />
          <span className="text-white font-basic font-bold tracking-normal">
            GSpace
          </span>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4">
            {links.map((link) => (
              <a
                key={link.title}
                href={link.path}
                className="relative text-white font-basic 
                after:content-[''] 
                after:absolute 
                after:bottom-0 
                after:left-0 
                after:w-0 
                after:h-0.5 
                after:bg-white 
                after:transition-all 
                after:duration-300 
                hover:after:w-full"
              >
                {link.title}
              </a>
            ))}
          </div>
          <div>
            <audio ref={audioRef} src="audio/loop.mp3" loop />
            <div
              className="cursor-pointer flex items-center gap-1"
              onClick={() => setIsPlayedMusic(!isPlayedMusic)}
            >
              <div
                className={`bg-white w-1 h-5 ${isPlayedMusic ? "animation-wave" : ""}`}
                style={{ animationDelay: "0.1s" }}
              ></div>
              <div
                className={`bg-white w-1 h-5 ${isPlayedMusic ? "animation-wave" : ""}`}
                style={{ animationDelay: "0.3s" }}
              ></div>
              <div
                className={`bg-white w-1 h-5 ${isPlayedMusic ? "animation-wave" : ""}`}
                style={{ animationDelay: "0.5s" }}
              ></div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
