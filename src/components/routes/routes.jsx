import React, { useContext } from "react";
import CardioG from "../../pages/ProductsGym/Cardio/cardio";
import { BreadcrumbContext } from "../useContext/useContext";





const Path = [
  {
    element: <CardioG/>,
    path: "/Gym-equipment",
    breadcrumb: "Для фитнес клубов",
  },
  {
    element: <CardioG/>,
    path: "/Gym-equipment/Cardio",
    breadcrumb: "Кардиотренажеры",
  },
  {
    id:1.1,
    path: "/Gym-equipment/Cardio/Thredmills",
    breadcrumb: "Беговые дорожки",
  },
  {
    element: <CardioG/>,
    path: "/Gym-equipment/Cardio/EllipticalTrainers",
    breadcrumb: "Эллиптические тренажеры",
  },
  {
    element: <CardioG/>,
    path: "/Gym-equipment/Cardio/Exercycle",
    breadcrumb: "Велотренажеры",
  },
  {
    element: <CardioG/>,
    path: "/Gym-equipment/Cardio/Ladders&Steppers",
    breadcrumb: "Cтепперы",
  },
  {
    element: <CardioG/>,
    path: "/Gym-equipment/Cardio/RowingMachines",
    breadcrumb: "Гребные тренажеры",
  },
  { id:1,
    path: "/Gym-equipment/Cardio/Cycling", 
    breadcrumb: "Сайклинг" },
  {
    element: <CardioG/>,
    path: "/Gym-equipment/Cardio/SkiSimulator",
    breadcrumb: "Горнолыжные тренажеры",
  },

  {
    element: <CardioG/>,
    path: "/Gym-equipment/PowerTraining",
    breadcrumb: "Силовые тренажеры",
  },
  {
    element: <CardioG/>,
    path: "/Gym-equipment/Cardio/Thredmills",
    breadcrumb: "Беговые дорожки",
  },
  {
    element: <CardioG/>,
    path: "/Gym-equipment/Cardio/EllipticalTrainers",
    breadcrumb: "Эллиптические тренажеры",
  },
  {
    element: <CardioG/>,
    path: "/Gym-equipment/Cardio/Exercycle",
    breadcrumb: "Велотренажеры",
  },
  {
    element: <CardioG/>,
    path: "/Gym-equipment/Cardio/Ladders&Steppers",
    breadcrumb: "Cтепперы",
  },
  {
    element: <CardioG/>,
    path: "/Gym-equipment/Cardio/RowingMachines",
    breadcrumb: "Гребные тренажеры",
  },
  { 
    element: <CardioG/>,
    path: "/Gym-equipment/Cardio/Cycling", 
    breadcrumb: "Сайклинг" },
  {
    element: <CardioG/>,
    path: "/Gym-equipment/Cardio/SkiSimulator",
    breadcrumb: "Горнолыжные тренажеры",
  },
  // "Мультистанции ", "Рамы и комплексы", "Скамьи"

  {
    element: <CardioG/>,
    path: "/Gym-equipment/FunctionalTraining",
    breadcrumb: "Функциональный тренинг",
  },
  {
    element: <CardioG/>,
    path: "/Gym-equipment/Cardio/Thredmills",
    breadcrumb: "Беговые дорожки",
  },
  {
    element: <CardioG/>,
    path: "/Gym-equipment/Cardio/EllipticalTrainers",
    breadcrumb: "Эллиптические тренажеры",
  },
  {
    element: <CardioG/>,
    path: "/Gym-equipment/Cardio/Exercycle",
    breadcrumb: "Велотренажеры",
  },
  {
    element: <CardioG/>,
    path: "/Gym-equipment/Cardio/Ladders&Steppers",
    breadcrumb: "Cтепперы",
  },
  {
    element: <CardioG/>,
    path: "/Gym-equipment/Cardio/RowingMachines",
    breadcrumb: "Гребные тренажеры",},

  { path: "/Gym-equipment/Cardio/Cycling", breadcrumb: "Сайклинг" },
  {
    element: <CardioG/>,
    path: "/Gym-equipment/Cardio/SkiSimulator",
    breadcrumb: "Горнолыжные тренажеры",
  },
  // "Комплексы для ФТ", "Горнолыжные тренажеры", "Slide&FIT"

  {
    element: <CardioG/>,
    path: "/Gym-equipment/FreeWeights",
    breadcrumb: "Свободные веса",
  },
  {
    element: <CardioG/>,
    path: "/Gym-equipment/Cardio/Thredmills",
    breadcrumb: "Беговые дорожки",
  },
  {
    element: <CardioG/>,
    path: "/Gym-equipment/Cardio/EllipticalTrainers",
    breadcrumb: "Эллиптические тренажеры",
  },
  {
    element: <CardioG/>,
    path: "/Gym-equipment/Cardio/Exercycle",
    breadcrumb: "Велотренажеры",
  },
  {
    element: <CardioG/>,
    path: "/Gym-equipment/Cardio/Ladders&Steppers",
    breadcrumb: "Cтепперы",
  },
  {
    element: <CardioG/>,
    path: "/Gym-equipment/Cardio/RowingMachines",
    breadcrumb: "Гребные тренажеры",},

  { path: "/Gym-equipment/Cardio/Cycling", breadcrumb: "Сайклинг" },
  {
    element: <CardioG/>,
    path: "/Gym-equipment/Cardio/SkiSimulator",
    breadcrumb: "Горнолыжные тренажеры",
  },
  // "Гантели и гантельные ряды", "Гири", "Диски и грифы", "Стойки и хранение"

  {
    element: <CardioG/>,
    path: "/Gym-equipment/Aerobics",
    breadcrumb: "Аэробика",
  },
  {
    element: <CardioG/>,
    path: "/Gym-equipment/Cardio/Thredmills",
    breadcrumb: "Беговые дорожки",
  },
  {
    element: <CardioG/>,
    path: "/Gym-equipment/Cardio/EllipticalTrainers",
    breadcrumb: "Эллиптические тренажеры",
  },
  {
    element: <CardioG/>,
    path: "/Gym-equipment/Cardio/Exercycle",
    breadcrumb: "Велотренажеры",
  },
  {
    element: <CardioG/>,
    path: "/Gym-equipment/Cardio/Ladders&Steppers",
    breadcrumb: "Cтепперы",
  },
  {
    element: <CardioG/>,
    path: "/Gym-equipment/Cardio/RowingMachines",
    breadcrumb: "Гребные тренажеры",},

  { path: "/Gym-equipment/Cardio/Cycling", breadcrumb: "Сайклинг" },
  {
    element: <CardioG/>,
    path: "/Gym-equipment/Cardio/SkiSimulator",
    breadcrumb: "Горнолыжные тренажеры",
  },
  // "Аэробика", "Для групповых программ", "Для персонального тренинга"

  {
    element: <CardioG/>,
    path: "/Gym-equipment/Welness",
    breadcrumb: "Wellness, СПА, массаж",
  },
  {
    element: <CardioG/>,
    path: "/Gym-equipment/Cardio/Thredmills",
    breadcrumb: "Беговые дорожки",
  },
  {
    element: <CardioG/>,
    path: "/Gym-equipment/Cardio/EllipticalTrainers",
    breadcrumb: "Эллиптические тренажеры",
  },
  {
    element: <CardioG/>,
    path: "/Gym-equipment/Cardio/Exercycle",
    breadcrumb: "Велотренажеры",
  },
  {
    element: <CardioG/>,
    path: "/Gym-equipment/Cardio/Ladders&Steppers",
    breadcrumb: "Cтепперы",
  },
  {
    element: <CardioG/>,
    path: "/Gym-equipment/Cardio/RowingMachines",
    breadcrumb: "Гребные тренажеры",},

  { path: "/Gym-equipment/Cardio/Cycling", breadcrumb: "Сайклинг" },
  {
    element: <CardioG/>,
    path: "/Gym-equipment/Cardio/SkiSimulator",
    breadcrumb: "Горнолыжные тренажеры",
  },
  // "Бесконтактные гидромассажные ванны", "Солярии", "Массажные столы", "Массажеры"

  {
    element: <CardioG/>,
    path: "/Gym-equipment/Reabilitation",
    breadcrumb: "Реабилитация и спортивная медицина",
  },
  {
    element: <CardioG/>,
    path: "/Gym-equipment/Cardio/Thredmills",
    breadcrumb: "Беговые дорожки",
  },
  {
    element: <CardioG/>,
    path: "/Gym-equipment/Cardio/EllipticalTrainers",
    breadcrumb: "Эллиптические тренажеры",
  },
  {
    element: <CardioG/>,
    path: "/Gym-equipment/Cardio/Exercycle",
    breadcrumb: "Велотренажеры",
  },
  {
    element: <CardioG/>,
    path: "/Gym-equipment/Cardio/Ladders&Steppers",
    breadcrumb: "Cтепперы",
  },
  {
    element: <CardioG/>,
    path: "/Gym-equipment/Cardio/RowingMachines",
    breadcrumb: "Гребные тренажеры",},

  { path: "/Gym-equipment/Cardio/Cycling", breadcrumb: "Сайклинг" },
  {
    element: <CardioG/>,
    path: "/Gym-equipment/Cardio/SkiSimulator",
    breadcrumb: "Горнолыжные тренажеры",
  },
  // "Диагностические комплексы", "Реабилитационные тренажеры", "Фитнес тестирование"

  {
    element: <CardioG/>,
    path: "/Gym-equipment/Pool",
    breadcrumb: "Оборудование для бассейнов",
  },
  {
    element: <CardioG/>,
    path: "/Gym-equipment/Cardio/Thredmills",
    breadcrumb: "Беговые дорожки",
  },
  {
    element: <CardioG/>,
    path: "/Gym-equipment/Cardio/EllipticalTrainers",
    breadcrumb: "Эллиптические тренажеры",
  },
  {
    element: <CardioG/>,
    path: "/Gym-equipment/Cardio/Exercycle",
    breadcrumb: "Велотренажеры",
  },
  {
    element: <CardioG/>,
    path: "/Gym-equipment/Cardio/Ladders&Steppers",
    breadcrumb: "Cтепперы",
  },
  {
    element: <CardioG/>,
    path: "/Gym-equipment/Cardio/RowingMachines",
    breadcrumb: "Гребные тренажеры",},

  { path: "/Gym-equipment/Cardio/Cycling", breadcrumb: "Сайклинг" },
  {
    element: <CardioG/>,
    path: "/Gym-equipment/Cardio/SkiSimulator",
    breadcrumb: "Горнолыжные тренажеры",
  },
  // "Тренажеры для бассейнов"

  {
    element: <CardioG/>,
    path: "/Home-equipment",
    breadcrumb: " Тренажеры для дома",
  },
  {
    element: <CardioG/>,
    path: "/Home-equipment/Cardio",
    breadcrumb: "Кардиотренажеры",
  },
  {
    element: <CardioG/>,
    path: "/Home-equipment/Cardio/Thredmills",
    breadcrumb: "Беговые дорожки",
  },
  {
    element: <CardioG/>,
    path: "/Home-equipment/Cardio/EllipticalTrainers",
    breadcrumb: "Эллиптические тренажеры",
  },
  {
    element: <CardioG/>,
    path: "/Home-equipment/Cardio/Exercycle",
    breadcrumb: "Велотренажеры",
  },
  {
    element: <CardioG/>,
    path: "/Home-equipment/Cardio/Ladders&Steppers",
    breadcrumb: "Cтепперы",
  },
  {
    element: <CardioG/>,
    path: "/Home-equipment/Cardio/RowingMachines",
    breadcrumb: "Гребные тренажеры",},

  { path: "/Home-equipment/Cardio/Cycling", breadcrumb: "Сайклинг" },
  {
    element: <CardioG/>,
    path: "/Home-equipment/Cardio/SkiSimulator",
    breadcrumb: "Горнолыжные тренажеры",
  },

  {
    element: <CardioG/>,
    path: "/Home-equipment/PowerTraining",
    breadcrumb: "Силовые тренажеры",
  },
  {
    element: <CardioG/>,
    path: "/Home-equipment/Cardio/Thredmills",
    breadcrumb: "Беговые дорожки",
  },
  {
    element: <CardioG/>,
    path: "/Home-equipment/Cardio/EllipticalTrainers",
    breadcrumb: "Эллиптические тренажеры",
  },
  {
    element: <CardioG/>,
    path: "/Home-equipment/Cardio/Exercycle",
    breadcrumb: "Велотренажеры",
  },
  {
    element: <CardioG/>,
    path: "/Home-equipment/Cardio/Ladders&Steppers",
    breadcrumb: "Cтепперы",
  },
  {
    element: <CardioG/>,
    path: "/Home-equipment/Cardio/RowingMachines",
    breadcrumb: "Гребные тренажеры",},

  { path: "/Home-equipment/Cardio/Cycling", breadcrumb: "Сайклинг" },
  {
    element: <CardioG/>,
    path: "/Home-equipment/Cardio/SkiSimulator",
    breadcrumb: "Горнолыжные тренажеры",
  },
  // "Мультистанции ", "Рамы и комплексы", "Скамьи"

  {
    element: <CardioG/>,
    path: "/Home-equipment/Outdoor",
    breadcrumb: "Уличные виды спорта",
  },
  {
    element: <CardioG/>,
    path: "/Home-equipment/Cardio/Thredmills",
    breadcrumb: "Беговые дорожки",
  },
  {
    element: <CardioG/>,
    path: "/Home-equipment/Cardio/EllipticalTrainers",
    breadcrumb: "Эллиптические тренажеры",
  },
  {
    element: <CardioG/>,
    path: "/Home-equipment/Cardio/Exercycle",
    breadcrumb: "Велотренажеры",
  },
  {
    element: <CardioG/>,
    path: "/Home-equipment/Cardio/Ladders&Steppers",
    breadcrumb: "Cтепперы",
  },
  {
    element: <CardioG/>,
    path: "/Home-equipment/Cardio/RowingMachines",
    breadcrumb: "Гребные тренажеры",
  },

  { path: "/Home-equipment/Cardio/Cycling", breadcrumb: "Сайклинг" },
  {
    element: <CardioG/>,
    path: "/Home-equipment/Cardio/SkiSimulator",
    breadcrumb: "Горнолыжные тренажеры",
  },
  // "Батуты", "Баскетбол", "Футбол"

  {
    element: <CardioG/>,
    path: "/Home-equipment/FreeWeights",
    breadcrumb: "Свободные веса",
  },
  {
    element: <CardioG/>,
    path: "/Home-equipment/Cardio/Thredmills",
    breadcrumb: "Беговые дорожки",
  },
  {
    element: <CardioG/>,
    path: "/Home-equipment/Cardio/EllipticalTrainers",
    breadcrumb: "Эллиптические тренажеры",
  },
  {
    element: <CardioG/>,
    path: "/Home-equipment/Cardio/Exercycle",
    breadcrumb: "Велотренажеры",
  },
  {
    element: <CardioG/>,
    path: "/Home-equipment/Cardio/Ladders&Steppers",
    breadcrumb: "Cтепперы",
  },
  {
    element: <CardioG/>,
    path: "/Home-equipment/Cardio/RowingMachines",
    breadcrumb: "Гребные тренажеры",
  },

  { path: "/Home-equipment/Cardio/Cycling", breadcrumb: "Сайклинг" },
  {
    element: <CardioG/>,
    path: "/Home-equipment/Cardio/SkiSimulator",
    breadcrumb: "Горнолыжные тренажеры",
  },
  // "Гантели и гантельные ряды", "Гири", "Диски и грифы", 'Стойки и хранение'

  {
    element: <CardioG/>,
    path: "/Home-equipment/GameTables",
    breadcrumb: "Игровые столы",
  },
  {
    element: <CardioG/>,
    path: "/Home-equipment/Cardio/Thredmills",
    breadcrumb: "Беговые дорожки",
  },
  {
    element: <CardioG/>,
    path: "/Home-equipment/Cardio/EllipticalTrainers",
    breadcrumb: "Эллиптические тренажеры",
  },
  {
    element: <CardioG/>,
    path: "/Home-equipment/Cardio/Exercycle",
    breadcrumb: "Велотренажеры",
  },
  {
    element: <CardioG/>,
    path: "/Home-equipment/Cardio/Ladders&Steppers",
    breadcrumb: "Cтепперы",
  },
  {
    element: <CardioG/>,
    path: "/Home-equipment/Cardio/RowingMachines",
    breadcrumb: "Гребные тренажеры",
  },

  { path: "/Home-equipment/Cardio/Cycling", breadcrumb: "Сайклинг" },
  {
    element: <CardioG/>,
    path: "/Home-equipment/Cardio/SkiSimulator",
    breadcrumb: "Горнолыжные тренажеры",
  },
  // "Аэрохоккей", "Настольный футбол"

  {
    element: <CardioG/>,
    path: "/Home-equipment/Massage",
    breadcrumb: "Массажное оборудование",
  },
  {
    element: <CardioG/>,
    path: "/Home-equipment/Cardio/Thredmills",
    breadcrumb: "Беговые дорожки",
  },
  {
    element: <CardioG/>,
    path: "/Home-equipment/Cardio/EllipticalTrainers",
    breadcrumb: "Эллиптические тренажеры",
  },
  {
    element: <CardioG/>,
    path: "/Home-equipment/Cardio/Exercycle",
    breadcrumb: "Велотренажеры",
  },
  {
    element: <CardioG/>,
    path: "/Home-equipment/Cardio/Ladders&Steppers",
    breadcrumb: "Cтепперы",
  },
  {
    element: <CardioG/>,
    path: "/Home-equipment/Cardio/RowingMachines",
    breadcrumb: "Гребные тренажеры",
  },

  { path: "/Home-equipment/Cardio/Cycling", breadcrumb: "Сайклинг" },
  {
    element: <CardioG/>,
    path: "/Home-equipment/Cardio/SkiSimulator",
    breadcrumb: "Горнолыжные тренажеры",
  },
  // "Массажные кресла", "Массажеры", "Массажные столы", 'Бесконтактные гидромассажные ванны'

  {
    element: <CardioG/>,
    path: "/Home-equipment/Fitness",
    breadcrumb: "Фитнес аксессуары",
  },
  {
    element: <CardioG/>,
    path: "/Home-equipment/Cardio/Thredmills",
    breadcrumb: "Беговые дорожки",
  },
  {
    element: <CardioG/>,
    path: "/Home-equipment/Cardio/EllipticalTrainers",
    breadcrumb: "Эллиптические тренажеры",
  },
  {
    element: <CardioG/>,
    path: "/Home-equipment/Cardio/Exercycle",
    breadcrumb: "Велотренажеры",
  },
  {
    element: <CardioG/>,
    path: "/Home-equipment/Cardio/Ladders&Steppers",
    breadcrumb: "Cтепперы",
  },
  {
    element: <CardioG/>,
    path: "/Home-equipment/Cardio/RowingMachines",
    breadcrumb: "Гребные тренажеры",
},

  { path: "/Home-equipment/Cardio/Cycling", breadcrumb: "Сайклинг" },
  {
    element: <CardioG/>,
    path: "/Home-equipment/Cardio/SkiSimulator",
    breadcrumb: "Горнолыжные тренажеры",
  },
  // "Йога и пилатес", "Фитнес аксессуары", "Эспандеры", 'Массажные аксессуары', 'Тяги и рукоятки'

  {
    element: <CardioG/>,
    path: "/Home-equipment/FunctionalTraining",
    breadcrumb: "Функциональный тренинг",
  },
  {
    element: <CardioG/>,
    path: "/Home-equipment/Cardio/Thredmills",
    breadcrumb: "Беговые дорожки",
  },
  {
    element: <CardioG/>,
    path: "/Home-equipment/Cardio/EllipticalTrainers",
    breadcrumb: "Эллиптические тренажеры",
  },
  {
    element: <CardioG/>,
    path: "/Home-equipment/Cardio/Exercycle",
    breadcrumb: "Велотренажеры",
  },
  {
    element: <CardioG/>,
    path: "/Home-equipment/Cardio/Ladders&Steppers",
    breadcrumb: "Cтепперы",
  },
  {
    element: <CardioG/>,
    path: "/Home-equipment/Cardio/RowingMachines",
    breadcrumb: "Гребные тренажеры",
},

  { path: "/Home-equipment/Cardio/Cycling", breadcrumb: "Сайклинг" },
  {
    element: <CardioG/>,
    path: "/Home-equipment/Cardio/SkiSimulator",
    breadcrumb: "Горнолыжные тренажеры",
  },
  {
    element: <CardioG/>,
    path: "/",
    breadcrumb: "Дом",
  },
  // "Функциональные петли Variosling", "Тренировочный комплекс HyGear"
];

export default Path;
