import { test, expect } from '@playwright/test'

const URL = 'https://automationexercise.com/'

test.describe('Carousel buttons test', () => {
  // WEL-T863
  test('S06: I should have the Test cases and API Testing buttons on the carousel slide', async ({
    page,
  }) => {
    await page.goto(URL)
    const buttons = await page.locator(
      '#slider-carousel .carousel-inner .active .col-sm-6 .btn-success',
    )
    const first_button = buttons.nth(0)
    const second_button = buttons.nth(1)
    await expect(first_button).toHaveText(/Test Cases/)
    await expect(second_button).toHaveText(/APIs list for practice/)
  })

  // WEL-T805 - WEL-T806
  test('S04: when I click on one of the buttons I should be redirected to the corresponding page', async ({
    page,
  }) => {
    await page.goto(URL)
    const buttons = await page.locator(
      '#slider-carousel .carousel-inner .active .col-sm-6 .btn-success',
    )
    const first_button = buttons.nth(0)
    const second_button = buttons.nth(1)
    await first_button.click()
    await expect(page).toHaveURL(/.test_cases/)
    const accueil = await page.locator('.logo a')
    // await page.goto(URL)
    await accueil.click()
    await second_button.click()
    await expect(page).toHaveURL(/.api_list/)
  })
})
