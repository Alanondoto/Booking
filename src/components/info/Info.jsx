import React from 'react';
import {useState} from 'react';
import { useLocation } from 'react-router-dom';
import './info.css'
import logo from '../../assets/logo.svg'
import way from '../../assets/way.svg'
import baggage from '../../assets/baggage.svg'

export const Info = () => {

  const { state } = useLocation();

  const [activeItemIndex, setActiveItemIndex] = useState(0)

  const [activeTime, setActiveTime] = useState({first: '9:20', second: '11:05'})

  const firstItemClicker = () => {
    setActiveItemIndex(0);
    setActiveTime({ ...activeTime, first: '9:20', second: '11:05' })
  }

  const secondItemClicker = () => {
    setActiveItemIndex(1);
    setActiveTime({ ...activeTime, first: '10:20', second: '12:05' })
  }

  const thirdItemClicker = () => {
    setActiveItemIndex(2);
    setActiveTime({ ...activeTime, first: '11:20', second: '13:05' })
  }

  return (
    <>
      {state.navigateFrom && state.navigateTo && state.flyThere && state.flyBack ? <div className="secondTicketWrapper">
      <div className="ticketsWrapper">
      <div className="ticketTitle">Невозвратный</div>
        <div className="logoWrapper">
          <img className='logo' src={logo} alt="logo" />
          <div className="logoTitle">S7 Airlines</div>
        </div>
        <div className="distWrapper">
          <div className="distWayWrapper">
            <div className="distFromWrapper">
              <div className="time">22:57</div>
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
            <img className='baggage2' src={baggage} alt="baggage" />
          </div>
        </div>
      </div>
      <div className="ticketsWrapper">
      <div className="dashedDevider"></div>
      <div className="ticketTitle">Невозвратный</div>
        <div className="logoWrapper">
          <img className='logo' src={logo} alt="logo" />
          <div className="logoTitle">S7 Airlines</div>
        </div>
        <div className="distWrapper">
          <div className="distWayWrapper">
            <div className="distFromWrapper">
              <div className="time">22:57</div>
              <div className="city">{state.navigateTo}</div>
              <div className="date">{state.flyBack}</div>
            </div>
            <div className="distLineWrapper">
             <img className='distLine' src={way} alt="way" />
            </div>
            <div className="distToWrapper">
              <div className="time">11:05</div>
              <div className="city">{state.navigateFrom}</div>
              <div className="date">{state.flyBack}</div>
            </div>
            <img className='baggage2' src={baggage} alt="baggage" />
          </div>
        </div>
      </div>
      <div className="secondPriceWrapper">9 300 ₽</div>
      </div> : <div className="ticketWrapper">
        <div className="ticketTitle">Невозвратный</div>
        <div className="logoWrapper">
          <img className='logo' src={logo} alt="logo" />
          <div className="logoTitle">S7 Airlines</div>
        </div>
        <div className="distWrapper">
          <div className="distWayWrapper">
            <div className="distFromWrapper">
              <div className="time">{activeTime.first}</div>
              <div className="city">{state.navigateFrom}</div>
              <div className="date">{state.flyThere}</div>
            </div>
            <div className="distLineWrapper">
             <img className='distLine' src={way} alt="way" />
            </div>
            <div className="distToWrapper">
              <div className="time">{activeTime.second}</div>
              <div className="city">{state.navigateTo}</div>
              <div className="date">{state.flyThere}</div>
            </div>
            <img className='baggage' src={baggage} alt="baggage" />
            <div className="priceWrapper">
              <div className="price">4 150 ₽</div>
            </div>
          </div>
          <div className="distChooseWrapper">
            <div className={activeItemIndex === 0 ? "timeWrapperActive" : "timeWrapper"} onClick={firstItemClicker}><span>09:20</span> - 11:05</div>
            <div className={activeItemIndex === 1 ? "timeWrapperActive" : "timeWrapper"} onClick={secondItemClicker}><span>10:20</span> - 12:05</div>
            <div className={activeItemIndex === 2 ? "timeWrapperActive" : "timeWrapper"} onClick={thirdItemClicker}><span>11:20</span> - 13:05</div>
          </div>
        </div>
      </div>}
    </>
  )
}

export default Info;
