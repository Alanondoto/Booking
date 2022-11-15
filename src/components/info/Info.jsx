import React from 'react';
import { useLocation } from 'react-router-dom';

export const Info = () => {

  const { state } = useLocation();

  return (
    <>
      <div>{state.navigateFrom}</div>
      <div>{state.navigateTo}</div>
      <div>{state.flyThere}</div>
      <div>{state.flyBack}</div>
    </>
  )
}

export default Info;
