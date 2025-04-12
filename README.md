# Sistema de Autenticação com React Native, Supabase e Expo Router

Este projeto demonstra como criar um sistema de **autenticação completo e profissional** em um aplicativo React Native utilizando **Supabase**, **Expo Router** e boas práticas de organização de código.

## 📸 Preview

<p align="center">
  <img alt="Agregador de Links" src="https://i.ibb.co/vC87z81x/Whats-App-Image-2025-04-11-at-20-59-51.jpg" width="50%">
</p>


## 🚀 Tecnologias utilizadas

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [Expo Router](https://expo.dev/router)
- [Supabase](https://supabase.com/) (backend-as-a-service)
- TypeScript

## ✨ Funcionalidades

- Cadastro de usuário com e-mail e senha
- Login com e-mail e senha
- Recuperação de senha por e-mail
- Persistência de sessão (autologin)
- Redirecionamento inteligente com base no estado de autenticação
- Proteção de rotas privadas
- Hook personalizado para autenticação (`useAuth`)

## 📁 Estrutura do projeto

```bash
📦 app
 ┣ 📂(auth)           # Telas públicas (login, cadastro, recuperação de senha)
 ┣ 📂(protected)      # Telas privadas (usuário logado)
 ┗ layout.tsx         # Gerenciamento de rotas e sessão

📦 lib
 ┣ 📄 supabase.ts     # Instância do Supabase
 ┗ 📄 useAuth.tsx     # Hook de autenticação


