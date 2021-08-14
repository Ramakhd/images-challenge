import React from 'react';
import ReactDOM from 'react-dom';
import ContainerComp from './ContainerComp';
import Header from './Header';

const App =() => {
  return(
    <div >
      <Header/>
      <ContainerComp />
    </div>
  );
};
ReactDOM.render(<App/>,document.querySelector('#root'));
