export const createLeftbox = ({ header, title }) => {
    const template = `
    <div class="rectangle_left"> 
            <rech>${header}</rech>
            <recp>${title}</recp>
          </div>
    `;

    return template;
};

export const createRightbox = ({ href, title}) =>{
    const template = `
    <div class="rectangle_right">
            <a href="${href}"> <button class="main btn_rectangle">${title}</button></a>
          </div>
    `;
    return template;
}


export const rectangleTemplate = ({rectangle_left, rectangle_right}) => {

    const leftboxTemplate = createLeftbox(rectangle_left);
    const rightboxTemplate = createRightbox (rectangle_right);
  

    const resultTemplate =   leftboxTemplate + rightboxTemplate ;
     
  
    return resultTemplate;
  };
