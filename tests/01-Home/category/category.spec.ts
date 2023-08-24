import { test, expect } from '@playwright/test'
import { HomePage } from '../../pages/home-page'

const URL = 'https://automationexercise.com/'
let homePage: HomePage

test.beforeEach(async ({ page }) => {
  await page.goto(URL)
  homePage = new HomePage(page)
})

test.describe('View Category Products', () => {
  test('S01 S02 S03:should be able to navigate between the different categories', async ({
    page,
  }) => {
    await homePage.categoryIdentifier.scrollIntoViewIfNeeded()
    // await page.waitForTimeout(2000)
    await expect(homePage.categoryIdentifier).toBeVisible()
    //women
    await homePage.womenLabel.click()
    await expect(homePage.womenChild).toBeVisible()
    await homePage.womenChild.click()
    //Verify :" Women - Dress Products" is visible
    await expect(homePage.womenDressTitle).toBeVisible()
    //men
    await homePage.menLabel.click()
    await expect(homePage.menChild).toBeVisible()
    await homePage.menChild.click()
    await expect(homePage.menJeanTitle).toBeVisible()
  })
})
