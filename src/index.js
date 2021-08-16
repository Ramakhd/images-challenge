import React from 'react';
import ReactDOM from 'react-dom';
import Container from './component/Container';
import Header from './component/Header';
import './App.css';

const App =() => {
  return(
    <div >
      <Header/>
      <Container />
    </div>
  );
};
ReactDOM.render(<App/>,document.querySelector('#root'));
