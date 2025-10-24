# ReactNative Expo Starter Kit

This is a starter kit for building cross-platform mobile applications using React Native and Expo. It comes pre-configured with a set of modern and essential tools to kickstart your development process.

## Features

- **[Expo](https://expo.dev/):** A powerful platform for building universal React applications.
- **[Expo Router](https://docs.expo.dev/router/introduction/):** File-based routing for React Native and web apps.
- **[TypeScript](https://www.typescriptlang.org/):** A typed superset of JavaScript that compiles to plain JavaScript.
- **[Tailwind CSS (NativeWind)](https://www.nativewind.dev/):** A utility-first CSS framework for rapid UI development.
- **[Supabase](https://supabase.com/):** An open-source Firebase alternative for building secure and scalable backends.
- **[Zustand](https://github.com/pmndrs/zustand):** A small, fast, and scalable state-management solution.
- **Light/Dark Mode:** A pre-configured theme system for light and dark modes.
- **[ESLint](https://eslint.org/):** A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript.
- **[Prettier](https://prettier.io/):** An opinionated code formatter.

## Project Structure

The project structure is organized as follows:

```
/
├── src/
│   ├── app/                # Expo Router routes
│   │   ├── (auth)/         # Routes for authentication
│   │   ├── (protected)/    # Routes protected by authentication
│   │   └── ...
│   ├── assets/             # Fonts and images
│   ├── components/         # Shared UI components
│   ├── constants/          # Color definitions and other constants
│   ├── hooks/              # Custom hooks
│   ├── stores/             # Zustand state management stores
│   └── supabase-utils/     # Supabase client and authentication utilities
├── ...
```

## Getting Started

1.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

2.  **Set up Supabase:**

    - Rename the `.env.example` file to `.env`.
    - Add your Supabase URL and Anon Key to the `.env` file.

3.  **Start the development server:**

    ```bash
    npx expo start
    ```

    In the output, you'll find options to open the app in a:

    - [Development build](https://docs.expo.dev/develop/development-builds/introduction/)
    - [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
    - [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
    - [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

## Available Scripts

- `npm start`: Starts the development server.
- `npm run android`: Starts the development server and opens the app on a connected Android device or emulator.
- `npm run ios`: Starts the development server and opens the app on an iOS simulator.
- `npm run web`: Starts the development server and opens the app in a web browser.
- `npm run lint`: Lints the project files using ESLint.

## Authentication

This starter kit uses Supabase for authentication. The authentication flow is handled in the `src/app/(auth)` directory. The `src/supabase-utils/supabase-auth.ts` file contains the core authentication logic.

Protected routes are defined in the `src/app/(protected)` directory. The layout in `src/app/(protected)/_layout.tsx` checks for a valid user session and redirects to the login screen if the user is not authenticated.

## State Management

[Zustand](https://github.com/pmndrs/zustand) is used for global state management. The theme store is defined in `src/stores/useThemeStore.ts`. You can create new stores in this directory and use them throughout your application.

## Styling

[NativeWind](https://www.nativewind.dev/) is used for styling. You can use Tailwind CSS classes directly in your components. A `global.css` file is located in the `src` directory for global styles.

## Theming

This project is configured with a light and dark mode. The theme colors are defined in `src/constants/Colors.ts`. The `useThemeColor` hook in `src/hooks/themes/useThemeColor.ts` allows you to easily access the current theme colors in your components. The theme can be toggled using the `useThemeStore` Zustand store.
