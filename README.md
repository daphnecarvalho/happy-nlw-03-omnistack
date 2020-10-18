<h1 align="center">
    Happy
</h1>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-executando-projeto">Executando o Projeto</a>
</p>

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [React](https://reactjs.org)
- [React Native](https://facebook.github.io/react-native/)
- [Expo](https://expo.io/)
- [TypeScript](https://www.typescriptlang.org/)

## 💻 Projeto

O Happy é uma aplicação que conecta pessoas à casas de acolhimento institucional para fazer o dia de muitas crianças mais feliz 💜

## ⌨ Executando o Projeto

### 🗄️ Configurando o módulo do servidor

```bash
# Acesse a pasta do projeto backend
$ cd backend

# Instale as dependências
$ yarn install

# Execute as migrations do banco de dados
$ yarn typeorm migration:run

# Execute o projeto
$ yarn dev
```

### 🖥️ Configurando o módulo do site

```bash
# Acesse a pasta do projeto web
$ cd web

# Instale as dependências
$ yarn install

# Adicione as variáveis de ambiente
-> Crie um arquivo com o nome '.env'
# Crie uma conta gratuita no MapBox para pegar seu token
-> https://account.mapbox.com
# Salve o token no arquivo .env
-> REACT_APP_MAPBOX_TOKEN=TOKEN

# Execute o projeto
$ yarn start
```

### 📱 Configurando o módulo do aplicativo

```bash
# Acesse a pasta do servidor
$ cd mobile

# Instale as dependências
$ yarn install

# Execute o projeto
$ yarn start
```
