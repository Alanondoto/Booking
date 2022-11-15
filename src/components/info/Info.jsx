import React from 'react';
import { useLocation } from 'react-router-dom';
import './info.css'

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
      </div>
    </>
  )
}

export default Info;
