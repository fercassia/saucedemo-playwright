import { test, expect } from '../base/base-step.ts';

test.beforeEach(async ({ loginStep }) => {
  await loginStep.goto();
});

test('Login com sucesso', async ({ page, loginStep }) => {
  //Arrange
  const username = 'standard_user';
  const password = 'secret_sauce';
  const UrlUserLogado = 'https://www.saucedemo.com/inventory.html'

  //Act
  // await loginStep.goto();
  await loginStep.login(username, password);

  //Assert
  await expect(page).toHaveURL(UrlUserLogado);
});

test('Login sem senha deve retornar erro', async ({ loginStep }) => {
  //Arrange
  const username = 'standard_user';
  const mensagemErroPasswordVazio = 'Epic sadface: Password is required';
  
  //Act and Assert
  await loginStep.loginSemPassword(username, mensagemErroPasswordVazio);
});

test('Login sem username deve retornar erro', async ({ loginStep }) => {
  //Arrange
  const password = 'secret_sauce';
  const mensagemErroUsernameVazio = 'Epic sadface: Username is required';
  
  //Act and Assert
  await loginStep.loginSemUsername(password, mensagemErroUsernameVazio);
});

test('Login senha invalida deve retornar erro', async ({ loginStep }) => {
  
  //Arrange
  const username = 'standard_user'
  const password = 'secret_sa';
  const mensagemErroPasswordIncorreto = 'Epic sadface: Username and password do not match any user in this service';
  
  //Act and Assert
  await loginStep.loginFalha(username, password,mensagemErroPasswordIncorreto);
});

