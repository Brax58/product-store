# Product Store

Uma aplicação de gerenciamento de produtos desenvolvida com **Angular** e **TypeScript**.

## Índice
- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Configuração do Ambiente](#configuração-do-ambiente)
- [Como Executar o Projeto](#como-executar-o-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Agradecimentos](#agradecimentos)
- [Link do Repositório](#link-do-repositório)

## Sobre o Projeto
O **Product Store** é uma aplicação frontend para gerenciamento de produtos, permitindo listagem, cadastro, edição e exclusão de itens. Utilizamos **Angular** como framework principal, e a aplicação simula um backend usando o **JSON Server** para persistência de dados.

## Funcionalidades
- **Listagem de Produtos**: Apresenta os produtos em um layout estilizado, utilizando o Angular Material.
- **Cadastro de Produto**: Formulário reativo para cadastrar novos produtos com validações e feedback visual.
- **Edição de Produto**: Formulário reativo reutilizável para edição, com recuperação dos dados do servidor.
- **Exclusão de Produto**: Ação de exclusão com diálogo de confirmação para garantir a operação.
- **Feedback ao Usuário**: Utilização do Mat Snackbar para exibir mensagens ao usuário após ações (cadastro, edição, exclusão).
- **Carregamento sob Demanda**: Utilização do Defer Block para otimizar o carregamento de componentes.

## Configuração do Ambiente
1. **NodeJS com NVM**: Configure o NodeJS utilizando o NVM para gerenciar versões. Isso garante compatibilidade com o projeto.
2. **Angular CLI**: Certifique-se de ter o Angular CLI instalado globalmente.
   ```bash
   npm install -g @angular/cli
