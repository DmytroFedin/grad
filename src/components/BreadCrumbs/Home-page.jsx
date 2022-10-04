
import Style from './homePage.module.scss'
import Banner from "../homeBanner/homeBanner";
import ShowCaseProductsGrid from "../ShowCaseProductsGrid/showCaseProductsGrid";
import InfoBlock from "../infoBlock/infoBlock"
import Brends from '../Brends/brends';
import IdeasBanner from '../IdeasBanner/ideasBanner';


const HomePage = (props) => {
  // const breadcrumbs = useBreadcrumbs(Path);

  return (
    <>
      <div className={Style.container}>
        {/* <div className={Style.breadCrumps}>
          <Breadcrumbs id={props.id}></Breadcrumbs>
        </div> */}
        <div className={`padding ${Style.banner}`}>
        <Banner discountMode={false} />
        </div>
        {/* <div className={Style.pageHeader}>
          <h1>{(breadcrumbs.at(-1).breadcrumb.props.children === 'Дом')?'':decodeURI(breadcrumbs.at(-1).breadcrumb.props.children).replace(/[\w]{24}/g,'')}</h1>
        </div> */}
        <div className={`wrapper ${Style.showCase}`}>
          <ShowCaseProductsGrid order={1}/>
        </div>
        <div className={`wrapper ${Style.showCase}`}>
          <ShowCaseProductsGrid order={0}/>
        </div>
        <div className={`padding ${Style.promotion}`}>
        <Banner PromotionMode={true} />
        </div>
        <div className={Style.infoBlock}>
          <InfoBlock />
        </div>
        <div className={Style.ideasBanner}>
        <IdeasBanner />
        </div>
        <div className={`padding ${Style.brandsDisplay}`}>
        <Brends/>
        </div>
        </div>
    </>
  )
}

export default HomePage