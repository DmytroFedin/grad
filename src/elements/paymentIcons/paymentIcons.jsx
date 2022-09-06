import Style from './paymentIcons.module.scss'
import {ReactComponent as Paypal} from '../../assets/icons/paypal.svg';
import {ReactComponent as Visa} from '../../assets/icons/visa.svg';
import {ReactComponent as Mastercard} from '../../assets/icons/mastercard.svg';
import {ReactComponent as Payment} from '../../assets/icons/payment.svg';

const PaymentIcons = () => {
  return (
    <div className={Style.payment}>
      <div className={Style.paymentIcon}>
        <Visa/>
      </div>
        <div className={Style.paymentIcon}>
        <Mastercard/>
        </div>
        <div className={Style.paymentIcon}>
        <Payment/>
        </div>
        <div className={Style.paymentIcon}>
        <Paypal/>
        </div>
      </div>
  )
}

export default PaymentIcons