import { nonheroData } from "../mockData/nonheroData";

import Illustration from "../assets/img/Feature Image.svg";

const NonHeroSection = () => {

    const { early,alt , non_hero_header, header, href, title } = nonheroData.non_hero_container;
  
    return (
      <section className="section non_hero_section">
        <div className="non_hero_section_left">
          <img src={Illustration} alt={alt} />
        </div>
        <div className="non_hero_section_right">
          <h5 className="early">{early}</h5>
          <h2 className="non_hero_header">{non_hero_header}</h2>
          <p className="non_hero_container">{header}</p>
          <a href={href} className="right__cta">{title}</a>
        </div>
      </section>
    );
  };
  
  export default NonHeroSection;