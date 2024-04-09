import { nonheroData } from "../../mockData/nonheroData.js";
import { nonheroTemplate } from "../templates/nonheroTemplate.js";

const noninitHero = (element) => {
  const nonheroNode = element.querySelector(".non_hero_section");

  nonheroNode.insertAdjacentHTML("beforeend", nonheroTemplate(nonheroData));
};

export default noninitHero;
