import React from "react";
import Style from './productsGym.module.scss'
import { BreadcrumbsSection } from "../../components/breadCrumps1/breadCrumps1";
import MenuItem from "../../components/routes/menuItem";
import IdeasBanner from "../../components/IdeasBanner/ideasBanner";
import Banner from "../../components/homeBanner/homeBanner";


const ProductsGym = (props) => {
  // const breadcrumbs = useBreadcrumbs(Path);

  return (
    <div>
      <BreadcrumbsSection/>
      <div className={Style.catalogue}>
      {((props.Home)? MenuItem[1].children:MenuItem[0].children).map((item, index) => (
        <div key={'item' + index} className={(props.Home)? Style.item:`${Style.item} ${Style.itemWider}`}>
          <div className={Style.image}>
            {(item.image)?<img src={item.image} alt=''/>:''}
          </div>
          <div className={(props.Home)? Style.list:`${Style.list} ${Style.listWider}`}>
            <h3 className={Style.listTitle}>{item.breadcrumb}</h3>
            {item.children.map((item, i, arr) =>(
              <div key={'subitem' + i}>
                <div className={(i === 0)?`${Style.listItemFirst} ${Style.listItem}`:Style.listItem}>
                  <span>{item.breadcrumb}</span>
                  <span>45</span>
                </div>
                {(arr.length - 1 === i)? '':<div className={Style.horizontalLine}></div>}
              </div>
                
            ))}              
          </div>
        </div>
      ))}
      </div>
      <IdeasBanner />
      <Banner discountMode={true} />
    </div>
  );
};

export default ProductsGym;
