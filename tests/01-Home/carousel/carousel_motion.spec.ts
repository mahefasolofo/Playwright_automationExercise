import { test, expect } from '@playwright/test'

const URL = 'https://automationexercise.com/'

test.describe('Carousel motion test', () => {
  //WEL-T802
  test('S01: should have the Carousel automatically scrolling every 3 seconds', async ({
    page,
  }) => {
    await page.goto(URL)
    const carouselItem = await page.locator('.carousel-inner .item').nth(0)
    await page.waitForTimeout(5000)
    const hasActiveClass = await carouselItem.locator('active')
    // await expect(hasActiveClass).toBeFalsy()
  })
})
