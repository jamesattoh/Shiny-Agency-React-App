import { formatJobList, formatQueryParams } from './'
import { setupServer } from 'msw/node'
import { rest } from 'msw'
import { render } from '../../utils/test'
import Results from './'
import { waitFor, screen } from '@testing-library/react'


 
describe('La fonction formatJobList', () => { //describe est une fonction de Jest qui permet de regrouper plusieurs tests sous un même nom. Ici, nous regroupons les tests sous le nom "La fonction formatJobList"
    test('ajoute une virgule à un item', () => {
        const expectedState = 'item2,'
        expect(formatJobList('item2', 3, 1)).toEqual(expectedState)
    })
    test('ne met pas de virgule pour le dernier élément', () => {
        const expectedState = 'item3'
        expect(formatJobList('item3', 3, 2)).toEqual(expectedState)
    })
}) //test()  prend une string  en premier argument  , puis une fonction en deuxième argument

describe('La fonction formatQueryParams', () => {
    it('doit utiliser le bon format pour le paramètre', () => {
      const expectedState = 'a1=answer1'
      expect(formatQueryParams({ 1: 'answer1' })).toEqual(expectedState)
    })
    it('doit concaténer les paramètres avec un &', () => {
      const expectedState = 'a1=answer1&a2=answer2'
      expect(formatQueryParams({ 1: 'answer1', 2: 'answer2' })).toEqual(
        expectedState
      )
    })
  })

  const resultsMockedData = [
    {
      title: 'seo',
      description: `Le SEO est en charge du référencement web d'une page`,
    },
    {
      title: 'frontend',
      description: `Le développeur ou la développeuse frontend se charge de l'interface : interactions avec l'utilisateur, style, etc.`,
    },
  ]

  const server = setupServer(
    rest.get('http://localhost:8000/results', (req, res, ctx) => {
      return res(ctx.json({ resultsData: resultsMockedData }))
    })
  )

  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  describe('The Results component', () => {
    test('should display the results after the data is loaded', async () => {
      render(<Results />)
      await waitFor(() => expect(screen.queryByTestId('loader')).not.toBeInTheDocument())
      const jobTitleElements = screen.getAllByTestId('job-title')
      expect(jobTitleElements[0].textContent).toBe('seo')
      expect(jobTitleElements.length).toBe(2)
      const jobDescriptionElements = screen.getAllByTestId('job-description')
      expect(jobDescriptionElements[1].textContent).toBe(
        resultsMockedData[1].description
      )
      expect(jobDescriptionElements.length).toBe(2)
    })
  })