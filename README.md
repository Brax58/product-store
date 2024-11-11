# Product Store

Uma aplicação de gerenciamento de produtos desenvolvida com **Angular** e **TypeScript**.

## Índice
- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)

## Sobre o Projeto
O **Product Store** é uma aplicação frontend para gerenciamento de produtos, permitindo listagem, cadastro, edição e exclusão de itens. Utilizamos **Angular** como framework principal, e a aplicação simula um backend usando o **JSON Server** para persistência de dados.

## Funcionalidades
- **Listagem de Produtos**: Apresenta os produtos em um layout estilizado, utilizando o Angular Material.
- **Cadastro de Produto**: Formulário reativo para cadastrar novos produtos com validações e feedback visual.
- **Edição de Produto**: Formulário reativo reutilizável para edição, com recuperação dos dados do servidor.
- **Exclusão de Produto**: Ação de exclusão com diálogo de confirmação para garantir a operação.
- **Feedback ao Usuário**: Utilização do Mat Snackbar para exibir mensagens ao usuário após ações (cadastro, edição, exclusão).
- **Carregamento sob Demanda**: Utilização do Defer Block para otimizar o carregamento de componentes.

## Tecnologias Utilizadas
- Angular: Framework principal para desenvolvimento frontend.
- TypeScript: Linguagem para garantir tipagem e segurança de código.
- Angular Material: Biblioteca de componentes para estilização.
- Sass: Pré-processador CSS para modularização de estilos.
- JSON Server: Simula um backend para operações CRUD.
- Reactive Forms: Implementação de formulários reativos para uma melhor UX e validações.
