import React from 'react';
import './Main.css';
import { Switch, Route } from 'react-router-dom';
import SemanticHomePage from './HomePage/SemanticHomePage'
import AboutNasaPage from './AboutPage/AboutNasaPage';
import ContactSUI from './Contact/ContactSUI'; 

const Main = (props) => (
  <main>
    <Switch>
      <Route exact path="/">
        <SemanticHomePage onLanguageChange={props.onLanguageChange}/>
      </Route>
      <Route path="/Nasa-news">
        <AboutNasaPage />
      </Route>
      <Route path="/Contact">
        <ContactSUI />
      </Route>
    </Switch>
  </main>
);

export default Main;