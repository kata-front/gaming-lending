import { useState, type MouseEvent } from "react";

const GalleryItem: React.FC<{
  title: string;
  path: string;
  classes: string;
}> = ({ title, path, classes }) => {
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [isHover, setIsHover] = useState(false);

  const handleMouseMove = (e: MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xPercent = (x / rect.width - 0.5) * 2;
    const yPercent = (y / rect.height - 0.5) * 2;
    const maxTilt = 12;
    setTilt({ rotateX: -yPercent * maxTilt, rotateY: xPercent * maxTilt });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
    setIsHover(false);
  };

  return (
    <div
      className={`tilt-container ${classes}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: "1000px" }}
    >
      <div
        className="tilt-inner relative overflow-hidden rounded-xl w-full h-full"
        style={{
          transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
          transition: isHover ? "none" : "transform 0.3s ease-out",
          willChange: "transform",
        }}
      >
        <video
          src={path}
          autoPlay
          loop
          muted
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 p-4">
          <h3 className="text-white">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default GalleryItem;
