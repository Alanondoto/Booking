import React from 'react';
import { useLocation } from 'react-router-dom';
import './info.css'
import logo from '../../assets/logo.svg'
import way from '../../assets/way.svg'
import baggage from '../../assets/baggage.svg'

export const Info = () => {

  const { state } = useLocation();

  return (
    <>
      <div>{state.navigateFrom}</div>
      <div>{state.navigateTo}</div>
      <div>{state.flyThere}</div>
      <div>{state.flyBack}</div>
      <div className="ticketWrapper">
        <div className="ticketTitle">Невозвратный</div>
        <div className="logoWrapper">
          <img className='logo' src={logo} alt="logo" />
          <div className="logoTitle">S7 Airlines</div>
        </div>
        <div className="distWrapper">
          <div className="distWayWrapper">
            <div className="distFromWrapper">
              <div className="time">09:20</div>
              <div className="city">{state.navigateFrom}</div>
              <div className="date">{state.flyThere}</div>
            </div>
            <div className="distLineWrapper">
             <img className='distLine' src={way} alt="way" />
            </div>
            <div className="distToWrapper">
              <div className="time">11:05</div>
              <div className="city">{state.navigateTo}</div>
              <div className="date">{state.flyThere}</div>
            </div>
            <img className='baggage' src={baggage} alt="baggage" />
            <div className="priceWrapper">
              <div className="price">4 150 ₽</div>
            </div>
          </div>
          <div className="distChooseWrapper">
            <div className="timeWrapperActive"><span>09:20</span> - 11:05</div>
            <div className="timeWrapper"><span>10:20</span> - 12:05</div>
            <div className="timeWrapper"><span>11:20</span> - 13:05</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Info;
