<p align="center">

<a href="https://www.instagram.com/frantchessico/"><img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"></a>

<a href="https://twitter.com/InoqueJaime"><img src="https://cdn.pixabay.com/photo/2014/04/03/11/53/twitter-312464_960_720.png"></a>

</p>

# todoDragDropPWA

O todoDragDropPWA é um PWA Angular desenvolvido com o Firebase.

- [Veja o Demo](https://todoportfoliofirebaseauth.firebaseapp.com/)
- [Meu Portfolio](https://franciscoinoqueportfolio.firebaseapp.com/)


![](https://franciscoinoqueportfolio.firebaseapp.com/assets/img/francisco_portfolio_pwa.png)

## Funcionalidades

- Angular 8.x + Firebase
- Instalavel, PWA
- OAuth e inscrição de e-mail / senha com Firebase
- Arraste e solte a demonstração Kanban com o Firestore
- SSR universal angular com Nest.js implantado no Google Cloud Run
- Script de pré-renderização SSR opcional

## Uso

1. Corra
- `git clone https://github.com/codediodeio/angular-firestarter.git firestarter`
- `cd firestarter`
- `npm install`

2. Crie um projeto em https://firebase.google.com/ and grab your web config:

![](https://firebasestorage.googleapis.com/v0/b/firestarter-96e46.appspot.com/o/project-config.PNG?alt=media&token=5eabb205-7ba2-4fc3-905f-e9547055e754)

3. Adicione a configuração ao seu ambiente Angular

#### src/environments/

Atualize o `environment.prod.ts` and `environment.ts` filas. 

```typescript
export const environment = {
  production: false,
  firebase: {
    apiKey: 'APIKEY',
    authDomain: 'DEV-APP.firebaseapp.com',
    databaseURL: 'https://DEV-APP.firebaseio.com',
    projectId: 'DEV-APP',
    storageBucket: 'DEV-APP.appspot.com',
    messagingSenderId: '...',
    appId: '...',
  }
};
```


5. Execute `ng serve`
