import React from "react";
import Style from "./showCaseProductsGrid.module.scss";
import SlideH1 from "../../assets/images/test.png";
import SlideH2 from "../../assets/images/ЭллиптическиеТренажеры.jpg";
import SlideH3 from "../../assets/images/Велотренажеры.jpg";
import SlideH4 from "../../assets/images/ГорнолыжныеТренажеры.jpg";
import SlideH5 from "../../assets/images/СиловыеТренажеры.jpg";
import SlideH6 from "../../assets/images/ГребныеТренажеры.jpg";
import SlideH7 from "../../assets/images/Батуты.jpg";
import SlideH8 from "../../assets/images/ИгровыеСтолы.jpg";
import SlideH9 from "../../assets/images/МассажныеКресла.jpg";
import SlideH10 from "../../assets/images/Фитнесс.jpg";
import SlideG1 from "../../assets/images/ПрофессиональныеКардиотренажеры.jpg";
import SlideG2 from "../../assets/images/ГрузоблочныеТренажеры.jpg";
import SlideG3 from "../../assets/images/ТренажерыСвободныеВеса.jpg";
import SlideG4 from "../../assets/images/ФункциональныйТренинг.jpg";
import SlideG5 from "../../assets/images/Wellness.jpg";
import SlideG6 from "../../assets/images/Реабилитация.jpg";
import SlideG7 from "../../assets/images/СвободныеВеса.jpg";
import LinkCustom from "../../elements/link/link";

const ShowCaseProductsGrid = (props) => {
  const imgH = [
    SlideH1,
    SlideH2,
    SlideH3,
    SlideH4,
    SlideH5,
    SlideH6,
    SlideH7,
    SlideH8,
    SlideH9,
    SlideH10,
  ];
  const imgG = [SlideG1, SlideG2, SlideG3, SlideG4, SlideG5, SlideG6, SlideG7];
  const nameH = [
    Style.slideH1,
    Style.slideH2,
    Style.slideH3,
    Style.slideH4,
    Style.slideH5,
    Style.slideH6,
    Style.slideH7,
    Style.slideH8,
    Style.slideH9,
    Style.slideH10,
  ];
  const nameG = [
    Style.slideG1,
    Style.slideG2,
    Style.slideG3,
    Style.slideG4,
    Style.slideG5,
    Style.slideG6,
    Style.slideG7,
  ];
  const textH = [
    "Беговые дорожки",
    "Эллиптические тренажеры",
    "Велотренажеры",
    "Горнолыжные тренажеры",
    "Силовые тренажеры",
    "Гребные тренажеры",
    "Батуты",
    "Игровые столы",
    "Массажные кресла",
    "Фитнес аксессуары",
  ];
  const textG = [
    "Профессиональные кардиотренажеры",
    "Грузоблочные тренажеры",
    "Тренажеры на свободных весах",
    "Функциональный тренинг",
    "Wellness, СПА, Массаж  ",
    "Спортивная медицина и реабилитация",
    "Свободные веса",
  ];
  return (
    <div className={props.order ? `padding ${Style.container}` : ` padding ${Style.container} ${Style.containerSmaller}`}>
      <div className={Style.title}>
        {props.order ? (
          <h2>Тренажеры для дома</h2>
        ) : (
          <h2>Тренажеры для фитнес клубов</h2>
        )}
      </div>
      <div className={props.order ? Style.gridContainer : `${Style.gridContainer} ${Style.gridContainerSmall}`}>
        {props.order
          ? imgH.map((item, index) => (
              <div key={index} className={`${nameH[index]} ${Style.grids}`}>
                <div className={Style.gridWrapper}>
                  <img src={item} alt="threadmill"></img>
                </div>
                <span className={Style.name}>{textH[index]}</span>
              </div>
            ))
          : imgG.map((item, index) => (
              <div key={index} className={`${nameG[index]} ${Style.grids}`}>
                <img src={item} alt="threadmill"></img>
                <span className={Style.name}>{textG[index]}</span>
              </div>
            ))}
      </div>
      <div className={Style.btn}>
        <LinkCustom redBorderEmptyMode={true} text={"Все категории"} />
      </div>
    </div>
  );
};

export default ShowCaseProductsGrid;
