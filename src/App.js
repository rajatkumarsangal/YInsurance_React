import './App.css';
import React from 'react';
import Header from './EndUserComponents/LayoutComponents/Header';
import Footer  from './EndUserComponents/LayoutComponents/Footer';

function App() {
  return (
    <React.Fragment>
      <div id="wrapper_all" style={{display: 'block;'}}>
      <Header></Header>
      <Footer></Footer>
</div>
    </React.Fragment>
  );
}

export default App;
