import { expect, FrameLocator, type Locator, type Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly username: Locator;
  readonly password: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.username = page.getByTestId('username');
    this.password = page.getByTestId('password');
    this.loginButton = page.getByRole('button', { name: 'LOGIN' });
    this.errorMessage = page.getByTestId('error');
  }
  async goto() {
    await this.page.goto('/');
  }
  async typeUsername(username: string) {
    await this.username.fill(username);
  }
  async typePassword(password: string) {
    await this.password.fill(password);
  }
  async clickLoginButton() {
    await this.loginButton.click();
  }
  async mensagemErro(mensagemErro: string) {
    await expect(this.errorMessage).toContainText(mensagemErro);
  }
}