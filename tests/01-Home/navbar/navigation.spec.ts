import { test, expect } from '@playwright/test'

const URL = 'https://automationexercise.com/'

test.describe('Testing URL', () => {
  test('S01: When I type the URL of the site I arrive on the home page', async ({
    page,
  }) => {
    await page.goto(URL)

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Automation Exercise/)
    await expect(page.url()).toBe('https://automationexercise.com/')
  })
})
