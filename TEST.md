# React Component Library Template

This project is an up-to-date template, as of 2025, for building a React Component Library.

It showcases all the configuration for the development using a `<Button />` and `<Input />` components as a placeholder.

This document includes a comprehensible documentation that explains the purpose of all scripts and configuration files, as well as the reasoning behind the structure.

---

## 📋 Table of Contents[![](https://raw.githubusercontent.com/aregtech/areg-sdk/master/docs/img/pin.svg)](#-table-of-contents)

- [🔧 Tech Stack](#-tech-stack)
- [📦 Folder Structure](#-folder-structure)
- [📜 Project Scripts](#-project-scripts)
- [📋 Pre-requisites](#-pre-requisites)
- [⚙️ Project Configuration](#%EF%B8%8F-project-configuration)
  - [Configure ESLint](#configure-eslint-)
  - [Configure Prettier](#configure-prettier-)
  - [Configure TypeScript](#configure-typescript-)
  - [Configure Vite & DTS](#configure-vite--dts-)
  - [Configure Vitest](#configure-vitest-)
  - [Configure Storybook](#configure-storybook-)
  - [Configure Git Hooks](#configure-git-hooks-)
  - [GitHub Actions for CI/CD](#github-actions-for-cicd-)
- [🌟 Create a Component](#-create-a-component)
  - [Create the Component](#%EF%B8%8F-create-the-component)
  - [Add Tests](#-add-tests)
  - [Add Storybook](#-add-storybook)
- [📦 Publish Changes](#-publish-changes)
  - [Build the Library](#-build-the-library)
  - [Generate Release and Deploy](#-generate-release-and-deploy)

---

## 🔧 Tech Stack[![](https://raw.githubusercontent.com/aregtech/areg-sdk/master/docs/img/pin.svg)](#-tech-stack)

| Category                   | Technologies                                                                                                                                                                                                                                                    |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Core**                   | ![React](https://img.shields.io/badge/React_19-61DAFB?style=for-the-badge&logo=react&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)                                         |
| **Build**                  | ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white) ![DTS](https://img.shields.io/badge/Vite_DTS-646CFF?style=for-the-badge)                                                                                        |
| **Code Quality**           | ![ESLint](https://img.shields.io/badge/ESLint_9-4B32C3?style=for-the-badge&logo=eslint&logoColor=white) ![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white)                                             |
| **Testing**                | ![Vitest](https://img.shields.io/badge/Vitest-6E9F18?style=for-the-badge&logo=vitest&logoColor=white) ![React Testing Library](https://img.shields.io/badge/React_Testing_Library-E33332?style=for-the-badge&logo=testinglibrary&logoColor=white)               |
| **CI/CD**                  | ![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white) ![Semantic Release](https://img.shields.io/badge/Semantic_Release-494949?style=for-the-badge&logo=semanticrelease&logoColor=white) |
| **Git Hooks**              | ![LeftHook](https://img.shields.io/badge/LeftHook-FF1E1E?style=for-the-badge&logo=lefthook&logoColor=white)                                                                                                                                                     |
| **Design & Documentation** | ![Storybook](https://img.shields.io/badge/Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)                                                                                                                                                  |

<div align="right"><kbd><a href="#-table-of-contents">↑ Back to top ↑</a></kbd></div>

---

## 📦 Folder Structure[![](https://raw.githubusercontent.com/aregtech/areg-sdk/master/docs/img/pin.svg)](#-folder-structure)

```
└── 📁.github
    └── 📁workflows
        ├── cd.yml
        └── ci.yml
└── 📁.storybook
    ├── main.ts
    └── preview.ts
└── 📁src
    ├── 📁components
    │   ├── 📁Button
    │   │   ├── 📁__docs__
    │   │   │   ├── Button.mdx
    │   │   │   └── Button.stories.tsx
    │   │   ├── 📁__test__
    │   │   │   └── Button.test.tsx
    │   │   ├── Button.css
    │   │   └── Button.tsx
    │   ├── 📁Input
    │   │   ├── 📁__docs__
    │   │   │   ├── Input.mdx
    │   │   │   └── Input.stories.tsx
    │   │   ├── 📁__test__
    │   │   │   └── Input.test.tsx
    │   │   ├── Input.css
    │   │   └── Input.tsx
    │   └── index.ts
    └── index.ts
.gitignore
.prettierrc.mjs
eslint.config.js
eslint.constants.mjs
lefthook.yml
package-lock.json
package.json
README.md
release.config.mjs
setupTests.ts
tsconfig.build.json
tsconfig.json
vite.config.ts
```

<div align="right"><kbd><a href="#-table-of-contents">↑ Back to top ↑</a></kbd></div>

---

## 📜 Project Scripts[![](https://raw.githubusercontent.com/aregtech/areg-sdk/master/docs/img/pin.svg)](#-project-scripts)

<details>
<summary>Show available project scripts</summary>

### 🔨 Build library: `build`

```
tsc -p tsconfig.build.json && vite build
```

### 🖌️ Run Prettier: `format`

```
prettier --write --parser typescript '**/*.{ts,tsx}'
```

### 🔍 Run ESLint: `lint`

```
eslint --fix
```

### 🔍 Run ESLint without automatic fixes: `lint:no-fix`

```
eslint
```

### 🧪 Run tests: `test`

```
vitest run
```

### 🧪 Run tests and watch to rerun on code changes: `test:watch`

```
vitest
```

### 🧪 Run tests with a server GUI: `test:gui`

```
vitest --ui
```

### 📖 Run Storybook server: `storybook`

```
storybook dev -p 6006
```

### 📖 Build Storybook `storybook:build`

```
storybook build
```

</details>

<div align="right"><kbd><a href="#-table-of-contents">↑ Back to top ↑</a></kbd></div>

---

## 📋 Pre-requisites[![](https://raw.githubusercontent.com/aregtech/areg-sdk/master/docs/img/pin.svg)](#-pre-requisites)

- VS Code
- Node v22
- Git
- TypeScript knowledge
- React knowledge

<div align="right"><kbd><a href="#-table-of-contents">↑ Back to top ↑</a></kbd></div>

---

## ⚙️ Project Configuration[![](https://raw.githubusercontent.com/aregtech/areg-sdk/master/docs/img/pin.svg)](#%EF%B8%8F-project-configuration)

> [!NOTE]
>
> - **ESLint** and **Prettier** are **highly recommended** tools for ensuring code quality and consistent formatting.
> - **TypeScript**, **Vite**, and **DTS** are **mandatory** configurations for building and running the project.
> - **Vitest** and **Storybook** are optional tools for testing components and documentation.
> - **Lefthook** and **GitHub Actions** are optional but **recommended** tools for automating jobs with Git hooks and CI/CD pipelines.

### Configure ESLint <img src="https://cdn.simpleicons.org/eslint/000/4B32C3" alt="ESLint" align=left width=24>

<details>
<summary>Show details</summary>

</details>

### Configure Prettier <img src="https://cdn.simpleicons.org/prettier/000/F7B93E" alt="Prettier" align=left width=24>

<details>
<summary>Show details</summary>

</details>

### Configure TypeScript <img src="https://cdn.simpleicons.org/typescript/000/3178C6" alt="TypeScript" align=left width=24>

<details>
<summary>Show details</summary>

</details>

### Configure Vite & DTS <img src="https://cdn.simpleicons.org/vite/000/646CFF" alt="Vite" align=left width=24>

<details>
<summary>Show details</summary>

</details>

### Configure Vitest <img src="https://cdn.simpleicons.org/vitest/000/6E9F18" alt="Vitest" align=left width=24>

<details>
<summary>Show details</summary>

</details>

### Configure Storybook <img src="https://cdn.simpleicons.org/storybook/000/FF4785" alt="Storybook" align=left width=24>

<details>
<summary>Show details</summary>

</details>

### Configure Git Hooks <img src="https://cdn.simpleicons.org/lefthook/000/FF1E1E" alt="Lefthook" align=left width=24>

<details>
<summary>Show details</summary>

</details>

### GitHub Actions for CI/CD <img style="margin-right: 8px;" src="https://cdn.simpleicons.org/githubactions/000/2088FF" alt="GitHub Actions" align=left width=24>

<details>
<summary>Show details</summary>

- GitHub Workflows
- Semantic Release

</details>

<div align="right"><kbd><a href="#-table-of-contents">↑ Back to top ↑</a></kbd></div>

---

## 🌟 Create a Component[![](https://raw.githubusercontent.com/aregtech/areg-sdk/master/docs/img/pin.svg)](#-create-a-component)

### 🏗️ Create the Component

### 🧪 Add Tests

### 📚 Add Storybook

<div align="right"><kbd><a href="#-table-of-contents">↑ Back to top ↑</a></kbd></div>

---

## 📦 Publish Changes[![](https://raw.githubusercontent.com/aregtech/areg-sdk/master/docs/img/pin.svg)](#-publish-changes)

### 🔨 Build the Library

### 🚀 Generate Release and Deploy

<div align="right"><kbd><a href="#-table-of-contents">↑ Back to top ↑</a></kbd></div>

---
