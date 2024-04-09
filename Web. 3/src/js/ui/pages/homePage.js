import initHeader from "./../components/initHeader.js";
import initHero from "./../components/initHero.js";
import initBrands from "./../components/initBrands.js";
import initWhatIsGpt from "./../components/initWhatIsGpt.js";
import initFutureHere from "./../components/initFutureHere.js";

//
import initNonHero from "./../components/initNonHero.js";
import initRectangle from "./../components/initRectangle.js";
import initUnderRectangle from "./../components/initUnderRectangle.js";
import initLastBox from "./../components/initLastBox.js";
//

import initBurger from "./../components/initBurger.js";


const initHomePage = (element) => {
  const template = `
    <section class="section header"></section>
    <section class="section hero_section"></section>
    <section class="section brands_section"></section>
    <section class="section what_is_chatgpt_section"></section>
    <section class="section future_here"></section>

    
    <section class="section non_hero_section"></section>
    <section class="Rectangle_main"></section>
    <section class="under_rectangle"></section>
    <section class="last_box"></section>
  `;

  element.insertAdjacentHTML("beforeend", template);
};

const rootNode = document.querySelector("#root");
// const rootNode2 = document.querySelector("#root2");

const homePage = () => {
  // инициализация элементов Главной страницы
  initHomePage(rootNode);
  // initHomePage(rootNode2);

  // инициализация шапки страницы с мок датой
  initHeader(rootNode);
  // initHeader(rootNode2);

  // инициализация хиро раздела
  initHero(rootNode);
  // initHero(rootNode2);

  // инициализация хиро раздела
  initBrands();

  // инициализация хиро раздела
  initWhatIsGpt();

  // инициализация раздела "Будущее наступило" с мок датой
  initFutureHere();

  initNonHero(rootNode);

  initRectangle(rootNode);
  
  initUnderRectangle(rootNode);

  initLastBox(rootNode);
  // инициализация бургера для адаптивного меню
  initBurger();
};

export default homePage;
