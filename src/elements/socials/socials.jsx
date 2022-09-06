import {ReactComponent as Facebook} from '../../assets/icons/facebook.svg';
import {ReactComponent as Instagram} from '../../assets/icons/instagram.svg';
import {ReactComponent as Youtube} from '../../assets/icons/youtube.svg';
import Style from './socials.module.scss'

const Socials = () => {
  return (
    <div className={Style.container}>
      <Facebook/>
      <Instagram/>
      <Youtube/>
    </div>
  )
}
export default Socials