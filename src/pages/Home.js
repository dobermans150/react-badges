import React from 'react';
import confLogo from '../images/platziconf-logo.svg';
import logo from '../images/logo.svg';
import './styles/Home.css';

export default function Home() {
  return (
    <div className="background">
      <div className="row">
        <div className="col-5">
          <div className="center">
            <img src={confLogo} alt="Logo de Platzi Conf" />
            <h1>PRINT YOUT BADGES</h1>
            <p>The easiest way to manage your conference</p>
          </div>
        </div>
        <div className="col-7"></div>
      </div>
    </div>
  );
}
