const TitleSectionComponent = ({ title }: { title: string }) => {
  return (
    <div className="w-full relative px-4 self-center sm:w-full">
      <h1 className="text-center uppercase font-bold text-primary text-2xl">
        {title}
      </h1>
      <h1 className="absolute w-full uppercase -bottom-0 -z-10 text-center text-bold text-blue-400 text-5xl tracking-widest opacity-20 font-staatliches">
        {title}
      </h1>
    </div>
  );
};

export default TitleSectionComponent;
