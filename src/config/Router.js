import React from 'react';
import { BrowserRouter as Router, Route, } from "react-router-dom";
import Header from '../Components/Header';
import Home from '../Components/Home';
import About from '../Components/About';
import Contact from '../Components/Contact'
import Services from '../Components/Services'
import Footer from '../Components/footer'


class AppRouter extends React.Component{
    render(){
        return(
        <Router>
        <Route exact path="/" component={Home}/> 
        <Route exact path="/header" component={Header}/> 
        <Route exact path="/about" component={About}/>
        <Route exact path="/contact" component={Contact}/> 
        <Route exact path="/services" component={Services}/>
        <Route exact path="/footer" component={Footer}/>
         
        </Router>
        )
    }
}
export default AppRouter;