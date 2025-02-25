import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home'
import Survey from './pages/Survey'
import Header from './components/Header'

import Error from './components/Error';
import Results from './pages/Results';
import Freelances from './pages/Freelances';

import { SurveyProvider, ThemeProvider } from './utils/context';
import Footer from './components/Footer';

import GlobalStyle from './utils/style/GlobalStyle';
import ProfileContainer from './components/ProfileContainer';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const MainContent = styled.main`
  flex: 1;
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider> {/*ThemeContext.Provider est utilise ici pour fournir le contexte personnalisé */}
        <SurveyProvider>
          <GlobalStyle/>
          <AppContainer>
            <Header /> {/* gere la navigation; doit rester a la racine du projet  */}
            <MainContent>
              <Routes>
                <Route path='/' element={ <Home />} />
                <Route path='/survey/:questionNumber' element={ <Survey />} /> {/* utilisation des parametres passes dans l'url  */}
                <Route path='*' element={ <Error />} />
                <Route path='/results' element={ <Results /> }/>
                <Route path='/freelances' element={ <Freelances /> }/>
                <Route 
                  path="/profile/:id" 
                  element={<ProfileContainer />} 
                />
              </Routes>
            </MainContent>    
            <Footer />
          </AppContainer>  
        </SurveyProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>
)