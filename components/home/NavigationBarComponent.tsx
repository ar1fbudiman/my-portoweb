import { useState } from "react";

const NavigationBarComponent = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="bg-primary shadow-md fixed top-0 left-0 w-full z-10">
      <div className="flex flex-col lg:flex-row">
        <div className="flex justify-between items-center px-5 py-5 lg:py-0 border-b lg:border-b-0">
          <div>
            <a href="#" className="text-white text-lg font-semibold">
              arifbudiman
            </a>
          </div>
          <div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none text-white block lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  className={`${
                    !isOpen ? "block" : "hidden"
                  } transition duration-200 ease-in`}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
                <path
                  className={`${
                    isOpen ? "block" : "hidden"
                  } transition duration-200 ease-out`}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        <div
          className={`${
            isOpen ? "top-[69px] opacity-100" : "top-[-500px] opacity-0 "
          } absolute lg:opacity-100 lg:top-0 lg:z-auto lg:static bg-primary flex-col lg:flex-row lg:flex justify-start lg:justify-end w-full py-4 lg:py-0 transition-all duration-500 ease-in-out`}
        >
          <a
            href="#"
            className="block font-semibold tracking-wide px-5 py-3 lg:py-5 text-base text-white hover:text-dark"
          >
            Home
          </a>
          <a
            href="#"
            className="block font-semibold tracking-wide px-5 py-3 lg:py-5 text-base text-white hover:text-dark"
          >
            About
          </a>
          <a
            href="#"
            className="block font-semibold tracking-wide px-5 py-3 lg:py-5 text-base text-white hover:text-dark"
          >
            Portofolio
          </a>
          <a
            href="#"
            className="block font-semibold tracking-wide px-5 py-3 lg:py-5 text-base text-white hover:text-dark"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavigationBarComponent;
