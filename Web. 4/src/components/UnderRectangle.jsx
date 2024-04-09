
import { underrectangleData } from "../mockData/underrectangleData";

import mainBoxImage from "../assets/img/box_main.svg";
import box1Image from "../assets/img/box1.svg";
import box2Image from "../assets/img/box2.svg";
import box3Image from "../assets/img/box_3.svg";
import box4Image from "../assets/img/box_4.svg";



const UnderRectangleSection = () => {
  const { header: boxHeader } = underrectangleData.box_header;
  const { src: mainBoxSrc, alt: mainBoxAlt, ...mainBoxData } = underrectangleData.mainBox;
  const secondaryBoxesData = underrectangleData.secondaryBoxes;

  const secondaryBoxImages = [box1Image, box2Image, box3Image, box4Image];

  return (
    <section className="under_rectangle">
      <div className="box_header">
        <h6>{boxHeader}</h6>
      </div>
      <div className="boxes">
        <div className="main_box">
          <img src={mainBoxImage} alt={mainBoxAlt} />
          <div className="text_main_box">
            <hm_b className="head_box">{mainBoxData.header}</hm_b>
            <ht_b className="htext_box">{mainBoxData.content}</ht_b>
            <a href={mainBoxData.href}>
              <hb_b className="bottom_box">{mainBoxData.textbox}</hb_b>
            </a>
          </div>
        </div>
        <div className="secondary_boxes">
          {secondaryBoxesData.map((boxData, index) => (
            <div key={index} className={`box${index + 1}_text`}>
              <img src={secondaryBoxImages[index]} alt={boxData.alt} />
              <div className={`box${index + 1}`}>
                <hm_b className="head_box">{boxData.header}</hm_b>
                <ht_sb className="htext_box">{boxData.content}</ht_sb>
                <a href={boxData.href}>
                  <hb_b className="bottom_box">{boxData.textbox}</hb_b>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UnderRectangleSection;

