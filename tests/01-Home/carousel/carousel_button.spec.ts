import { test, expect } from '@playwright/test'
import { HomePage } from '../../pages/home-page'

const URL = 'https://automationexercise.com/'
let homePage: HomePage

test.beforeEach(async ({ page }) => {
  await page.goto(URL)
  homePage = new HomePage(page)
})
test.describe('Carousel buttons test', () => {
  // WEL-T863
  test('S06: I should have the Test cases and API Testing buttons on the carousel slide', async ({
    page,
  }) => {
    await expect(homePage.testcasesButton).toBeVisible()
    // await homePage.testcasesButton.click()
    await expect(homePage.apisListButton).toBeVisible()
    // await homePage.apisListButton.click()
  })

  // WEL-T805 - WEL-T806
  test('S04: when I click on one of the buttons I should be redirected to the corresponding page', async ({
    page,
  }) => {
    //go to Tests Cases via Carousel Button
    await homePage.testcasesButton.click()
    await homePage.testCaseTitle()

    //return to home
    await homePage.homeLogoButton.click()
    await expect(page).toHaveURL(URL)

    //go to APIs List via Carousel Button
    await homePage.apisListButton.click()
    await homePage.apisListTitle()
  })
})
