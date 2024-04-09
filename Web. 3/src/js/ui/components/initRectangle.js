import { rectangleData } from "../../mockData/rectangleData.js";
import { rectangleTemplate } from "../templates/rectangleTemplate.js";

const initRectangle = (element) => {
  const rectangleNode = element.querySelector(".Rectangle_main");

  rectangleNode.insertAdjacentHTML("beforeend", rectangleTemplate(rectangleData));
};

export default initRectangle;
