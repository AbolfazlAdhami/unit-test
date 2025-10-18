# 🧪 Unit Test Challenges

This repository contains a collection of small exercises and examples for learning **unit testing** and test-related techniques in JavaScript / Node.js.  
The challenges focus on making code testable and practicing patterns like mocking, spying, async testing, and DOM/unit testing where applicable.

---

## 📁 Current project structure

The repository currently includes the following folders (each folder contains one or more small exercises):

```
unit-test/
├── .vscode/            # editor settings (optional)
├── async-code/         # exercises for testing async functions (promises, timers, callbacks)
├── dom/                # DOM-related tests / front-end test examples
├── frontend/           # small frontend/unit test examples (integration with DOM)
├── hooks-codes/        # React hooks testing examples (if using React)
├── mocking/            # exercises that demonstrate mocking modules and functions
├── nodejs-esmodules/   # Node.js ESM examples and tests
├── nodejs/             # Node.js (CommonJS) examples and tests
├── spies_mocks/        # examples using spies and mocks (test doubles)
├── .gitignore
└── README.md
```

> If any of these folder descriptions don't match your intent, tell me which folder to rename or how to update the descriptions.

---

## 🎯 Goals of this repo

- Provide small, focused exercises for practicing unit testing patterns.  
- Show how to test synchronous and asynchronous code.  
- Demonstrate mocking and spying techniques to isolate units.  
- Include examples for both Node.js and browser-like (DOM/React hook) testing.  
- Help learners move toward Test-Driven Development (TDD) workflows.

---

## 🧰 Suggested tech / tooling

Although the repo contains plain JS exercises, the following tools are recommended (you can adapt based on your preference):

- **Vitest** — A Vite-native testing framework. It's fast! (works with Node, DOM, and React).  
- **Testing Library** (e.g., `@testing-library/dom` / `@testing-library/react`) — for DOM and React hook tests.  
- **Sinon** or Vitest mocks — for spies/stubs if you prefer more control.  
- **Node.js** (LTS) — run tests and examples locally.  
- Optionally: **Vitest** as a fast alternative to Vitest if you prefer.

---

## 🏁 Getting started (recommended)

1. Clone the repo:
   ```bash
   git clone https://github.com/AbolfazlAdhami/unit-test.git
   cd unit-test
   cd dir
   ```

2. Initialize and install dependencies:
   ```bash
   npm install
   ```

3. Run tests:
   ```bash
   npm test
   ```

> If you prefer `vitest`, install it and adjust test scripts accordingly.

---

## ✅ What to improve (suggested README additions)

- Add a short README inside each exercise folder explaining:
  - What the exercise expects (function signature, behavior).
  - How to run the tests for that folder (example commands).
  - Example inputs / edge cases to consider.
- Add a top-level `package.json` with `devDependencies` and a `test` script so contributors can run all tests easily.
- Provide a `CONTRIBUTING.md` that outlines how to add new exercises, naming conventions, and testing style guidelines.

---

## 🧩 Example exercise types you can add

- Pure function tests (math, string utilities)  
- Boundary & edge-case tests (empty inputs, null/undefined)  
- Async tests (promises, async/await, timers)  
- Mocking external modules (HTTP calls, file system)  
- DOM tests (rendering, user interaction)  
- React hooks tests (behavior and side effects)  
- Snapshot tests (for components or serialized outputs)

---

## 🤝 Contributing

Contributions are welcome — open an issue or PR with a new exercise or improvements. When adding exercises, follow these small rules:

1. Put code under a new folder with a clear name.  
2. Include `README.md` in that folder describing the exercise.  
3. Add test files using consistent naming (`*.test.js` or `*.spec.js`).  
4. Keep exercises small and focused (one concept per exercise).

---

## 📬 Author

**Abolfazl Adhami**  
GitHub: https://github.com/AbolfazlAdhami

---

⭐ *If you find this repo helpful, give it a star to support the project!*
