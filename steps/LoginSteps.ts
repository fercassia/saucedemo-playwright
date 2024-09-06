import { expect, type Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginObject';

export class LoginStep {
  readonly page: Page
  readonly loginPage: LoginPage;
  
  constructor(page: Page){
    this.page = page;
    this.loginPage = new LoginPage(this.page);
  }
  async goto() {
    await this.loginPage.goto();
  }

  async login(username: string, password: string) {
    await this.loginPage.typeUsername(username);
    await this.loginPage.typePassword(password);
    await this.loginPage.clickLoginButton();
  }
  
  async loginFalha(username: string, password: string, erroMessage: string) {
    await this.loginPage.typeUsername(username);
    await this.loginPage.typePassword(password);
    await this.loginPage.clickLoginButton();
    await this.loginPage.mensagemErro(erroMessage);
  }

  async loginSemUsername(password: string, erroMessage: string) {
    await this.loginPage.typePassword(password);
    await this.loginPage.clickLoginButton();
    await this.loginPage.mensagemErro(erroMessage);
  }

  async loginSemPassword(username: string, erroMessage: string) {
    await this.loginPage.typeUsername(username);
    await this.loginPage.clickLoginButton();
    await this.loginPage.mensagemErro(erroMessage);
  }
}