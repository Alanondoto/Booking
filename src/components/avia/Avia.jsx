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
    navigate('/avia/info',
    {
        state: {
            navigateFrom,
            navigateTo,
            flyThere,
            flyBack 
        }
    });
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

  const [flyThereError, setFlyThereError] = useState(false);

  const flyThereErrorHandler = (e) => {
    let item = e.currentTarget.value;
    if (item.length <= 0) {
        setFlyThereError(true)
    } else {
        setFlyThereError(false)
    }
  }

  const flyThereHandler = (e) => {
    flyThereErrorHandler(e);
    changeNavigateFrom(e);
  }

  const [flyBackError, setFlyBackError] = useState(false);

  const flyBackErrorHandler = (e) => {
    let item = e.currentTarget.value;
    if (item.length <= 0) {
        setFlyBackError(true)
    } else {
        setFlyBackError(false)
    }
  }

  const flyBackHandler = (e) => {
    flyBackErrorHandler(e);
    changeNavigateTo(e);
  }

  const [dateError, setDateError] = useState(false);

  const dateErrorHandler = (e) => {
    let item = e.currentTarget.value;
    if (item.length <= 0) {
        setDateError(true)
    } else {
        setDateError(false)
    }
  }

  const errorHandler = (e) => {
    dateErrorHandler(e);
    changeFlyThere(e);
  }

  return (
    <>
        <form>
            <div className="searchItemsWrapper">
                <div className='searchItem'>
                    <div className='distInputHeader'>Откуда</div>
                    <div className='distInputWrapper'>
                        <input value={navigateFrom} onChange={flyThereHandler} type="text" placeholder='Город вылета' className='distInput' />
                    </div>
                    {flyThereError ? <span className='inputError'>Заполните поле</span> : null}
                </div>
                <div className='searchItem'>
                    <div className='distInputHeader'>Куда</div>
                    <div className="distInputWrapper">
                        <input value={navigateTo} onChange={flyBackHandler} type="text" placeholder='Город прилета' className='distInput' />
                    </div>
                    {flyBackError ? <span className='inputError'>Заполните поле</span> : null}
                </div>
                <div className='searchItem'>
                    <div className='distInputHeader'>Туда</div>
                    <div className="distInputWrapper">
                        <img onClick={focusFromDateInput} src={calendar_1} alt="calendar_1" className='calendar' />
                        <input value={flyThere} onChange={errorHandler} ref={fromDateInput} type="date" placeholder='дд.мм.гг' className='distInput' />
                    </div>
                    {dateError ? <span className='inputError'>Заполните поле</span> : null}
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
                {navigateFrom && navigateTo && flyThere ? 
                <button type='submit' onClick={navigateToInfo} className='findTicketsBtn'>Найти билеты</button> : 
                <button disabled={true} className='findTicketsBtnDis'>Найти билеты</button>}
            </div>
        </form>
    </>
  )
}

export default Avia;
