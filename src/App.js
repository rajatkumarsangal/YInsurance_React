import './App.css';
import React from 'react';
import Header from './EndUserComponents/LayoutComponents/Header';
import Footer  from './EndUserComponents/LayoutComponents/Footer';
import NavBar from './EndUserComponents/LayoutComponents/NavBar';
import PolicyCards from './EndUserComponents/LayoutComponents/PolicyCards';
import InstantCallback from './EndUserComponents/LayoutComponents/InstantCallback';

function App() {
  return (
    <React.Fragment>
      <div id="wrapper_all" style={{display: 'block;'}}>
      <Header></Header>
      <NavBar></NavBar>
      <PolicyCards></PolicyCards>
<InstantCallback/>
      <Footer></Footer>
</div>
    </React.Fragment>
  );
}

export default App;
