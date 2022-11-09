import React, { useContext, useRef, useState } from "react";
import Style from './auth.module.scss';
import axios from 'axios';
import { Formik } from 'formik';
import { BackendRouteContext, IsAuthContext, LoggedUserContext, RegistrationModalContext } from "../../components/useContext/useContext";
import DealerBtns from "../../elements/dealerBtns/dealerBtns";
import {ReactComponent as Eye} from "../../assets/icons/showPassword.svg";
import {ReactComponent as Facebook} from "../../assets/icons/facebook.svg";
import {ReactComponent as Checkmark} from "../../assets/icons/checkmark.svg";
import CloseBtn from "../../elements/closeBtn/closeBtn";
import $api from "../../elements/apiAuth/apiAuth";
import { checkIfClickedOutside } from "../../elements/checkOutsideClick/checkOutsideClick";

 const AuthPage = (props) =>{
  const { setUser } = useContext(LoggedUserContext);
  const { setIsAuth } = useContext(IsAuthContext);
  const { backendRoute } = useContext(BackendRouteContext);
  const [ inputType, setInputType ] = useState('password')
  const InsideClickRef = useRef(null);
  const { setOpen } = useContext(RegistrationModalContext);

  const checkInputType = () => {
    if (inputType === 'password') {
      setInputType('text')
    }
    else {
      setInputType('password')
    }
  }

    const onSubmit1 = async (
      values,
      { setSubmitting, setErrors, setStatus, resetForm }
    ) => {
      const header = new Headers();
      header.append('Content-Type', 'application/json');
      try {
        await $api
          .post(props.login?`api/auth/login`:`api/auth/authorisation`, values, header)
          .then((response) => {
            console.log(response);
            resetForm({});
            setStatus({ success: true, message: response.data.message});
            if (props.login) {
              localStorage.setItem('token', response.data.accessToken);
              setUser(response.data.user);
              setIsAuth(true);
            }
          })
          .catch((error) => {
            console.log(error.response.data.message);
            // const errorData = new Error(error)
            // console.log(errorData);
            resetForm({});
            setStatus({ success: false, message: error.response.data.message });
          });
      } catch (error) {
        console.log(error);
        setStatus({ success: false });
        setSubmitting(false);
        setErrors({ submit: error.message });
      }
    }
    return (
      <div className={Style.container} onClick={(e)=>{checkIfClickedOutside(e, InsideClickRef, setOpen)}}>
      <div className={Style.authPage} ref={InsideClickRef}>
        <h1 className={Style.heading}>{props.login?'Вход в личный кабинет':'Регистрация'}</h1>
        <DealerBtns enterBtn={true}/>
        <div className={Style.additionalEnter}>
          <span>{props.login?'Войти с помощью':'Регистрация с помощью'}</span>
          <div className={Style.iconsContainer}>
            <Facebook/>
          </div>
          <div className={Style.iconsContainer}>
            <Facebook/>
          </div>
        </div>
        <Formik
          initialValues={{ email: '', password: '', passwordCheck: '' }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = 'Не указан логин';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Введите существующий e-mail';
            }
            if (!props.login) {
              if (values.password !== values.passwordCheck) {
                errors.password = 'Пароли не сходятся';
              }
            }
            return errors;
          }}
          onSubmit={onSubmit1}
        > 
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            status,
            setStatus,
          }) => (
            <form onSubmit={handleSubmit} className={Style.form}>
              <div className={Style.inputContainer}>
                <input
                  className={errors.email?`${Style.input} ${Style.error}`:Style.input}
                  type='email'
                  name='email'
                  onChange={handleChange}
                  onClick={()=>{setStatus('')}}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder={'Ваша почта'}
                />
                <span className={props.login?`${Style.errorText} ${Style.errorTextLogin}`:Style.errorText}>
                {touched.email && errors.email || status && status.message}
                </span>
                <input
                  className={errors.password?`${Style.input} ${Style.error}`:Style.input}
                  type={inputType}
                  name='password'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder={'Пароль'}
                />
                {props.login?""
                :
                <>
                  <input
                    className={errors.password?`${Style.input} ${Style.error}`:Style.input}
                    type={inputType}
                    name='passwordCheck'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.passwordCheck}
                    placeholder={'Повторите пароль'}
                  />
                  <div className={`${Style.showPassword} ${Style.showPasswordHigher}`}>
                    <Eye onClick={() => {checkInputType()}}></Eye>
                  </div>
                </>
                }
                <span className={Style.errorPassword}>
                  {touched.password && errors.password}
                </span>
                <div className={Style.showPassword}>
                  <Eye onClick={() => {checkInputType()}}></Eye>
                </div>
              </div>
              {props.login?
              <div className={Style.btnBox}>
              <a className={Style.regFont} href="#">Забыли пароль?</a>
              <button className={Style.redBtn} type='submit' disabled={isSubmitting || errors.email || errors.password}>
                Войти
              </button>
              <span onClick={()=>{setOpen([false, true])}} className={Style.regFont} >Зарегистрироваться</span>
              </div>
              :
              <button className={Style.redBtn} type='submit' disabled={isSubmitting || errors.email || errors.password}>
                Войти
              </button>
              }
              {status && status.success && 
                <UserCreated message={status.message}/>
              }
            </form>
          )}
        </Formik>
        <div className={Style.closeBtn}>
          <CloseBtn bigMode={true} />
        </div>
        </div>
      </div>
    );
}

export default AuthPage

export const UserCreated = (props) => {

  return (
    <div className={Style.container}>
      <div className={Style.authPage}>
        <div className={Style.checkmark}>
        <Checkmark/>
        </div>
        <span className={Style.message}>{props.message}</span>
      </div>
    </div>
  )
}

