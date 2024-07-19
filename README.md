# Cadastro de Contas Bancárias

## Descrição

Este é um projeto de cadastro de contas bancárias pessoais, desenvolvido utilizando Angular para o front-end e `localStorage` para o armazenamento dos dados. A aplicação permite que os usuários cadastrem novas contas bancárias, visualizem uma lista de bancos disponíveis e filtrem os bancos por código.

## Tecnologias Utilizadas

- **Angular**
  - Framework para desenvolvimento de aplicações web front-end.
  - Utilizado para implementar as páginas e componentes, roteamento, e estilização responsiva.
  - Exemplos:
    - `home.component.html`: Página inicial da aplicação.
    - `bank-list.component.html`: Página de listagem de bancos.
    - `bank-register.component.html`: Página de cadastro de contas bancárias.
    - `bank.service.ts`: Serviço para comunicação com o armazenamento local (`localStorage`).
    - `account.service.ts`: Serviço para comunicação com o armazenamento local (`localStorage`).

- **localStorage**
  - Armazenamento web que permite salvar dados no navegador do usuário de forma persistente.
  - Utilizado no front-end para armazenamento de dados.
  - Exemplos:
    - `account.service.ts`: Serviço para adicionar, remover e consultar contas bancárias no `localStorage`.
    - `bank.service.ts`: Serviço para gerenciar os dados dos bancos no `localStorage`.

## Funcionalidades

- **Cadastro de Contas Bancárias**: Permite que o usuário cadastre novas contas bancárias, inserindo a agência e o número da conta.
- **Listagem de Bancos**: Exibe uma lista de bancos disponíveis com a opção de filtragem por código do banco.
- **Persistência de Dados**: Utiliza `localStorage` para armazenar as contas bancárias cadastradas.

## Instalação

Para rodar o projeto localmente, siga os passos abaixo:

1. Clone o repositório:
   ```sh
   git clone https://github.com/marcoAjunior/App-para-o-cadastro-de-contas-banc-rias-pessoais
   cd App-para-o-cadastro-de-contas-banc-rias-pessoais
2. Instale as dependências:
   ```sh
   npm install
3. Rode a aplicação:
    ```sh
    ng serve
3. Acesse a aplicação no navegador:
    ```sh
    http://localhost:4200
