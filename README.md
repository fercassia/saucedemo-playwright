# Docker Build e Publish Images

Projeto __simples__ criado apenas para estudos sobre __testes e conteiners__, virtualização e docker. Com objetivo de entender a criação de imagens, container e testes automatizados em containers.

#### Informações sobre estudos:
___Docker___
> [TechWorld With Nana. Docker Crash Course for Absolute Beginners. Youtube, Fev. 2023](https://www.youtube.com/watch?v=pg19Z8LL06w)

> [Komalminhas. A step-by-step guide to Build And Push Your Own Docker Images To DockerHub. Medium, Ago. 2023](https://medium.com/@komalminhas.96/a-step-by-step-guide-to-build-and-push-your-own-docker-images-to-dockerhub-709963d4a8bc)

> [TechWorld With Nana. From Zero to DevOps Engineer - DevOps Roadmap for YOUR specific background. Medium, Out. 2022](https://dev.to/techworld_with_nana/from-zero-to-devops-engineer-devops-roadmap-for-your-specific-background-4h8n)

> [Fernanda Kipper | Dev. APRENDA DOCKER DO ZERO | TUTORIAL COMPLETO COM DEPLOY. Youtube, Abr. 2024](https://www.youtube.com/watch?v=DdoncfOdru8&t=13s)

> [Onyeanuna, P. Build a Docker Image and Push to Docker Hub: A Quick Guide. EverythingDevOps, Mai. 2024](https://everythingdevops.dev/build-a-docker-image-and-push-to-docker-hub-a-quick-guide/)

___Playwright___
> [Pandiyan, P. Running Playwright Tests in a Docker Container Locally and Viewing the Report. Medium, Set. 2024](https://pradappandiyan.medium.com/running-playwright-tests-in-a-docker-container-locally-and-viewing-the-report-2303599246da)

## Instalação projeto
- Rode o comando para baixar a imagem do projeto `docker pull fercassia/test-container:latest`
- Rode o comando para rodar os testes `docker run --rm {nomeDaImagem}:{tag}`

__OU__

- Rode o comando para rodar os testes e gerar report na maquina `docker run --rm -v $(pwd):/e2e/src -v $(pwd)/playwright-report:/e2e/src/playwright-report -w /e2e/src tests-container:{tag}`

___Bonus___
- Clone o projeto `https://github.com/fercassia/saucedemo-playwright`
- Entre na pasta e divirta-se

## Tecnologias utilizadas no Desenvolvimento

- Playwright - [1.47.0](https://playwright.dev/)

## Arquitetura

- `src`: Diretório responsável por armazenar arquivos de Page Objects, Testes, Steps, Base.
    
- `.gitignore`: Arquivo responsável por indicar arquivos/diretórios para serem ignorados ao subir para o repositório (p.ex: node_modules).

- `.dockerignore`: Arquivo responsável por indicar arquivos/diretorios para serem ignorados ao seri criado um containner daquela imagem.

- `package.json`: Arquivo responsável por armazenar as dependências do projeto.

- `Dockerfile`: Arquivo responsável configurar a imagem da aplicação.

- `playwright.config.ts`: Arquivo responsavel por configuração do framework playwright.

## Comandos adicionaistag
- Rode o comando para iniciar o container sem gerar acesso ao report `docker run -d {nomeImagem}:{tag}`
- Rode o comando para pausar o containner `docker stop {{containerId}}`
- Rode o comando para iniciar o container já criado `docker start {{containerId}}`

