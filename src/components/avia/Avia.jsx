import React, { useState } from 'react';
import './avia.css'
import calendar_1 from '../../assets/calendar_1.svg';
import calendar_2 from '../../assets/calendar_2.svg';
import {useNavigate} from 'react-router-dom'

export const Avia = (props) => {

  const fromDateInput = React.createRef();

  const focusFromDateInput = () => {
    fromDateInput.current.showPicker();
  }

  const toDateInput = React.createRef();

  const focusToDateInput = () => {
    toDateInput.current.showPicker();
  }

  const navigate = useNavigate();

  const navigateToInfo = () => {
    navigate('/avia/info');
  }

  const [navigateFrom, setNavigateFrom] = useState('');

  const changeNavigateFrom = (e) => {
    setNavigateFrom(e.currentTarget.value);
    console.log(e.currentTarget.value)
  }

  const [navigateTo, setNavigateTo] = useState('');

  const changeNavigateTo = (e) => {
    setNavigateTo(e.currentTarget.value);
    console.log(e.currentTarget.value)
  }

  const [flyThere, setFlyThere] = useState('');

  const changeFlyThere = (e) => {
    setFlyThere(e.currentTarget.value);
    console.log(e.currentTarget.value)
  }

  const [flyBack, setFlyBack] = useState('');

  const changeFlyBack = (e) => {
    setFlyBack(e.currentTarget.value);
    console.log(e.currentTarget.value)
  }

  return (
    <>
        <div className="searchItemsWrapper">
            <div className='searchItem'>
                <div className='distInputHeader'>Откуда</div>
                <div className='distInputWrapper'>
                    <input value={navigateFrom} onChange={changeNavigateFrom} type="text" placeholder='Город вылета' className='distInput' />
                </div>
            </div>
            <div className='searchItem'>
                <div className='distInputHeader'>Куда</div>
                <div className="distInputWrapper">
                    <input value={navigateTo} onChange={changeNavigateTo} type="text" placeholder='Город прилета' className='distInput' />
                </div>
            </div>
            <div className='searchItem'>
                <div className='distInputHeader'>Туда</div>
                <div className="distInputWrapper">
                    <img onClick={focusFromDateInput} src={calendar_1} alt="calendar_1" className='calendar' />
                    <input value={flyThere} onChange={changeFlyThere} ref={fromDateInput} type="date" placeholder='дд.мм.гг' className='distInput' />
                </div>
            </div>
            <div className="divider"></div>
            <div className='searchItem'>
                <div className='distInputHeader'>Обратно</div>
                <div className="distInputWrapper">
                    <img onClick={focusToDateInput} src={calendar_2} alt="calendar_2" className='calendar' />
                    <input value={flyBack} onChange={changeFlyBack} ref={toDateInput} type="date" placeholder='дд.мм.гг' className='distInput' />
                </div>
            </div>
        </div>
        <div className="findTicketsWrapper">
            <button onClick={navigateToInfo} className='findTicketsBtn'>Найти билеты</button>
        </div>
    </>
  )
}

export default Avia;
