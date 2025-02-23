# React Component Library Template

This project is an up-to-date template, as of 2025, for building a React Component Library.

It showcases all the configuration for the development using a `<Button />` and `<Input />` components as a placeholder.

This document includes a comprehensible documentation that explains the purpose of all scripts and configuration files, as well as the reasoning behind the structure.

---

## 📋 Table of Contents[![](https://raw.githubusercontent.com/aregtech/areg-sdk/master/docs/img/pin.svg)](#-table-of-contents)

- [🔧 Tech Stack](#-tech-stack)
- [📦 Folder Structure](#-folder-structure)

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

## Github Actions <img src="https://cdn.simpleicons.org/githubactions/2088FF" alt="Node" align=left width=32>

### Node Usage <img src="https://cdn.simpleicons.org/nodedotjs/000/fff" alt="Node" align=left width=24>

---
