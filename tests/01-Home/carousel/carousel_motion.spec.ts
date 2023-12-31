import { test, expect } from '@playwright/test'

const URL = 'https://automationexercise.com/'

test.describe('Carousel motion test', () => {
  //WEL-T802
  test('S01: should have the Carousel automatically scrolling every 3 seconds', async ({
    page,
  }) => {
    await page.goto(URL)
    const carouselItem1 = await page.locator('.carousel-inner .item').nth(0)
    const carouselItem2 = await page.locator('.carousel-inner .item').nth(1)
    await page.waitForTimeout(5000)
    await expect(carouselItem1).not.toHaveClass('item active')
    await expect(carouselItem2).toHaveClass('item active')
  })
})
