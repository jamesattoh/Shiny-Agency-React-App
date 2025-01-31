import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home'
import Survey from './pages/Survey'
import Header from './components/Header'

import Error from './components/Error';
import Results from './pages/Results';
import Freelances from './pages/Freelances';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle` //creation du style global dy projet avec createGlobalStyle
  * {
    font-family: 'Trebuchet MS', Helvetica, sans-serif;
  }

  body {
      margin: 0;
  }
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle/>
      <Header /> {/* gere la navigation; doit rester a la racine du projet  */}
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/survey/:questionNumber' element={ <Survey />} /> {/* utilisation des parametres passes dans l'url  */}
        <Route path='*' element={ <Error />} />
        <Route path='/results' element={ <Results /> }/>
        <Route path='/freelances' element={ <Freelances /> }/>
         
      </Routes>
    </Router>
  </React.StrictMode>
)