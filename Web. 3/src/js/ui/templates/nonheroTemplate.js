export const createIllustrationTemplate = ({ alt, src }) => {
    const template = `
    <div class="non_hero_section_left">
            <img src="${src}" alt="${alt}">
        </div>
    `;

    return template;
};

export const createNonHeroRight = ({early,non_hero_header,header, title, href}) =>{
    const template = `
    <div class="non_hero_section_right">
            <h5 class="early">
            ${early}
            </h5>

            <h2 class="non_hero_header">
            ${non_hero_header}
            </h2>

            <p class="non_hero_container">
              ${header}
            </p>
            <a href="${href}" class="right__cta">${title}
            </a>
          </div>
    `;
    return template;
}


export const nonheroTemplate = ({illustration, non_hero_container}) => {

    const illustrationTemplate = createIllustrationTemplate(illustration);
  const nonherorightTemplate = createNonHeroRight (non_hero_container);
  

    const resultTemplate =   illustrationTemplate+ nonherorightTemplate ;
     
  
    return resultTemplate;
  };
