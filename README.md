# Projeto C214 / Loja Tenis - Eng Software 

# :memo: Informações Gerais
Aprenda a instalar as dependências e recursos necessários e, a criar e executar um projeto angular.

## :wrench: Instalando: 
Instale o [Visual Studio Code](https://code.visualstudio.com/download) <br>
Instale o [Node.js](https://nodejs.org/en/download/) <br>
Instale o Angular CLI pela linha de comando, com:
```
npm install -g @angular/cli
```

# :new: Criando: 
## :small_blue_diamond: Um projeto
```
ng new project-name
```

## :small_blue_diamond: Um componente:
```
ng generate component nome
```

## :small_blue_diamond: Um módulo:
```
ng generate module nome
```
## :small_blue_diamond: Um serviço:
```
ng generate service nome
```

## :gear: Executando:
```
ng serve
```
ou
```
ng s -o
```

# :memo: Informações do Projeto
-A ideia do projeto é criar uma loja de vendas de tênis <br>
-Essa aplicação deve ser capaz de criar, atualizar, deletar e consultar as informações dos produtos


## Clonando e executando o projeto
Na linha de comando digite:
```
git clone https://github.com/SilvaInac/Loja_C214.git
```
Entre na pasta com:
```
cd Loja_C214
```
Abra o projeto no Visual Studio Code:
```
code .
```
Nesse mesmo terminal, instale as dependências com o comando:
```
npm i
```
E por fim, rode a aplicação com:
```
npm start 
```
e rode o servidor back-end:
```
node server.js
```

Observação: Há um script no arquivo package.json que possibilita que o projeto seja executado com o comando sugerido acima.

## :framed_picture: Front-end
A aplicação foi desenvolvida com o framework [Angular](https://angular.io/cli#cli-overview-and-command-reference) e possui duas telas:
### Home
Em que um usuário pode:
- Consultar os produtos disponíveis
- Adicionar produtos ao seu carrinho
- Pesquisar por um produto

<img width="508" alt="Screen Shot 2022-11-28 at 00 34 42" src="https://user-images.githubusercontent.com/90875966/204188769-a89caa60-8191-4a91-bfb0-061097486e2e.png">

<img width="508" alt="Screen Shot 2022-11-28 at 00 35 16" src="https://user-images.githubusercontent.com/90875966/204188870-0549700a-d58e-4abb-8778-d6cd5a3df917.png">

<img width="508" alt="Screen Shot 2022-11-28 at 00 35 34" src="https://user-images.githubusercontent.com/90875966/204188882-b80d81ad-c7a2-49bc-b5bc-8b83e00d53be.png">


### Carrinho
Em que um usuário pode:
- Consultar os produtos do seu carrinho
- Remover produtos do seu car

<img width="508" alt="Screen Shot 2022-11-28 at 00 34 56" src="https://user-images.githubusercontent.com/90875966/204188908-9237cdaf-4ea6-4457-ab0d-cbd326ca8ccd.png">

<img width="508" alt="Screen Shot 2022-11-28 at 00 40 01" src="https://user-images.githubusercontent.com/90875966/204189273-61fba300-870d-4a3b-9d7a-7aa265c609f5.png">



## :framed_picture: Back-end
No back-end foram usados:
- O banco de dados MongoDB
- O express que cria API's e conecta o mongo ao Angular
- O mongoose

Foi utilizado o NestJS

Para iniciar a API, é necessário abrir a pasta no vscode com nome de "loja-backend"
Para isso, utilizando um teminal basta abrir com o seguinte comando

```
cd loja-backend/
```
Feito isso, instale as dependeicas do servidor com o seguinte comando :
```
npm install
```
Com isso, o servidor estará pronto para ser iniciado.
```
npm start
```
Para editar o banco de dados que a API utiliza, é necessário modificar a linha 9 no arquivo app.module.ts -  dentro de src

  -LOJA_C214
  --src
  ---app.module.ts
  ----MongooseModule.forRoot('seu endereço aqui')
  
