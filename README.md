# Gym check-in app (Gym Passport)

Application front-end. To check the API and its instructions [click here](https://github.com/muriloloffi/innova-connect-avaliacao).

## Installation

Clone the API and Front-end repositories locally, then run `npm install` and `npm run dev` on both. The front-end should be available at http://localhost:5173. Back-end endpoints can be found on http://localhost:8080.

### Requisitos de negócio

* (front) Deve ser possível se cadastrar (Nome, E-mail e Senha);
* (front) Deve ser possível se autenticar (E-mail e Senha);
* (front) Deve ser possível cadastrar uma academia (Nome, Descrição, Telefone, Latitude e longitude);
* (front) Deve ser possível o usuário realizar check-in em uma academia;
* (front) Deve ser possível obter o perfil de um usuário logado;
* (front) Deve ser possível o usuário obter o seu histórico de check-ins;
* (front) Deve ser possível o usuário buscar academias pelo nome;

### RNs (Regras de negócio)

* O usuário não deve poder se cadastrar com um e-mail duplicado;
* O usuário não pode fazer 2 check-ins no mesmo dia;
* A academia só pode ser cadastrada por administradores;

### RNFs (Requisitos não-funcionais)

* <ins>A senha do usuário precisa estar criptografada;✅<ins>
* <ins>Todas listas de dados precisam estar paginadas com 20 itens por página;✅<ins>
* O usuário deve ser identificado por um JWT (JSON Web Token);
