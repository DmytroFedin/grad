import AuthPage from "../../pages/auth/auth";
import CardioG from "../../pages/ProductsGym/Cardio/cardio";
import HomePage from "../BreadCrumbs/Home-page";
import CardioGym from '../../assets/images/catalogue__images/Кардиотренажеры__Зал.jpg';
import PowerTrainingGym from '../../assets/images/catalogue__images/СиловыеТренажеры__Зал.jpg';
import FunctionalTrainingGym from '../../assets/images/catalogue__images/ФункциональныйТренинг__Зал.jpg';
import AerobicsGym from '../../assets/images/catalogue__images/Аэробика__Зал.jpg';
import WelnessGym from '../../assets/images/catalogue__images/СПА__Зал.jpg';
import ReabilitationGym from '../../assets/images/catalogue__images/Реабилитация__Зал.jpg';
import CardioHome from '../../assets/images/catalogue__images/Кардиотренажеры__Дом.jpg';
import PowerTrainingHome from '../../assets/images/catalogue__images/СиловыеТренажеры__Дом.jpg';
import FunctionalTrainingHome from '../../assets/images/catalogue__images/ФункциональныйТренинг__Дом.jpg';
import FreeWeights from '../../assets/images/catalogue__images/СвободныеВеса.jpg';
import FinessHome from '../../assets/images/catalogue__images/Фитнесс__Дом.jpg';
import MassageHome from '../../assets/images/catalogue__images/Массаж__Дом.jpg';
import OutdoorHome from '../../assets/images/catalogue__images/Батуты__Дом.jpg';
import GameTablesHome from '../../assets/images/catalogue__images/ИгровыеСтолы__Дом.jpg';




const MenuItem = [
      {
        path: "Gym-equipment",
        element: <HomePage />,
        children: [
          {
            path: "Cardio",
            element: <CardioG />,
            subId:1,
            breadcrumb: "Кардиотренажеры",
            link: "Gym-equipment/Cardio",
            image: CardioGym,
            children: [
              {
                path: "Thredmills",
                element: <HomePage />,
                subId:1.1,
                breadcrumb: "Беговые дорожки",
                link: "Gym-equipment/Cardio/Thredmills",
                children: [
                    {
                        path: ":title",
                        element: <HomePage />,
                      }
                ]
              },
              {
                path: "EllipticalTrainers",
                element: <CardioG />,
                subId:1.2,
                breadcrumb: "Эллиптические тренажеры",
                link: "Gym-equipment/Cardio/EllipticalTrainers",
              },
              {
                path: "Exercycle",
                element: <CardioG />,
                subId:1.3,
                breadcrumb: "Велотренажеры",
                link: "Gym-equipment/Cardio/Exercycle",
              },
              {
                path: "Ladders&Steppers",
                element: <CardioG />,
                subId:1.4,
                breadcrumb: "Cтепперы",
                link: "Gym-equipment/Cardio/Ladders&Steppers",
              },
              {
                path: "RowingMachines",
                element: <CardioG />,
                subId:1.5,
                breadcrumb: "Гребные тренажеры",
                link: "Gym-equipment/Cardio/RowingMachines",
              },
              {
                path: "Cycling", 
                element: <CardioG />,
                subId:1.6,
                 breadcrumb: "Сайклинг" ,
                link: "Gym-equipment/Cardio/Cycling",
              },
              {
                path: "SkiSimulator",
                element: <CardioG />,
                subId:1.7,
                breadcrumb: "Горнолыжные тренажеры",
                link: "Gym-equipment/Cardio/SkiSimulator",
              },
            ],
          },
          {
            path: "PowerTraining",
            element: <CardioG />,
            subId:2,
            breadcrumb: "Силовые тренажеры",
            link: "Gym-equipment/PowerTraining",
            image: PowerTrainingGym,
            children: [
              {
                path: "Multistation",
                element: <CardioG />,
                subId:2.1,
                breadcrumb: "Мультистанции",
                link: "Gym-equipment/PowerTraining/Multistation",
              },
              {
                path: "FramesAndComplexes",
                element: <CardioG />,
                subId:2.2,
                breadcrumb: "Рамы и комплексы",
                link: "Gym-equipment/PowerTraining/FramesAndComplexes",
              },
              {
                path: "Benches",
                element: <CardioG />,
                subId:2.3,
                breadcrumb: "Скамьи",
                link: "Gym-equipment/PowerTraining/Benches",
              },
            ],
          },
          {
            path: "FunctionalTraining",
            element: <CardioG />,
            subId:3,
            breadcrumb: "Функциональный тренинг",
            link: "Gym-equipment/FunctionalTraining",
            image: FunctionalTrainingGym,
            children: [
              {
                path: "ComplexesForFunctionalTraining",
                element: <CardioG />,
                subId:3.1,
                breadcrumb: "Комплексы для ФТ",
                link: "Gym-equipment/FunctionalTraining/ComplexesForFunctionalTraining",
              },
              {
                path: "SkiSimulators",
                element: <CardioG />,
                subId:3.2,
                breadcrumb: "Горнолыжные тренажеры",
                link: "Gym-equipment/FunctionalTraining/SkiSimulators",
              },
              {
                path: "Slide&FIT",
                element: <CardioG />,
                subId:3.3,
                breadcrumb: "Slide&FIT",
                link: "Gym-equipment/FunctionalTraining/Slide&FIT",
              },
            ],
          },
          {
            path: "FreeWeights",
            element: <CardioG />,
            subId:4,
            breadcrumb: "Свободные веса",
            link: "Gym-equipment/FreeWeights",
            image: FreeWeights,
            children: [
              {
                path: "Dumbbells&DumbbellRows",
                element: <CardioG />,
                subId:4.1,
                breadcrumb: "Гантели и гантельные ряды",
                link: "Gym-equipment/FreeWeights/Dumbbells&DumbbellRows",
              },
              {
                path: "KettleBall",
                element: <CardioG />,
                subId:4.2,
                breadcrumb: "Гири",
                link: "Gym-equipment/FreeWeights/KettleBall",
              },
              {
                path: "Disks&Necks",
                element: <CardioG />,
                subId:4.3,
                breadcrumb: "Диски и грифы",
                link: "Gym-equipment/FreeWeights/Disks&Necks",
              },
              {
                path: "Racks&Storage",
                element: <CardioG />,
                subId:4.4,
                breadcrumb: "Стойки и хранение",
                link: "Gym-equipment/FreeWeights/Racks&Storage",
              },
            ],
          },
          {
            path: "Aerobics",
            element: <CardioG />,
            subId:5,
            breadcrumb: "Аэробика",
            link: "Gym-equipment/Aerobics",
            image: AerobicsGym,
            children: [
              {
                path: "Aerobics",
                element: <CardioG />,
                subId:5.1,
                breadcrumb: "Аэробика",
                link: "Gym-equipment/Aerobics/Aerobics",
              },
              {
                path: "GroupProgramms",
                element: <CardioG />,
                subId:5.2,
                breadcrumb: "Для групповых программ",
                link: "Gym-equipment/Aerobics/GroupProgramms",
              },
              {
                path: "PersonalTraining",
                element: <CardioG />,
                subId:5.3,
                breadcrumb: "Для персонального тренинга",
                link: "Gym-equipment/Aerobics/PersonalTraining",
              },
            ],
          },
          {
            path: "Welness",
            element: <CardioG />,
            subId:6,
            breadcrumb: "Wellness, СПА, массаж",
            link: "Gym-equipment/Welness",
            image: WelnessGym,
            children: [
              {
                path: "ContactlessHotTubs",
                element: <CardioG />,
                subId:6.1,
                breadcrumb: "Бесконтактные гидромассажные ванны",
                link: "Gym-equipment/Welness/ContactlessHotTubs",
              },
              {
                path: "Solariums",
                element: <CardioG />,
                subId:6.2,
                breadcrumb: "Солярии",
                link: "Gym-equipment/Welness/Solariums",
              },
              {
                path: "MassageTables",
                element: <CardioG />,
                subId:6.3,
                breadcrumb: "Массажные столы",
                link: "Gym-equipment/Welness/MassageTables",
              },
              {
                path: "Massagers",
                element: <CardioG />,
                subId:6.4,
                breadcrumb: "Массажеры",
                link: "Gym-equipment/Welness/Massagers",
              },
            ],
          },
          {
            path: "Reabilitation",
            element: <CardioG />,
            subId:7,
            breadcrumb: "Реабилитация и спортивная медицина",
            link: "Gym-equipment/Reabilitation",
            image: ReabilitationGym,
            children: [
              {
                path: "DiagnosticComplexes",
                element: <CardioG />,
                subId:7.1,
                breadcrumb: "Диагностические комплексы",
                link: "Gym-equipment/Reabilitation/DiagnosticComplexes",
              },
              {
                path: "RehabilitationSimulators",
                element: <CardioG />,
                subId:7.2,
                breadcrumb: "Реабилитационные тренажеры",
                link: "Gym-equipment/Reabilitation/RehabilitationSimulators",
              },
              {
                path: "FitnessTesting",
                element: <CardioG />,
                subId:7.3,
                breadcrumb: "Фитнес тестирование",
                link: "Gym-equipment/Reabilitation/FitnessTesting",
              },
            ],
          },
          {
            path: "Pool",
            element: <CardioG />,
            subId:8,
            breadcrumb: "Оборудование для бассейнов",
            link: "Gym-equipment/Pool",
            children: [
              {
                path: "PoolTrainers",
                element: <CardioG />,
                subId:8.1,
                breadcrumb: "Тренажеры для бассейнов",
                link: "Gym-equipment/Pool/PoolTrainers",
              },
            ],
          },
        ],
        id:1,
        breadcrumb: "Для фитнес клубов",
      },
      {
        path: "Home-equipment",
        element: <CardioG />,
        id:2,
        breadcrumb: " Для дома",
        children: [
          {
            path: "Cardio",
            element: <CardioG />,
            subId:1,
            breadcrumb: "Кардиотренажеры",
            link: "Home-equipment/Cardio",
            image: CardioHome,
            children: [
              {
                path: "Thredmills",
                element: <CardioG />,
                subId:1.1,
                breadcrumb: "Беговые дорожки",
                link: "Home-equipment/Cardio/Thredmills",
              },
              {
                path: "EllipticalTrainers",
                element: <CardioG />,
                subId:1.2,
                breadcrumb: "Эллиптические тренажеры",
                link: "Home-equipment/Cardio/EllipticalTrainers",
              },
              {
                path: "Exercycle",
                element: <CardioG />,
                subId:1.3,
                breadcrumb: "Велотренажеры",
                link: "Home-equipment/Cardio/Exercycle",
              },
              {
                path: "Ladders&Steppers",
                element: <CardioG />,
                subId:1.4,
                breadcrumb: "Cтепперы",
                link: "Home-equipment/Cardio/Ladders&Steppers",
              },
              {
                path: "RowingMachines",
                element: <CardioG />,
                subId:1.5,
                breadcrumb: "Гребные тренажеры",
                link: "Home-equipment/Cardio/RowingMachines",
              },
              { 
                path: "Cycling", 
                element: <CardioG />,
                subId:1.6,
                breadcrumb: "Сайклинг" ,
                link: "Home-equipment/Cardio/Cycling",
              },
              {
                path: "SkiSimulator",
                element: <CardioG />,
                subId:1.7,
                breadcrumb: "Горнолыжные тренажеры",
                link: "Home-equipment/Cardio/SkiSimulator",
              },
            ],
          },
          {
            path: "PowerTraining",
            element: <CardioG />,
            subId:2,
            breadcrumb: "Силовые тренажеры",
            link: "Home-equipment/PowerTraining",
            image: PowerTrainingHome,
            children: [
              {
                path: "Multistation",
                element: <CardioG />,
                subId:2.1,
                breadcrumb: "Мультистанции",
                link: "Home-equipment/PowerTraining/Multistation",
              },
              {
                path: "FramesAndComplexes",
                element: <CardioG />,
                subId:2.2,
                breadcrumb: "Рамы и комплексы",
                link: "Home-equipment/PowerTraining/FramesAndComplexes",
              },
              {
                path: "Benches",
                element: <CardioG />,
                subId:2.3,
                breadcrumb: "Скамьи",
                link: "Home-equipment/PowerTraining/Benches",
              },
            ],
          },
          {
            path: "Outdoor",
            element: <CardioG />,
            subId:3,
            breadcrumb: "Уличные виды спорта",
            link: "Home-equipment/Outdoor",
            image: OutdoorHome,
            children: [
              {
                path: "Trampolines",
                element: <CardioG />,
                subId:3.1,
                breadcrumb: "Батуты",
                link: "Home-equipment/Outdoor/Trampolines",
              },
              {
                path: "Basketball",
                element: <CardioG />,
                subId:3.2,
                breadcrumb: "Баскетбол",
                link: "Home-equipment/Outdoor/Basketball",
              },
              {
                path: "Football",
                element: <CardioG />,
                subId:3.3,
                breadcrumb: "Футбол",
                link: "Home-equipment/Outdoor/Football",
              },
            ],
          },
          {
            path: "FreeWeights",
            element: <CardioG />,
            subId:4,
            breadcrumb: "Свободные веса",
            link: "Home-equipment/FreeWeights",
            image: FreeWeights,
            children: [
              {
                path: "Dumbbells&DumbbellRows",
                element: <CardioG />,
                subId:4.1,
                breadcrumb: "Гантели и гантельные ряды",
                link: "Home-equipment/FreeWeights/Dumbbells&DumbbellRows",
              },
              {
                path: "KettleBall",
                element: <CardioG />,
                subId:4.2,
                breadcrumb: "Гири",
                link: "Home-equipment/FreeWeights/KettleBall",
              },
              {
                path: "Disks&Necks",
                element: <CardioG />,
                subId:4.3,
                breadcrumb: "Диски и грифы",
                link: "Home-equipment/FreeWeights/Disks&Necks",
              },
              {
                path: "Racks&Storage",
                element: <CardioG />,
                subId:4.4,
                breadcrumb: "Стойки и хранение",
                link: "Home-equipment/FreeWeights/Racks&Storage",
              },
            ],
          },
          {
            path: "GameTables",
            element: <CardioG />,
            subId:5,
            breadcrumb: "Игровые столы",
            link: "Home-equipment/GameTables",
            image: GameTablesHome,
            children: [
              {
                path: "AirHockey",
                element: <CardioG />,
                subId:5.1,
                breadcrumb: "Аэрохоккей",
                link: "Home-equipment/GameTables/Аэрохоккей",
              },
              {
                path: "TableSoccer",
                element: <CardioG />,
                subId:5.2,
                breadcrumb: "Настольный футбол",
                link: "Home-equipment/GameTables/TableSoccer",
              },
              //  "Аэрохоккей", "Настольный футбол"
            ],
          },
          {
            path: "Massage",
            element: <CardioG />,
            subId:6,
            breadcrumb: "Массажное оборудование",
            link: "Home-equipment/Massage",
            image: MassageHome,
            children: [
              {
                path: "ContactlessHotTubs",
                element: <CardioG />,
                subId:6.1,
                breadcrumb: "Бесконтактные гидромассажные ванны",
                link: "Home-equipment/Welness/ContactlessHotTubs",
              },
              {
                path: "Solariums",
                element: <CardioG />,
                subId:6.2,
                breadcrumb: "Массажные кресла",
                link: "Home-equipment/Welness/Solariums",
              },
              {
                path: "MassageTables",
                element: <CardioG />,
                subId:6.3,
                breadcrumb: "Массажные столы",
                link: "Home-equipment/Welness/MassageTables",
              },
              {
                path: "Massagers",
                element: <CardioG />,
                subId:6.4,
                breadcrumb: "Массажеры",
                link: "Home-equipment/Welness/Massagers",
              },
            ],
          },
          {
            path: "Fitness",
            element: <CardioG />,
            subId:7,
            breadcrumb: "Фитнес аксессуары",
            link: "Home-equipment/Fitness",
            image: FinessHome,
            children: [
              {
                path: "Thredmills",
                element: <CardioG />,
                subId:7.1,
                breadcrumb: "Беговые дорожки",
                link: "Home-equipment/Fitness/Thredmills",
              },
              {
                path: "EllipticalTrainers",
                element: <CardioG />,
                subId:7.2,
                breadcrumb: "Эллиптические тренажеры",
                link: "Home-equipment/Fitness/Thredmills",
              },
              {
                path: "Exercycle",
                element: <CardioG />,
                subId:7.3,
                breadcrumb: "Велотренажеры",
                link: "Home-equipment/Fitness/Thredmills",
              },
              {
                path: "Ladders&Steppers",
                element: <CardioG />,
                subId:7.4,
                breadcrumb: "Cтепперы",
                link: "Home-equipment/Fitness/Thredmills",
              },
              {
                path: "RowingMachines",
                element: <CardioG />,
                subId:7.5,
                breadcrumb: "Гребные тренажеры",
                link: "Home-equipment/Fitness/Thredmills",
              },
            ],
          },
          {
            path: "FunctionalTraining",
            element: <CardioG />,
            subId:8,
            breadcrumb: "Функциональный тренинг",
            link: "Home-equipment/FunctionalTraining",
            image: FunctionalTrainingHome,
            children: [
              {
                path: "Thredmills",
                element: <CardioG />,
                subId:8.1,
                breadcrumb: "Беговые дорожки",
                link: "Home-equipment/FunctionalTraining/Thredmills",
              },
              {
                path: "EllipticalTrainers",
                element: <CardioG />,
                subId:8.2,
                breadcrumb: "Эллиптические тренажеры",
                link: "Home-equipment/FunctionalTraining/Thredmills",
              },
            ],
          },
        ],
      },
      {
        path: "/auth",
        element: <AuthPage />,
        id:100,
        breadcrumb: "Авторизация",
      },
        {
          path: "/*",
          element: <HomePage />,
          id:0,
          breadcrumb: "Дом",
        },
    ]  


export default MenuItem;