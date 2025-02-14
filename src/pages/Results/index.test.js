import { formatJobList, formatQueryParams } from './'
 
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