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

const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Trebuchet MS', Helvetica, sans-serif;
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
        <Route path='/survey/:questionNumber' element={ <Survey />} />
        <Route path='*' element={ <Error />} />
        <Route path='/results' element={ <Results /> }/>
        <Route path='/freelances' element={ <Freelances /> }/>
         
      </Routes>
    </Router>
  </React.StrictMode>
)