import { test, expect } from '../base/base.ts';

test.beforeEach(async ({ loginPage }) => {
  await loginPage.goto();
});

test('Login com sucesso', async ({ page, loginPage }) => {
  //Arrange
  const username = 'standard_user';
  const password = 'secret_sauce';
  const UrlUserLogado = 'https://www.saucedemo.com/inventory.html'

  //Act
  await loginPage.typeUsername(username);
  await loginPage.typePassword(password);
  await loginPage.clickLoginButton();

  //Assert
  await expect(page).toHaveURL(UrlUserLogado);
});

test('Login sem senha deve retornar erro', async ({ loginPage }) => {
  //Arrange
  const username = 'standard_user';
  const mensagemErroPasswordVazio = 'Epic sadface: Password is required';
  
  //Act and Assert
  await loginPage.typeUsername(username);
  await loginPage.clickLoginButton();

  //Assert
  await loginPage.mensagemErro(mensagemErroPasswordVazio);
});

test('Login sem username deve retornar erro', async ({ loginPage }) => {
  //Arrange
  const password = 'secret_sauce';
  const mensagemErroUsernameVazio = 'Epic sadface: Username is required';
  
  //Act
  await loginPage.typePassword(password);
  await loginPage.clickLoginButton();

  //Assert
  await loginPage.mensagemErro(mensagemErroUsernameVazio);
});

test('Login senha invalida deve retornar erro', async ({ loginPage }) => {
  
  //Arrange
  const username = 'standard_user'
  const password = 'secret_sa';
  const mensagemErroPasswordIncorreto = 'Epic sadface: Username and password do not match any user in this service';
  
  //Act and Assert
  await loginPage.typeUsername(username);
  await loginPage.typePassword(password);
  await loginPage.clickLoginButton();

  //Assert
  await loginPage.mensagemErro(mensagemErroPasswordIncorreto);
});

