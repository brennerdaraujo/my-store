# Projeto My Store

My Store é um projeto simples de simulação de um e-commerce.
<br><br>

# Estrutura

A estrutura do projeto possui o frontend (Angular com Angular Material), o backend (NodeJS com Express, através do padrão Repository Pattern) e o banco de dados relacional (Sqlite).
<br><br>

# Telas

Veja abaixo os prints das telas disponíveis no sistema:

![Exibição de produtos em vitrine](prints/page1.png "Exibição de produtos em vitrine")

![Detalhes do produto](prints/page2.png "Detalhes do produto")

![Detalhes do produto com estoque indisponível](prints/page7.png "Detalhes do produto com estoque indisponível")

![Listagem de produtos na área administrativa](prints/page3.png "Listagem de produtos na área administrativa")

![Listagem de produtos na área administrativa com filtro](prints/page6.png "Listagem de produtos na área administrativa com filtro")

![Adicionar produto](prints/page4.png "Adicionar produto")

![Editar produto](prints/page5.png "Editar produto")

<br><br>

# Como executar

## Dentro do diretório backend, execute os seguintes comandos:

- ### Comando que instala as dependências necessárias do projeto
        npm install
<br>

- ### Comando que executa as migrations que irão criar as tabelas do banco de dados
        npm run migrations
<br>

- ### Comando que cria e/ou atualiza o Swagger
        npm run swagger
<br>

- ### Comando que inicia o servidor de backend na porta 3333.
        npm start
<br>

## Dentro do diretório frontend, execute o seguinte comando:

- ### Comando que instala as dependências necessárias do projeto
        npm install
<br>

- ### Comando que inicia o sistema de frontend na porta 4200. Para que o frontend funcione corretamente, o servidor de backend deverá estar funcionando, para que haja uma conexão entre os dois. 
        npm start

<br><br>

# Swagger

### O Swagger estará disponível através da url do servidor de backend, na rota /docs. Exemplo:
    http://localhost:3333/docs