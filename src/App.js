import './App.css';
import React from 'react';
import Header from './EndUserComponents/LayoutComponents/Header';
import Footer from './EndUserComponents/LayoutComponents/Footer';
import NavBar from './EndUserComponents/LayoutComponents/NavBar';
// import PolicyCards from './EndUserComponents/LayoutComponents/PolicyCards';
// import InstantCallback from './EndUserComponents/LayoutComponents/InstantCallback';
// import Testimonial from './EndUserComponents/LayoutComponents/Testimonial';
import BodyContent from './EndUserComponents/LayoutComponents/BodyContent';
import Error from './Error';
import { Route, Switch } from 'react-router-dom';
import AboutUs from './EndUserComponents/AboutUs';
import ContactUs from './EndUserComponents/ContactUs';
import Products from './EndUserComponents/Products';
import Login from './Login/Login';
import Registration from './Registration/Registration';


function App() {
    return ( 
        <React.Fragment >
        <div id = "wrapper_all" style = {{ display: 'block;' } } >
        <Header> </Header> 
        <NavBar> </NavBar> 
        <Switch> {
            /* <PolicyCards></PolicyCards>
                    <InstantCallback />
                    <Testimonial /> */
        } 
        <Route exact path = '/' component = { BodyContent } /> 
        <Route exact path = '/about-us' component = { AboutUs } /> 
        <Route exact path = '/contact-us' component = { ContactUs } /> 
        <Route exact path = '/products' component = { Products } /> 
        <Route exact path = '/login' component = { Login } />
        <Route exact path='/registration' component={Registration}/>
        <Route component = { Error } /> 
        </Switch> 
        { /* <BodyContent /> */ } 
        <Footer> </Footer> 
        </div>
        </React.Fragment>
    );
}

export default App;