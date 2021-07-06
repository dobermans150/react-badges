import React from 'react';
import ReactDOM from 'react-dom';

import BadgeNews from './pages/BadgeNews';
import Badges from './pages/Badges';
import 'bootstrap/dist/css/bootstrap.min.css';
import './global.css';

const container = document.getElementById('app');

//ReactDOM.render(__que__,__donde__)

ReactDOM.render(<Badges />, container);
