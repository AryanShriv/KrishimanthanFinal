import "../App.css";
import Carousel from "../Components/Carousel/Carousel";
import Main from "../Components/Main-News/Main";
import Adv from "../Components/Adv/Adv";
import Adv2 from "../Components/Adv/Adv2";
import LocalNews from "../Components/LocalNews/LocalNews"
import NationalNews from "../Components/NationalNews/NationalNews"
import AboutUs from "../Components/AboutUs/AboutUs";

function Home() {
  return (
    <div>
      <Carousel />
      <div className="center-desktop">
      <AboutUs/>
        <Main />
        <Adv />
        <NationalNews />
        <Adv2 />
        <LocalNews />
      </div>
    </div>
  );
}

export default Home;


