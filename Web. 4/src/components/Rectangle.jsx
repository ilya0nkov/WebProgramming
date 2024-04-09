
import { rectangleData } from "../mockData/rectangleData";

const RectangleMainSection = () => {
  const { header, title } = rectangleData.rectangle_left;
  const { href, buttomtitle } = rectangleData.rectangle_right;

  return (
    <section className="Rectangle_main">
      <div className="rectangle_left"> 
        <rech>{header}</rech>
        <recp>{title}</recp>
      </div>
      <div className="rectangle_right">
        <a href={href}>
          <button className="main btn_rectangle">{buttomtitle}</button>
        </a>
      </div>
    </section>
  );
};

export default RectangleMainSection;
