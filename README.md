<<<<<<< HEAD
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
=======
# React User Search App

A simple and responsive User Search Application built with **React.js** and **Tailwind CSS**. This project fetches user data from the JSONPlaceholder REST API and allows users to search through the list of users in real time.

## Features

- Fetch user data from REST API using `async/await`.
- Search users by name.
- Case-insensitive search functionality.
- Efficient filtering using `useMemo`.
- Loading state while fetching data.
- Error handling for HTTP and network errors.
- Displays a "No Data Found" message when no matching users exist.
- Conditional rendering for different UI states.

## Tech Stack

- React.js
- JavaScript (ES6+)
- Tailwind CSS
- REST API (JSONPlaceholder)

## React Concepts Practiced

- `useState`
- `useEffect`
- `useMemo`
- `fetch()`
- `async/await`
- Array `filter()` and `map()`
- Conditional Rendering
- Error Handling

## API Used

[JSONPlaceholder Users API](https://jsonplaceholder.typicode.com/users)

## Purpose

This project was built as a hands-on practice project to understand API integration, state management, search functionality, and efficient rendering in React.
