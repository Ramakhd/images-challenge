import React from 'react';
import ReactDOM from 'react-dom';
import ContainerComp from './ContainerComp';

const App =() => {
  return(
    <div>
      <ContainerComp />
    </div>
  );
};
ReactDOM.render(<App/>,document.querySelector('#root'));
