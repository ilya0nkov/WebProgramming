import { lastboxData } from "../mockData/lastboxData";
import GPT_icon from "../assets/img/GPT-3.svg";

const LastBox = () => {
  const { text_box_header, gpt_boxes, last_text } = lastboxData;

  return (
    <section className="last_box">
      <div className="main_last_box">
        <div className="text_box">
          <h6>{text_box_header.header}</h6>
        </div>
        <div className="btn_box">
          <a href={text_box_header.href}>
            <button className="main btn_last">{text_box_header.text}</button>
          </a>
        </div>
        <div className="GPT_box">
          <div className="Gpt_box_1">
            <img className="GPT_icon" src={GPT_icon} alt={gpt_boxes[0].alt} />
            
              <text_1>{gpt_boxes[0].text1}<br />{gpt_boxes[0].text2}<br />{gpt_boxes[0].text3}</text_1>
            
          </div>
          <div className="Gpt_box_2">
            <div>
              <text_2>{gpt_boxes[1].header}</text_2>
            </div>
            <div className="box_menu">
              <text_1 className="item__link">{gpt_boxes[1].text1}</text_1>
              <text_1 className="item__link">{gpt_boxes[1].text2}</text_1>
              <text_1 className="item__link">{gpt_boxes[1].text3}</text_1>
              <text_1 className="item__link">{gpt_boxes[1].text4}</text_1>
            </div>
          </div>
          <div className="Gpt_box_3">
            <div>
              <text_2>{gpt_boxes[2].header}</text_2>
            </div>
            <div className="box_menu">
              <text_1 className="item__link">{gpt_boxes[2].text1}</text_1>
              <text_1 className="item__link">{gpt_boxes[2].text2}</text_1>
              <text_1 className="item__link">{gpt_boxes[2].text3}</text_1>
            </div>
          </div>
          <div className="Gpt_box_4">
            <div>
              <text_2>{gpt_boxes[3].header}</text_2>
            </div>
            <div className="box_menu">
              <text_1>{gpt_boxes[3].text1}</text_1>
              <text_1>{gpt_boxes[3].text2}</text_1>
              <text_1>{gpt_boxes[3].text3}</text_1>
            </div>
          </div>
        </div>
        <div className="bottom_text_box">
          {last_text.text}
        </div>
      </div>
    </section>
  );
};

export default LastBox;
