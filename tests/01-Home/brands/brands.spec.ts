import { test, expect } from '@playwright/test'

const URL = 'https://automationexercise.com/'

test.describe('The number in brackets to the right of each brand name must be identical to the number of items corresponding to the brand', () => {
  test('S01: should have the Carousel automatically scrolling every 3 seconds', async ({
    page,
  }) => {
    await page.goto(URL)
    // Obtention de la valeur textuelle de l'élément 'homeSelectors.firstBrandNumbers'
    const numberElement = await page.$('homeSelectors.firstBrandNumbers')
    if (numberElement) {
      const numberText = await numberElement.innerText()

      // Extraction de la valeur numérique (en supprimant les caractères inutiles)
      const number = numberText.slice(1, -1)

      // Clic sur le lien '.brands-name .nav :nth-child(1) a'
      await page.click('.brands-name .nav :nth-child(1) a')

      // Attente jusqu'à ce que le sélecteur '.brands-name .nav :nth-child(1) a .pull-right' soit visible
      await page.waitForSelector(
        '.brands-name .nav :nth-child(1) a .pull-right',
      )

      // Comptage des éléments correspondant au sélecteur '.brands-name .nav :nth-child(1) a .pull-right'
      const count = await page.$$eval(
        '.brands-name .nav :nth-child(1) a .pull-right',
        (elements) => elements.length,
      )

      // Comparaison du nombre obtenu avec la valeur extraite précédemment
      expect(count.toString()).toBe(number)
    } else {
      console.log("L'élément n'a pas été trouvé.")
    }
  })
})
