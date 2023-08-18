import { test, expect } from '@playwright/test'

const URL = 'https://automationexercise.com/'

test('Carousel buttons test', async ({ page }) => {
  await page.goto(URL)

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Automation Exercise/)
  expect(page.url()).toBe('https://automationexercise.com/');
})


