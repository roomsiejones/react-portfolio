import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header/header';
import contactForm from './components/contact-form/contact-form';
import cards from './components/cards/cards';
import hero from './components/hero/hero';
import Footer from './components/footer/footer';

function App() {
  return (
    <BrowserRouter>
    <div>
        <Header />
          <Switch>
            <Route component={ contactForm } path='/contact' />
            <Route component={ hero } path='/about-me' />
            <Route component={ cards } path='/projects' />
            {/* <Route component={} path='' />
            <Route component={} path='' /> */}
          </Switch>
    
        <Footer />
    </div>
    </BrowserRouter>
  );

}

export default App;

// USE activity 24