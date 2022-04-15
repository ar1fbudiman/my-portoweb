import Image from "next/image";
import profilePic from "../../assets/images/arif-budiman.png";
import Waves from "../../assets/svgs/waves";

const HeroSectionComponent = () => {
  return (
    <div>
      <section id="home" className="pt-36">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full self-center px-4 lg:w-1/2">
              <h1 className="text-base font-semibold text-primary md:text-xl">
                Hello folks!, I am{" "}
                <span className="block font-bold text-dark text-4xl lg:text-5xl">
                  Arif Budiman
                </span>
                <h2 className="font-medium text-lg mb-5 text-slate-600 lg:text-2xl">
                  Software Engineer / Frontend Enthusiast / Freelancer
                </h2>
                <p className="text-base text-dark mb-10 leading-relaxed">
                  I love explore anything, especially at programming. I have
                  experience at planning, development and maintaining web/mobile
                  applications with various programming frameworks.
                </p>
                <a
                  href="#"
                  className="text-base font-semibold text-white bg-primary py-3 px-5 rounded-lg hover:shadow-lg hover:opacity-70 transition-opacity duration-300 ease-in-out"
                >
                  Get in touch!
                </a>
              </h1>
            </div>
            <div className="w-full self-end px-4 lg:w-1/2">
              <div className="relative mt-10 md:mt-0 md:right-0 lg:mt-0 lg:right-0">
                <Image
                  src={profilePic}
                  alt="arif-budiman-pict"
                  className="max-w-full mx-auto"
                />
                <span className="absolute bottom-0 -left-5 -z-10 md:scale-125 md:left-10 lg:bottom-10 lg:left-20 lg:scale-150">
                  <svg
                    width={350}
                    height={350}
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#3B82F6"
                      d="M60.1,-60.8C74.6,-45.5,81,-22.8,76.2,-4.7C71.5,13.3,55.7,26.6,41.1,37.1C26.6,47.6,13.3,55.3,-2.7,58C-18.7,60.8,-37.5,58.5,-49.8,48C-62.2,37.5,-68.1,18.7,-64.9,3.2C-61.7,-12.3,-49.4,-24.7,-37,-39.9C-24.7,-55.2,-12.3,-73.4,5.2,-78.6C22.8,-83.8,45.5,-76.1,60.1,-60.8Z"
                      transform="translate(100 100) scale(1.2)"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSectionComponent;
