import { test, expect } from '@playwright/test'
import { HomePage } from '../../../pages/home-page'

const URL = 'https://automationexercise.com/'
let homePage: HomePage

test.beforeEach(async ({ page }) => {
  await page.goto(URL)
  homePage = new HomePage(page)
})

test.describe('Feature Items content', () => {
  test('S01: should have the Section Feature Items', async ({ page }) => {
    await homePage.featuresItemsTitle.scrollIntoViewIfNeeded()
    await expect(homePage.featuresItemsTitle).toBeVisible()
  })
  test('S02: Details of each card in feature items must be available', async ({}) => {
    await homePage.featuresItemsTitle.scrollIntoViewIfNeeded()
    await expect(homePage.featuresItemsTitle).toBeVisible()
  })
})
