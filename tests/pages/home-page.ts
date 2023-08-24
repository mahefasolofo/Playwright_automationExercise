import { type Locator, type Page, expect } from '@playwright/test'

export class HomePage {
  //variables
  readonly page: Page
  readonly buttons: Locator
  readonly testcasesButton: Locator
  readonly apisListButton: Locator
  readonly homeLogoButton: Locator
  readonly testCaseURL: RegExp
  readonly apisListURL: RegExp
  //sidebar
  readonly categoryIdentifier: Locator
  readonly womenLabel: Locator
  readonly womenChild: Locator
  readonly womenDressTitle: Locator
  readonly menLabel: Locator
  readonly menChild: Locator
  readonly menJeanTitle: Locator
  //feature items
  readonly featuresItemsTitle: Locator

  //constructor
  constructor(page: Page) {
    this.page = page
    this.homeLogoButton = page.locator('.logo a')
    this.buttons = page.locator(
      '#slider-carousel .carousel-inner .active .col-sm-6 .btn-success',
    )
    this.testcasesButton = this.buttons.nth(0)
    this.apisListButton = this.buttons.nth(1)
    this.testCaseURL = /.test_cases/
    this.apisListURL = /.api_list/
    this.categoryIdentifier = page.getByRole('heading', { name: 'Category' })
    this.womenLabel = page.locator(
      '#accordian .panel .panel-heading [href="#Women"]',
    )
    this.womenChild = page.locator('#Women .panel-body ul a').first()
    this.womenDressTitle = page.locator(
      '.features_items .title:has-text("Women - Dress Products")',
    )
    this.menLabel = page.locator(
      '#accordian .panel .panel-heading [href="#Men"]',
    )
    this.menChild = page.locator('#Men .panel-body ul a').first()
    this.menJeanTitle = page.locator(
      '.features_items .title:has-text("Men - Jeans Products")',
    )
    this.featuresItemsTitle = page.locator(
      '.features_items .title:has-text("Features Items")',
    )
  }
  //methods
  async clickHomeButton() {
    await this.homeLogoButton.click()
  }
  async testCaseTitle() {
    await expect(this.page).toHaveURL(this.testCaseURL)
  }

  async apisListTitle() {
    await expect(this.page).toHaveURL(this.apisListURL)
  }
}

export default HomePage
