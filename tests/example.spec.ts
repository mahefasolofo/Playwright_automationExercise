import { test, expect } from '@playwright/test'

const URL = 'https://automationexercise.com/'

test('has title', async ({ page }) => {
  await page.goto(URL)

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Automation Exercise/)
  expect(page.url()).toBe('https://automationexercise.com/');
})

test('get started link', async ({ page }) => {
  await page.goto(URL)

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click()

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/)
})
