import TitleSectionComponent from "./TitleSectionComponent";

const AboutSectionComponent = () => {
  return (
    <div>
      <section id="about" className="pt-36 pb-32">
        <div className="container">
          <div className="flex flex-wrap">
            <TitleSectionComponent title="About Me" />
            <div className="w-full mt-5 mb-5  px-4">
              <h2 className="text-primary text-lg font-bold">
                A glimpse of me
              </h2>
              <p className="text-base text-dark leading-relaxed">
                Software engineer at CODINGLAB.ID with more than 3 years
                experience currently. Have skilled in front end framework,
                development of create a single page applications and back end
                framework, development of create RestAPI. Have built and
                delivered with more than 20 applications (Website/Mobile) to
                various clients like for personal purpose, private company,
                regional-owned, etc and have been used by more than 5 thousands
                users.
              </p>
            </div>
            <div className="w-full px-4">
              <h2 className="text-primary text-lg font-bold">
                Let&apos;s connect and talk!
              </h2>
              <p className="text-base text-dark leading-relaxed">
                Feel free to discuss about programming, project, music, football
                or anything from any social media accounts.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSectionComponent;
