# Projeto C214 / Loja Tenis - Eng Software 

# :memo: Informações Gerais
Aprenda a instalar as dependências necessárias, criar e executar um projeto angular.

## :wrench: Instalação 
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

## :gear: Executando o projeto
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

### Carrinho
Em que um usuário pode:
- Consultar os produtos do seu carrinho
- Remover produtos do seu carrinho

## :framed_picture: Back-end
No back-end foram usados:
- O banco de dados MongoDB
- O express que cria API's e conecta o mongo ao Angular
- O mongoose
