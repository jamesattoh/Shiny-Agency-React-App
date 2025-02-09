import { createContext, useState } from "react";


export const ThemeContext = createContext() //creation du contexte

export const ThemeProvider = ({ children }) => { //ThemeProvider, composant fourni par une bibliothèque de gestion de themes comme styled-components 
    const [theme, setTheme] = useState('light')
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }
 
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}> {/* ThemeContext.Provider est utilisé pour fournir un contexte personnalisé */}
            {children}
        </ThemeContext.Provider>
    )
}

export const SurveyContext = createContext() 

export const SurveyProvider = ({ children }) => {
  const [answers, setAnswers] = useState({}) //initialise l'état answers comme un objet vide. Cet état stockera les réponses du questionnaire
  const saveAnswers = (newAnswers) => { //cette fonction met à jour l'état answers en fusionnant les nouvelles réponses (newAnswers) avec les réponses existantes
    setAnswers({ ...answers, ...newAnswers }) //utilisation du spread operateur "..." pour la fusion des tableaux 
  }

  return (
    <SurveyContext.Provider value={{ answers, saveAnswers }}> {/* SurveyContext.Provider fournit les valeurs answers et saveAnswers aux composants enfants qui consomment ce contexte */}
      {children}
    </SurveyContext.Provider>
  )
}