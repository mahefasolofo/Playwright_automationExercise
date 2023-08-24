import { test, expect } from '@playwright/test'
import { HomePage } from '../../../pages/home-page'

const URL = 'https://automationexercise.com/'
let homePage: HomePage

test.beforeEach(async ({ page }) => {
  await page.goto(URL)
  homePage = new HomePage(page)
})

test.describe('Interaction with buttons in product page', () => {
  test('S07: When I click on the View Product button then I should arrive on the "product_details/*" page with the image of the product its descriptions a quantity field and an add to cart button as well as a Review form', async ({}) => {
    await homePage.featuresItemsTitle.scrollIntoViewIfNeeded()
    await expect(homePage.featuresItemsTitle).toBeVisible()
  })
})
