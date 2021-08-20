import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header/header';
import contactForm from './components/contact-form/contact-form';
import cards from './components/cards/cards';
import hero from './components/hero/hero';
import Footer from './components/footer/footer';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <div>
        <Header />
          <Switch>
            <Route component={ contactForm } exact path='/contact' />
            <Route component={ hero } exact path='/about-me' />
            <Route component={ cards } exact path='/projects' />
            <Route component={ hero } exact path='/' />
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