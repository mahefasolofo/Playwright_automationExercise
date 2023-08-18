import { test, expect } from '@playwright/test'

const URL = 'https://automationexercise.com/'

test.describe('Navigation on navbar', () => {
    
    test('S01: When I click on "Products" then I should arrive on the products page', async ({page}) => {
          await page.goto(URL)
          // await page.getByRole('button', {name: 'Close'}).click()
          await page.getByRole('link', {name: ' Products'}).click()
          await expect(page).toHaveTitle(/Automation Exercise - All Products/)
          await expect(page).toHaveURL(/.products/)
    })
    
    test('S02: When I click on "Cart" then I should arrive on the "view_cart" page', async ({page}) => {
      await page.goto(URL)
      await page.getByRole('link', {name: ' Cart'}).click()
      await expect(page).toHaveTitle(/Automation Exercise - Checkout/)
      await expect(page).toHaveURL(/.view_cart/)
  })

  test('S03: Signup/login verification - S04:As a non-logged in user when I click on "Signup/Login" I should arrive on the "login" page', async ({page}) => {
    await page.goto(URL)
    await page.getByRole('link', {name: ' Signup / Login'}).click()
    // await expect(page).toHaveTitle(/Automation Exercise - Signup / Login/)
    await expect(page).toHaveURL(/.login/)
  })
 
  test('S08: Navigation to Test Cases page', async ({page}) => {
    await page.goto(URL)
    await page.getByRole('link', {name: ' Test Cases', exact:true}).click()
    await expect(page).toHaveTitle(/Automation Practice Website for UI Testing - Test Cases/)
    await expect(page).toHaveURL(/.test_cases/)
  })
 
  test('S09: Navigation to API Testing page', async ({page}) => {
    await page.goto(URL)
    await page.getByRole('link', {name: ' API Testing'}).click()
    await expect(page).toHaveTitle(/Automation Practice for API Testing/)
    await expect(page).toHaveURL(/.api_list/)
  })
  
  test('S11: Navigate to Contact Us page', async ({page}) => {
    await page.goto(URL)
    await page.getByRole('link', {name: ' Contact us'}).click()
    await expect(page).toHaveTitle(/Automation Exercise - Contact Us/)
    await expect(page).toHaveURL(/.contact_us/)
  })
  
  test('S12: : Go to Home page', async ({page}) => {
    await page.goto(URL)
    await page.getByRole('link', {name: ' Home'}).click()
    await expect(page).toHaveTitle(/Automation Exercise/)  
  })

})