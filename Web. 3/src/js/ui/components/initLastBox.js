import { lastboxData } from "../../mockData/lastboxData.js";
import { lastboxTemplate } from "../templates/lastboxTemplate.js";

const initLastBox = (element) => {
  const lastboxNode = element.querySelector(".last_box");

  lastboxNode.insertAdjacentHTML("beforeend", lastboxTemplate(lastboxData));
};

export default initLastBox;

