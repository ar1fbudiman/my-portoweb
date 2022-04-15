import type { NextPage } from "next";
import {
  AboutSectionComponent,
  HeroSectionComponent,
} from "../components/home";

const Home: NextPage = () => {
  return (
    <div className="">
      <HeroSectionComponent />
      <AboutSectionComponent />
    </div>
  );
};

export default Home;
