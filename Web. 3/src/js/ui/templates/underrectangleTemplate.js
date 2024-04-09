export const createHeader = ({ header}) => {
    const template = `
    <div class="box_header">
            <h6>${header}</h6>
          </div>
    `;

    return template;
};

export const createMainBox = ({alt, src, header, content, textbox, href}) =>{
    const template = `
    <div class="boxes">
    <div class="main_box">
              <img src="${src}" alt="${alt}">
              <div class="text_main_box">

                <hm_b class="head_box">${header}</hm_b>
                <ht_b class="htext_box">${content}</ht_b>
                <a href="${href}"><hb_b class="bottom_box">${textbox}</hb_b></a>
              </div>
            </div>
    `;
    return template;
}

export const createSeconderyBox1 = ({alt, src, header, content, textbox, href}) =>{
    const template = `
    <div class="secondary_boxes">
    <div class="box1_text">
                <img src="${src}" alt="${alt}">
                <div class="box1">
                  <hm_b class="head_box">${header}</hm_b>
                  <ht_sb class="htext_box">${content}</ht_sb>
                  <a href="${href}"><hb_b class="bottom_box">${textbox}</hb_b></a>
                </div>
              </div>

    `;
    return template;
}
export const createSeconderyBox2 = ({alt, src, header, content, textbox, href}) =>{
    const template = `
    <div class="box2_text">
                <img src="${src}" alt="${alt}">
                <div class="box2">
                  <hm_b class="head_box">${header}</hm_b>
                  <ht_sb class="htext_box">${content}</ht_sb>
                  <a href="${href}"><hb_b class="bottom_box">${textbox}</hb_b></a>
                </div>
              </div>
    `;
    return template;
}
export const createSeconderyBox3 = ({alt, src, header, content, textbox, href}) =>{
    const template = `
    <div class="box3_text">
                <img src="${src}" alt="${alt}">
                <div class="box3">
                  <hm_b class="head_box">${header}</hm_b>
                  <ht_sb class="htext_box">${content}</ht_sb>
                  <a href="${href}"><hb_b class="bottom_box">${textbox}</hb_b></a>
                </div>
              </div>
    `;
    return template;
}
export const createSeconderyBox4 = ({alt, src, header, content, textbox, href}) =>{
    const template = `
    <div class="box4_text">
                <img src="${src}" alt="${alt}">
                <div class="box4">
                  <hm_b class="head_box">${header}</hm_b>
                  <ht_sb class="htext_box">${content}</ht_sb>
                  <a href="${href}"><hb_b class="bottom_box">${textbox}</hb_b></a>
                </div>
              </div>
              </div>
              </div>
              
    `;
    return template;
}

export const underrectangleTemplate = ({box_header, main_box, secondary_boxes1,secondary_boxes2,secondary_boxes3,secondary_boxes4,}) => {

    const headerTemplate = createHeader(box_header,);
  const mainboxTemplate = createMainBox (main_box,);
  const seconderyboxTemplate1 = createSeconderyBox1 ( secondary_boxes1,);
  const seconderyboxTemplate2 = createSeconderyBox2 ( secondary_boxes2,);
  const seconderyboxTemplate3 = createSeconderyBox3 ( secondary_boxes3,);
  const seconderyboxTemplate4 = createSeconderyBox4 ( secondary_boxes4,);

    const resultTemplate =   headerTemplate + mainboxTemplate + seconderyboxTemplate1 + seconderyboxTemplate2 + seconderyboxTemplate3 + seconderyboxTemplate4;
     
    return resultTemplate;
  };
