import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


//выводим в консоль время начала рендеринга
let dateSt = new Date();
let timeStart = 'минута ' + dateSt.getMinutes() + ' ' + 'секунда ' + dateSt.getSeconds();
console.log(timeStart);


ReactDOM.render(<App />,document.getElementById('root')
);

//выводим в консоль время завершения рендеринга
let dateFin = new Date();
let timeFinish = 'минута ' + dateFin.getMinutes() + ' ' + 'секунда ' + dateFin.getSeconds();
console.log(timeFinish);


