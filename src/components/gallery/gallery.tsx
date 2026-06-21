import GallaryItem from "../UI/gItem/gallaryItem";

const Gallery = () => {
  const cards: { title: string; path: number }[] = [
    {
      title: "Variety of games",
      path: 1,
    },
    {
      title: "Many characters",
      path: 2,
    },
    {
      title: "Last updated games",
      path: 3,
    },
    {
      title: "Interesting stories",
      path: 4,
    },
  ];

  return (
    <section className="p-10 bg-black flex flex-col justify-center items-center gap-10">
      <div>
        <span className="text-white md:text-2xl font-basic">
          Join our community. Relax and have fun
        </span>
      </div>
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-10 auto-rows-[350px] auto-cols-fr">
        {cards.map((card, index) => (
          <GallaryItem
            key={index}
            title={card.title}
            path={`videos/feature-${card.path}.mp4`}
            classes={
              index === 1 ? "md:row-span-2" : index === 0 ? "md:col-span-2" : ""
            }
          />
        ))}
        <section className="rounded-2xl relative bg-violet-500">
          <div className="absolute top-0 left-0 font-zentry m-5 text-3xl text-white">
            Gaming
          </div>
          <div className="absolute bottom-0 right-0 font-zentry m-5 text-3xl text-white">
            Lets play in different worlds
          </div>
        </section>
        <section className="rounded-2xl">
          <video
            src="videos/feature-5.mp4"
            autoPlay
            loop
            muted
            className="w-full h-full object-cover object-center"
          ></video>
        </section>
      </div>
    </section>
  );
};

export default Gallery;
