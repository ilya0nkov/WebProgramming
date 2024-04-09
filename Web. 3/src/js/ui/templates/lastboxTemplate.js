

export const createHeader = ({ header,href,text}) => {
    const template = `
    <div class="main_last_box">

            <div class="text_box"> 
              <h6>${header}</h6>
            </div>

            <div class="btn_box">
            <a href="${href}"><button class="main btn_last">${text}</button></a>
          </div>
          
    `;

    return template;
};

export const createGPTBox1 = ({alt, src, text1, text2, text3}) =>{
    const template = `
    <<div class="GPT_box">
    <div class="Gpt_box_1"> 
      <img class="GPT_icon" src="${src}" alt="${alt}" />
      <text_1>${text1}
      ${text2}
      ${text3}</text_1>
    </div>
    `;
    return template;
}
export const createGPTBox2 = ({header,href,text1,text2,text3,text4}) =>{
    const template = `
    <div class="Gpt_box_2">
                  <div><text_2>${header}</text_2></div>
                  <div class="box_menu">
                    <text_1 href="${href}" class="item__link">${text1}</text_1>
                    <text_1 href="${href}" class="item__link">${text2}</text_1>
                    <text_1 href="${href}" class="item__link">${text3}</text_1>
                    <text_1 href="${href}" class="item__link">${text4}</text_1>
                  </div>
              </div>
    `;
    return template;
}
export const createGPTBox3 = ({header,href,text1,text2,text3}) =>{
    const template = `
    <div class="Gpt_box_3"> 
                <div><text_2>${header}я</text_2></div>
                  <div class="box_menu">
                    <text_1 href="${href}" class="item__link">${text1}</text_1>
                    <text_1 href="${href}" class="item__link">${text2}</text_1>
                    <text_1 href="${href}" class="item__link">${text3}/text_1>
                  </div>
              </div>
    `;
    return template;
}
export const createGPTBox4 = ({header,text1,text2,text3}) =>{
    const template = `
    <div class="Gpt_box_4"> 
                <div><text_2>${header}</text_2></div>
                  <div class="box_menu">
                    <text_3>${text1}</text_3>
                    <text_1>${text2}</text_1>
                    <text_1>${text3}</text_1>
                  </div>
              </div>
              </div>
    `;
    return template;
}
export const createLastText = ({text}) =>{
    const template = `
    
    <div class="bottom_text_box">
              ${text}
            </div>
          </div>
          
          `;
          return template;
}

export const lastboxTemplate = ({text_box_header, gpt_box_1,gpt_box_2,gpt_box_3,gpt_box_4, last_text,}) => {

    const headerTemplate = createHeader(text_box_header,);
  const GPTBox1Template = createGPTBox1 (gpt_box_1,);
  const GPTBox2Template = createGPTBox2 (gpt_box_2,);
  const GPTBox3Template = createGPTBox3 (gpt_box_3,);
  const GPTBox4Template = createGPTBox4 (gpt_box_4,);
  const LastTextTemplate1 = createLastText ( last_text,);


    const resultTemplate =  headerTemplate + GPTBox1Template +GPTBox2Template +GPTBox3Template +GPTBox4Template + LastTextTemplate1 ;
     
    return resultTemplate;
  };