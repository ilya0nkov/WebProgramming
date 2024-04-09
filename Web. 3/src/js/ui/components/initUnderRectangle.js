import { underrectangleData } from "../../mockData/underrectangleData.js";
import { underrectangleTemplate } from "../templates/underrectangleTemplate.js";

const initUnderRectangle = (element) => {
  const underrectangleNode = element.querySelector(".under_rectangle");

  underrectangleNode.insertAdjacentHTML("beforeend", underrectangleTemplate(underrectangleData));
};

export default initUnderRectangle;

