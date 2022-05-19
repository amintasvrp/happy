<h4 align="center">
  <img src="./web/src/images/logo.svg"></a>
  <br></br>
  Bring happiness to the world: Visit an orphanage and change the day of many children. 
</h4>

<p align="center">
  <img alt="Node.js" src="https://img.shields.io/badge/-Node.js-43853d?style=for-the-badge&logo=nodedotjs&logoColor=white" />
  <img alt="React" src="https://img.shields.io/badge/-React-45b8d8?style=for-the-badge&logo=react&logoColor=white" />
  <img alt="React Native" src="https://img.shields.io/badge/-React Native-764ABC?style=for-the-badge&logo=react&logoColor=white" />
  <img alt="Insomnia" src="https://img.shields.io/badge/-Insomnia-5849BE?style=for-the-badge&logo=insomnia&logoColor=white" />
</p>

Happy is an web/mobile application that encourages visiting orphanages to change the day of many children.

## Demo

<p float="center">
  <img src="./docs/happy-web.gif" width="750" />
  <img src="./docs/happy-mobile.gif" width="151" />
</p>

## Getting Started

### **Architecture**

1. **API**: the server;
2. **WEB**: the web interface;
3. **MOBILE**: the native interfaces for Android and iOS.

### **Prerequisites**

- It is **necessary** to have **[Node.js](https://nodejs.org/en/)** installed on the machine;
- Also, it is **necessary** to have a package manager either **[NPM](https://www.npmjs.com/)** or **[Yarn](https://yarnpkg.com/)**;
- Finally, it is **essential** to have **[Expo](https://expo.io/)** installed globally on the machine.

1. Make a clone:

```sh
   git clone https://github.com/amintasvrp/be-the-hero.git
```

2. Running the Application:

```sh
  # Install dependencies, create the database
  # and launch the server
  cd api
  yarn
  yarn migrations
  yarn start


  # Install and launch the web application
  cd web
  yarn
  yarn start

  # Install and launch the mobile application
  cd mobile
  yarn
  yarn start
```

## Contributing

Make a pull request and make clear what changes have been made and which bugs persist. Do not introduce bugs, be proactive!

## Licenses

- **MIT License** - [_Ver detalhes_](./LICENSE.txt)
