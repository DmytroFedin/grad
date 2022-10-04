import React from "react";
import Path from "../routes/menuItem";
import { NavLink} from "react-router-dom";
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import Style from './breadcrumbs.module.scss'


// map & render your breadcrumb components however you want.
export const Breadcrumbs = (props) => {
  // const DynamicUserBreadcrumb = () => (
  //   <span>{props.id.title.replace(/[\w]{24}/g,'')}</span>
  // );
  
  // const Path = [
  //   {
  //     id:1,
  //     path: "/Gym-equipment",
  //     breadcrumb: "Для фитнес клубов",
  //   },
  //   {
  //     id:1,
  //     path: "/Gym-equipment/Cardio",
  //     breadcrumb: "Кардиотренажеры",
  //   },
  //   {
  //     id:1.1,
  //     path: "/Gym-equipment/Cardio/Thredmills",
  //     breadcrumb: "Беговые дорожки",
  //   },
  //   {
  //     path: `/Gym-equipment/Cardio/Thredmills/:title`,
  //     breadcrumb: DynamicUserBreadcrumb ,
  //   },
  //   {
  //     id:1,
  //     path: "/Gym-equipment/Cardio/EllipticalTrainers",
  //     breadcrumb: "Эллиптические тренажеры",
  //   },
  //   {
  //     id:1,
  //     path: "/Gym-equipment/Cardio/Exercycle",
  //     breadcrumb: "Велотренажеры",
  //   },
  //   {
  //     id:1,
  //     path: "/Gym-equipment/Cardio/Ladders&Steppers",
  //     breadcrumb: "Cтепперы",
  //   },
  //   {
  //     id:1,
  //     path: "/Gym-equipment/Cardio/RowingMachines",
  //     breadcrumb: "Гребные тренажеры",
  //   },
  //   { id:1,
  //     path: "/Gym-equipment/Cardio/Cycling", 
  //     breadcrumb: "Сайклинг" },
  //   {
  //     id:1,
  //     path: "/Gym-equipment/Cardio/SkiSimulator",
  //     breadcrumb: "Горнолыжные тренажеры",
  //   },
  
  //   {
  //     id:1,
  //     path: "/Gym-equipment/PowerTraining",
  //     breadcrumb: "Силовые тренажеры",
  //   },
  //   {
  //     id:1,
  //     path: "/Gym-equipment/Cardio/Thredmills",
  //     breadcrumb: "Беговые дорожки",
  //   },
  //   {
  //     id:1,
  //     path: "/Gym-equipment/Cardio/EllipticalTrainers",
  //     breadcrumb: "Эллиптические тренажеры",
  //   },
  //   {
  //     id:1,
  //     path: "/Gym-equipment/Cardio/Exercycle",
  //     breadcrumb: "Велотренажеры",
  //   },
  //   {
  //     id:1,
  //     path: "/Gym-equipment/Cardio/Ladders&Steppers",
  //     breadcrumb: "Cтепперы",
  //   },
  //   {
  //     id:1,
  //     path: "/Gym-equipment/Cardio/RowingMachines",
  //     breadcrumb: "Гребные тренажеры",
  //   },
  //   { 
  //     id:1,
  //     path: "/Gym-equipment/Cardio/Cycling", 
  //     breadcrumb: "Сайклинг" },
  //   {
  //     id:1,
  //     path: "/Gym-equipment/Cardio/SkiSimulator",
  //     breadcrumb: "Горнолыжные тренажеры",
  //   },
  //   // "Мультистанции ", "Рамы и комплексы", "Скамьи"
  
  //   {
  //     id:1,
  //     path: "/Gym-equipment/FunctionalTraining",
  //     breadcrumb: "Функциональный тренинг",
  //   },
  //   {
  //     id:1,
  //     path: "/Gym-equipment/Cardio/Thredmills",
  //     breadcrumb: "Беговые дорожки",
  //   },
  //   {
  //     id:1,
  //     path: "/Gym-equipment/Cardio/EllipticalTrainers",
  //     breadcrumb: "Эллиптические тренажеры",
  //   },
  //   {
  //     id:1,
  //     path: "/Gym-equipment/Cardio/Exercycle",
  //     breadcrumb: "Велотренажеры",
  //   },
  //   {
  //     id:1,
  //     path: "/Gym-equipment/Cardio/Ladders&Steppers",
  //     breadcrumb: "Cтепперы",
  //   },
  //   {
  //     id:1,
  //     path: "/Gym-equipment/Cardio/RowingMachines",
  //     breadcrumb: "Гребные тренажеры",
  //   id:1,},
  
  //   { path: "/Gym-equipment/Cardio/Cycling", breadcrumb: "Сайклинг" },
  //   {
  //     id:1,
  //     path: "/Gym-equipment/Cardio/SkiSimulator",
  //     breadcrumb: "Горнолыжные тренажеры",
  //   },
  //   // "Комплексы для ФТ", "Горнолыжные тренажеры", "Slide&FIT"
  
  //   {
  //     id:1,
  //     path: "/Gym-equipment/FreeWeights",
  //     breadcrumb: "Свободные веса",
  //   },
  //   {
  //     id:1,
  //     path: "/Gym-equipment/Cardio/Thredmills",
  //     breadcrumb: "Беговые дорожки",
  //   },
  //   {
  //     id:1,
  //     path: "/Gym-equipment/Cardio/EllipticalTrainers",
  //     breadcrumb: "Эллиптические тренажеры",
  //   },
  //   {
  //     id:1,
  //     path: "/Gym-equipment/Cardio/Exercycle",
  //     breadcrumb: "Велотренажеры",
  //   },
  //   {
  //     id:1,
  //     path: "/Gym-equipment/Cardio/Ladders&Steppers",
  //     breadcrumb: "Cтепперы",
  //   },
  //   {
  //     id:1,
  //     path: "/Gym-equipment/Cardio/RowingMachines",
  //     breadcrumb: "Гребные тренажеры",
  //   id:1,},
  
  //   { path: "/Gym-equipment/Cardio/Cycling", breadcrumb: "Сайклинг" },
  //   {
  //     id:1,
  //     path: "/Gym-equipment/Cardio/SkiSimulator",
  //     breadcrumb: "Горнолыжные тренажеры",
  //   },
  //   // "Гантели и гантельные ряды", "Гири", "Диски и грифы", "Стойки и хранение"
  
  //   {
  //     id:1,
  //     path: "/Gym-equipment/Aerobics",
  //     breadcrumb: "Аэробика",
  //   },
  //   {
  //     id:1,
  //     path: "/Gym-equipment/Cardio/Thredmills",
  //     breadcrumb: "Беговые дорожки",
  //   },
  //   {
  //     id:1,
  //     path: "/Gym-equipment/Cardio/EllipticalTrainers",
  //     breadcrumb: "Эллиптические тренажеры",
  //   },
  //   {
  //     id:1,
  //     path: "/Gym-equipment/Cardio/Exercycle",
  //     breadcrumb: "Велотренажеры",
  //   },
  //   {
  //     id:1,
  //     path: "/Gym-equipment/Cardio/Ladders&Steppers",
  //     breadcrumb: "Cтепперы",
  //   },
  //   {
  //     id:1,
  //     path: "/Gym-equipment/Cardio/RowingMachines",
  //     breadcrumb: "Гребные тренажеры",
  //   id:1,},
  
  //   { path: "/Gym-equipment/Cardio/Cycling", breadcrumb: "Сайклинг" },
  //   {
  //     id:1,
  //     path: "/Gym-equipment/Cardio/SkiSimulator",
  //     breadcrumb: "Горнолыжные тренажеры",
  //   },
  //   // "Аэробика", "Для групповых программ", "Для персонального тренинга"
  
  //   {
  //     id:1,
  //     path: "/Gym-equipment/Welness",
  //     breadcrumb: "Wellness, СПА, массаж",
  //   },
  //   {
  //     id:1,
  //     path: "/Gym-equipment/Cardio/Thredmills",
  //     breadcrumb: "Беговые дорожки",
  //   },
  //   {
  //     id:1,
  //     path: "/Gym-equipment/Cardio/EllipticalTrainers",
  //     breadcrumb: "Эллиптические тренажеры",
  //   },
  //   {
  //     id:1,
  //     path: "/Gym-equipment/Cardio/Exercycle",
  //     breadcrumb: "Велотренажеры",
  //   },
  //   {
  //     id:1,
  //     path: "/Gym-equipment/Cardio/Ladders&Steppers",
  //     breadcrumb: "Cтепперы",
  //   },
  //   {
  //     id:1,
  //     path: "/Gym-equipment/Cardio/RowingMachines",
  //     breadcrumb: "Гребные тренажеры",
  //   id:1,},
  
  //   { path: "/Gym-equipment/Cardio/Cycling", breadcrumb: "Сайклинг" },
  //   {
  //     id:1,
  //     path: "/Gym-equipment/Cardio/SkiSimulator",
  //     breadcrumb: "Горнолыжные тренажеры",
  //   },
  //   // "Бесконтактные гидромассажные ванны", "Солярии", "Массажные столы", "Массажеры"
  
  //   {
  //     id:1,
  //     path: "/Gym-equipment/Reabilitation",
  //     breadcrumb: "Реабилитация и спортивная медицина",
  //   },
  //   {
  //     id:1,
  //     path: "/Gym-equipment/Cardio/Thredmills",
  //     breadcrumb: "Беговые дорожки",
  //   },
  //   {
  //     id:1,
  //     path: "/Gym-equipment/Cardio/EllipticalTrainers",
  //     breadcrumb: "Эллиптические тренажеры",
  //   },
  //   {
  //     id:1,
  //     path: "/Gym-equipment/Cardio/Exercycle",
  //     breadcrumb: "Велотренажеры",
  //   },
  //   {
  //     id:1,
  //     path: "/Gym-equipment/Cardio/Ladders&Steppers",
  //     breadcrumb: "Cтепперы",
  //   },
  //   {
  //     id:1,
  //     path: "/Gym-equipment/Cardio/RowingMachines",
  //     breadcrumb: "Гребные тренажеры",
  //   id:1,},
  
  //   { path: "/Gym-equipment/Cardio/Cycling", breadcrumb: "Сайклинг" },
  //   {
  //     id:1,
  //     path: "/Gym-equipment/Cardio/SkiSimulator",
  //     breadcrumb: "Горнолыжные тренажеры",
  //   },
  //   // "Диагностические комплексы", "Реабилитационные тренажеры", "Фитнес тестирование"
  
  //   {
  //     id:1,
  //     path: "/Gym-equipment/Pool",
  //     breadcrumb: "Оборудование для бассейнов",
  //   },
  //   {
  //     id:1,
  //     path: "/Gym-equipment/Cardio/Thredmills",
  //     breadcrumb: "Беговые дорожки",
  //   },
  //   {
  //     id:1,
  //     path: "/Gym-equipment/Cardio/EllipticalTrainers",
  //     breadcrumb: "Эллиптические тренажеры",
  //   },
  //   {
  //     id:1,
  //     path: "/Gym-equipment/Cardio/Exercycle",
  //     breadcrumb: "Велотренажеры",
  //   },
  //   {
  //     id:1,
  //     path: "/Gym-equipment/Cardio/Ladders&Steppers",
  //     breadcrumb: "Cтепперы",
  //   },
  //   {
  //     id:1,
  //     path: "/Gym-equipment/Cardio/RowingMachines",
  //     breadcrumb: "Гребные тренажеры",
  //   id:1,},
  
  //   { path: "/Gym-equipment/Cardio/Cycling", breadcrumb: "Сайклинг" },
  //   {
  //     id:1,
  //     path: "/Gym-equipment/Cardio/SkiSimulator",
  //     breadcrumb: "Горнолыжные тренажеры",
  //   },
  //   // "Тренажеры для бассейнов"
  
  //   {
  //     id:1,
  //     path: "/Home-equipment",
  //     breadcrumb: " Тренажеры для дома",
  //   },
  //   {
  //     id:1,
  //     path: "/Home-equipment/Cardio",
  //     breadcrumb: "Кардиотренажеры",
  //   },
  //   {
  //     id:1,
  //     path: "/Home-equipment/Cardio/Thredmills",
  //     breadcrumb: "Беговые дорожки",
  //   },
  //   {
  //     id:1,
  //     path: "/Home-equipment/Cardio/EllipticalTrainers",
  //     breadcrumb: "Эллиптические тренажеры",
  //   },
  //   {
  //     id:1,
  //     path: "/Home-equipment/Cardio/Exercycle",
  //     breadcrumb: "Велотренажеры",
  //   },
  //   {
  //     id:1,
  //     path: "/Home-equipment/Cardio/Ladders&Steppers",
  //     breadcrumb: "Cтепперы",
  //   },
  //   {
  //     id:1,
  //     path: "/Home-equipment/Cardio/RowingMachines",
  //     breadcrumb: "Гребные тренажеры",
  //   id:1,},
  
  //   { path: "/Home-equipment/Cardio/Cycling", breadcrumb: "Сайклинг" },
  //   {
  //     id:1,
  //     path: "/Home-equipment/Cardio/SkiSimulator",
  //     breadcrumb: "Горнолыжные тренажеры",
  //   },
  
  //   {
  //     id:1,
  //     path: "/Home-equipment/PowerTraining",
  //     breadcrumb: "Силовые тренажеры",
  //   },
  //   {
  //     id:1,
  //     path: "/Home-equipment/Cardio/Thredmills",
  //     breadcrumb: "Беговые дорожки",
  //   },
  //   {
  //     id:1,
  //     path: "/Home-equipment/Cardio/EllipticalTrainers",
  //     breadcrumb: "Эллиптические тренажеры",
  //   },
  //   {
  //     id:1,
  //     path: "/Home-equipment/Cardio/Exercycle",
  //     breadcrumb: "Велотренажеры",
  //   },
  //   {
  //     id:1,
  //     path: "/Home-equipment/Cardio/Ladders&Steppers",
  //     breadcrumb: "Cтепперы",
  //   },
  //   {
  //     id:1,
  //     path: "/Home-equipment/Cardio/RowingMachines",
  //     breadcrumb: "Гребные тренажеры",
  //   id:1,},
  
  //   { path: "/Home-equipment/Cardio/Cycling", breadcrumb: "Сайклинг" },
  //   {
  //     id:1,
  //     path: "/Home-equipment/Cardio/SkiSimulator",
  //     breadcrumb: "Горнолыжные тренажеры",
  //   },
  //   // "Мультистанции ", "Рамы и комплексы", "Скамьи"
  
  //   {
  //     id:1,
  //     path: "/Home-equipment/Outdoor",
  //     breadcrumb: "Уличные виды спорта",
  //   },
  //   {
  //     id:1,
  //     path: "/Home-equipment/Cardio/Thredmills",
  //     breadcrumb: "Беговые дорожки",
  //   },
  //   {
  //     id:1,
  //     path: "/Home-equipment/Cardio/EllipticalTrainers",
  //     breadcrumb: "Эллиптические тренажеры",
  //   },
  //   {
  //     id:1,
  //     path: "/Home-equipment/Cardio/Exercycle",
  //     breadcrumb: "Велотренажеры",
  //   },
  //   {
  //     id:1,
  //     path: "/Home-equipment/Cardio/Ladders&Steppers",
  //     breadcrumb: "Cтепперы",
  //   },
  //   {
  //     id:1,
  //     path: "/Home-equipment/Cardio/RowingMachines",
  //     breadcrumb: "Гребные тренажеры",
  //   id:1,},
  
  //   { path: "/Home-equipment/Cardio/Cycling", breadcrumb: "Сайклинг" },
  //   {
  //     id:1,
  //     path: "/Home-equipment/Cardio/SkiSimulator",
  //     breadcrumb: "Горнолыжные тренажеры",
  //   },
  //   // "Батуты", "Баскетбол", "Футбол"
  
  //   {
  //     id:1,
  //     path: "/Home-equipment/FreeWeights",
  //     breadcrumb: "Свободные веса",
  //   },
  //   {
  //     id:1,
  //     path: "/Home-equipment/Cardio/Thredmills",
  //     breadcrumb: "Беговые дорожки",
  //   },
  //   {
  //     id:1,
  //     path: "/Home-equipment/Cardio/EllipticalTrainers",
  //     breadcrumb: "Эллиптические тренажеры",
  //   },
  //   {
  //     id:1,
  //     path: "/Home-equipment/Cardio/Exercycle",
  //     breadcrumb: "Велотренажеры",
  //   },
  //   {
  //     id:1,
  //     path: "/Home-equipment/Cardio/Ladders&Steppers",
  //     breadcrumb: "Cтепперы",
  //   },
  //   {
  //     id:1,
  //     path: "/Home-equipment/Cardio/RowingMachines",
  //     breadcrumb: "Гребные тренажеры",
  //   id:1,},
  
  //   { path: "/Home-equipment/Cardio/Cycling", breadcrumb: "Сайклинг" },
  //   {
  //     id:1,
  //     path: "/Home-equipment/Cardio/SkiSimulator",
  //     breadcrumb: "Горнолыжные тренажеры",
  //   },
  //   // "Гантели и гантельные ряды", "Гири", "Диски и грифы", 'Стойки и хранение'
  
  //   {
  //     id:1,
  //     path: "/Home-equipment/GameTables",
  //     breadcrumb: "Игровые столы",
  //   },
  //   {
  //     id:1,
  //     path: "/Home-equipment/Cardio/Thredmills",
  //     breadcrumb: "Беговые дорожки",
  //   },
  //   {
  //     id:1,
  //     path: "/Home-equipment/Cardio/EllipticalTrainers",
  //     breadcrumb: "Эллиптические тренажеры",
  //   },
  //   {
  //     id:1,
  //     path: "/Home-equipment/Cardio/Exercycle",
  //     breadcrumb: "Велотренажеры",
  //   },
  //   {
  //     id:1,
  //     path: "/Home-equipment/Cardio/Ladders&Steppers",
  //     breadcrumb: "Cтепперы",
  //   },
  //   {
  //     id:1,
  //     path: "/Home-equipment/Cardio/RowingMachines",
  //     breadcrumb: "Гребные тренажеры",
  //   id:1,},
  
  //   { path: "/Home-equipment/Cardio/Cycling", breadcrumb: "Сайклинг" },
  //   {
  //     id:1,
  //     path: "/Home-equipment/Cardio/SkiSimulator",
  //     breadcrumb: "Горнолыжные тренажеры",
  //   },
  //   // "Аэрохоккей", "Настольный футбол"
  
  //   {
  //     id:1,
  //     path: "/Home-equipment/Massage",
  //     breadcrumb: "Массажное оборудование",
  //   },
  //   {
  //     id:1,
  //     path: "/Home-equipment/Cardio/Thredmills",
  //     breadcrumb: "Беговые дорожки",
  //   },
  //   {
  //     id:1,
  //     path: "/Home-equipment/Cardio/EllipticalTrainers",
  //     breadcrumb: "Эллиптические тренажеры",
  //   },
  //   {
  //     id:1,
  //     path: "/Home-equipment/Cardio/Exercycle",
  //     breadcrumb: "Велотренажеры",
  //   },
  //   {
  //     id:1,
  //     path: "/Home-equipment/Cardio/Ladders&Steppers",
  //     breadcrumb: "Cтепперы",
  //   },
  //   {
  //     id:1,
  //     path: "/Home-equipment/Cardio/RowingMachines",
  //     breadcrumb: "Гребные тренажеры",
  //   id:1,},
  
  //   { path: "/Home-equipment/Cardio/Cycling", breadcrumb: "Сайклинг" },
  //   {
  //     id:1,
  //     path: "/Home-equipment/Cardio/SkiSimulator",
  //     breadcrumb: "Горнолыжные тренажеры",
  //   },
  //   // "Массажные кресла", "Массажеры", "Массажные столы", 'Бесконтактные гидромассажные ванны'
  
  //   {
  //     id:1,
  //     path: "/Home-equipment/Fitness",
  //     breadcrumb: "Фитнес аксессуары",
  //   },
  //   {
  //     id:1,
  //     path: "/Home-equipment/Cardio/Thredmills",
  //     breadcrumb: "Беговые дорожки",
  //   },
  //   {
  //     id:1,
  //     path: "/Home-equipment/Cardio/EllipticalTrainers",
  //     breadcrumb: "Эллиптические тренажеры",
  //   },
  //   {
  //     id:1,
  //     path: "/Home-equipment/Cardio/Exercycle",
  //     breadcrumb: "Велотренажеры",
  //   },
  //   {
  //     id:1,
  //     path: "/Home-equipment/Cardio/Ladders&Steppers",
  //     breadcrumb: "Cтепперы",
  //   },
  //   {
  //     id:1,
  //     path: "/Home-equipment/Cardio/RowingMachines",
  //     breadcrumb: "Гребные тренажеры",
  //   id:1,},
  
  //   { path: "/Home-equipment/Cardio/Cycling", breadcrumb: "Сайклинг" },
  //   {
  //     id:1,
  //     path: "/Home-equipment/Cardio/SkiSimulator",
  //     breadcrumb: "Горнолыжные тренажеры",
  //   },
  //   // "Йога и пилатес", "Фитнес аксессуары", "Эспандеры", 'Массажные аксессуары', 'Тяги и рукоятки'
  
  //   {
  //     id:1,
  //     path: "/Home-equipment/FunctionalTraining",
  //     breadcrumb: "Функциональный тренинг",
  //   },
  //   {
  //     id:1,
  //     path: "/Home-equipment/Cardio/Thredmills",
  //     breadcrumb: "Беговые дорожки",
  //   },
  //   {
  //     id:1,
  //     path: "/Home-equipment/Cardio/EllipticalTrainers",
  //     breadcrumb: "Эллиптические тренажеры",
  //   },
  //   {
  //     id:1,
  //     path: "/Home-equipment/Cardio/Exercycle",
  //     breadcrumb: "Велотренажеры",
  //   },
  //   {
  //     id:1,
  //     path: "/Home-equipment/Cardio/Ladders&Steppers",
  //     breadcrumb: "Cтепперы",
  //   },
  //   {
  //     id:1,
  //     path: "/Home-equipment/Cardio/RowingMachines",
  //     breadcrumb: "Гребные тренажеры",
  //   id:1,},
  
  //   { path: "/Home-equipment/Cardio/Cycling", breadcrumb: "Сайклинг" },
  //   {
  //     id:1,
  //     path: "/Home-equipment/Cardio/SkiSimulator",
  //     breadcrumb: "Горнолыжные тренажеры",
  //   },
  //   {
  //     id:1,
  //     path: "/",
  //     breadcrumb: "Дом",
  //   },
  //   // "Функциональные петли Variosling", "Тренировочный комплекс HyGear"
  // ];
  

  // setDynamicBreadcrumb(Path)


  const breadcrumbs = useBreadcrumbs(Path);
  console.log(breadcrumbs);


  return (
    <>
      {breadcrumbs.map(({
        match,
        breadcrumb
      }) => (
        <span key={match.pathname}>
          <NavLink to={match.pathname}>{decodeURI(breadcrumb.props.children).replace(/[\w]{24}/g,'')} /</NavLink>
        </span>
      ))}
    </>
  );
};

export const BreadcrumbsSection = () => {
  const breadcrumbs = useBreadcrumbs(Path);
  return (
    <div className={Style.container}>
      <div className={Style.breadCrumps}>
          <Breadcrumbs ></Breadcrumbs>
        </div>
        <div className={Style.pageHeader}>
          <h1>{(breadcrumbs.at(-1).breadcrumb.props.children === 'Дом')?'':decodeURI(breadcrumbs.at(-1).breadcrumb.props.children).replace(/[\w]{24}/g,'')}</h1>
        </div>
        <hr/>
    </div>
  )
}

