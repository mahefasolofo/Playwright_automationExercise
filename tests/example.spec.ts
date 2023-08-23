import { test, expect } from '@playwright/test'

const URL = 'https://automationexercise.com/'

test.describe('Automation Exercise Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(URL)
  })

  test('has title', async ({ page }) => {
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Automation Exercise/)
    expect(page.url()).toBe(URL)
    await page.getByRole('link', { name: ' Products' }).click()
    
    const isVisible = await page.$eval('#ad_position_box', (element) => {
      return (
        window.getComputedStyle(element).getPropertyValue('display') !== 'none'
      )
    })

    if (isVisible) {
      // Masquez l'élément en utilisant JavaScript
      await page.$eval('#ad_position_box', (element) => {
        element.style.display = 'none'
      })
    }

    await expect(page).toHaveTitle(/Automation Exercise - All Products/)
    await expect(page).toHaveURL(/.products/)
  })
})
