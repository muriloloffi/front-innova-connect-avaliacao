# Gym check-in app (Gym Passport)

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
