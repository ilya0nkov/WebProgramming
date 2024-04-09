import Header from "../components/Header";
import Hero from "../components/Hero";
import Brands from "../components/Brands";
import WhatIsChatGpt from "../components/WhatIsChatGpt";
import FutureHere from "../components/FutureHere";
import NonHero from "../components/NonHero";
import Rectangle from "../components/Rectangle";
import UnderRectangle from "../components/UnderRectangle";
import LastBox from "../components/LastBox";

const Home = () => {
  return (
    <>
      <section className="section header">
        <Header />
      </section>
      <section className="section hero_section">
        <Hero />
      </section>
      <section className="section brands_section">
        <Brands />
      </section>
      <section className="section what_is_chatgpt_section">
        <WhatIsChatGpt />
      </section>
      <section className="section future_here">
        <FutureHere />
      </section>
      <section class="section non_hero_section">
        <NonHero />
      </section>
      <section class="Rectangle_main">
        <Rectangle />
      </section>
      <section class="under_rectangle">
        <UnderRectangle/>
      </section>
      <section class="last_box">
        <LastBox/>
      </section>
    </>
  );
};

export default Home;
