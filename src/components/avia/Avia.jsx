import './avia.css'
import calendar_1 from '../../assets/calendar_1.svg';
import calendar_2 from '../../assets/calendar_2.svg';

export const Avia = () => {
  return (
    <div className="searchItemsWrapper">
        <div className='searchItem'>
            <input type="text" placeholder='Город вылета' className='distInput' />
        </div>
        <div className='searchItem'>
            <input type="text" placeholder='Город прилета' className='distInput' />
        </div>
        <div className='searchItem'>
            <img src={calendar_1} alt="calendar_1" />
            <input type="text" placeholder='дд.мм.гг' className='distInput' />
        </div>
        <div className='searchItem'>
            <img src={calendar_2} alt="calendar_2" />
            <input type="text" placeholder='дд.мм.гг' className='distInput' />
        </div>
    </div>
  )
}

export default Avia;
