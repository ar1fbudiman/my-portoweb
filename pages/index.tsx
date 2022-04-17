import type { NextPage } from "next";
import {
  AboutSectionComponent,
  HeroSectionComponent,
  NavigationBarComponent,
} from "../components/home";

const Home: NextPage = () => {
  return (
    <div className="">
      <NavigationBarComponent />
      <HeroSectionComponent />
      <AboutSectionComponent />
    </div>
  );
};

export default Home;
