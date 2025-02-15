import { useContext } from 'react' //Hook de React pour utiliser le contexte
import { SurveyContext } from '../../utils/context'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { useFetch, useTheme } from '../../utils/hooks'
import { StyledLink, Loader } from '../../utils/style/Atoms'
import EmptyList from '../../components/EmptyList'

const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 60px 90px;
  padding: 30px;
  background-color: ${({ theme }) =>
    theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
`

const ResultsTitle = styled.h2`
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
  font-weight: bold;
  font-size: 28px;
  max-width: 60%;
  text-align: center;
  & > span { // > span cible tous les éléments <span> qui sont des enfants directs de ResultsTitle
    padding-left: 10px;
  }
`

const DescriptionWrapper = styled.div`
  padding: 60px;
`

const JobTitle = styled.span`
  color: ${({ theme }) =>
    theme === 'light' ? colors.primary : colors.tertiary};
  text-transform: capitalize;
`

const JobDescription = styled.div`
  font-size: 18px;
  & > p {
    color: ${({ theme }) => (theme === 'light' ? colors.secondary : '#ffffff')};
    margin-block-start: 5px;
  }
  & > span {
    font-size: 20px;
  }
`

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`

/** Fonction pour formater les paramètres de la requête HTTP en fonction des réponses du questionnaire. */
function formatQueryParams(answers) {
  const answerNumbers = Object.keys(answers)

  return answerNumbers.reduce((previousParams, answerNumber, index) => {
    const isFirstParam = index === 0
    const separator = isFirstParam ? '' : '&'
    return `${previousParams}${separator}a${answerNumber}=${answers[answerNumber]}`
  }, '')
}

/** formatJobList prend trois arguments : un titre (title), la longueur de la liste (listLength), et l'index de l'élément (index).
Si l'élément n'est pas le dernier de la liste (index < listLength - 1), la fonction ajoute une virgule à la fin du titre.
Si l'élément est le dernier de la liste (index === listLength - 1), la fonction ne met pas de virgule. */

export function formatJobList(title, listLength, index) {
  if (index === listLength - 1) {
    return title
  }else{
    return `${title},`
  }
}

function Results() {

  const { theme } = useTheme()   //Récupère le thème actuel
  const { answers } = useContext(SurveyContext) //Récupère les réponses du questionnaire
  const queryParams = formatQueryParams(answers) //Formate les paramètres de la requête HTTP

  const { data, isLoading, error } = useFetch( //Effectue la requête HTTP pour obtenir les résultats
  `http://localhost:8000/results?${queryParams}` //L'URL de la requête inclut les paramètres formatés (queryParams), ce qui permet de passer les réponses du questionnaire à l'API.
  )

  if (error) {
    return <span>Il y a un problème</span>
  }
  
  /**data?.resultsData signifie "accéder à resultsData seulement si data n'est pas null ou undefined"
   *   resultsData est la propriété de l'objet data qui contient les résultats du questionnaire et est aussi predefinie danas l'api sur http://localhost:8000/results
   *   L'utilisation du chaînage optionnel permet d'éviter les erreurs lorsque data n'est pas encore disponible (par exemple, pendant le chargement des données). Sans le chaînage optionnel, essayer d'accéder à data.resultsData lorsque data est null ou undefined provoquerait une erreur.
   *   forme simple : const resultsData = data ? data.resultsData : undefined 
  */
  const resultsData = data?.resultsData

  if (resultsData?.length < 1) {
    return <EmptyList theme={theme} />
  }

  return isLoading ? (
    <LoaderWrapper>
      <Loader />
    </LoaderWrapper>
  ) : (
    <ResultsContainer theme={theme}>
      <ResultsTitle theme={theme}>
        Les compétences dont vous avez besoin :
        {resultsData &&
          resultsData.map((result, index) => (
            <JobTitle
              key={`result-title-${index}-${result.title}`}
              theme={theme}
            >
              {formatJobList(result.title, resultsData.length, index)}
            </JobTitle>
          ))}
      </ResultsTitle>
      <StyledLink $isFullLink to="/freelances">
        Découvrez nos profils
      </StyledLink>
      <DescriptionWrapper>
        {resultsData &&
          resultsData.map((result, index) => (
            <JobDescription
              theme={theme}
              key={`result-detail-${index}-${result.title}`}
            >
              <JobTitle theme={theme}>{result.title}</JobTitle>
              <p>{result.description}</p>
            </JobDescription>
          ))}
      </DescriptionWrapper>
    </ResultsContainer>
  )
}

export default Results