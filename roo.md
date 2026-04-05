# 🚀 Roo Code Master Operations Manual

## 1. Project Context
*   **Application:** SaaS Platform
*   **Architecture:** FERN Stack (Firebase, Express, React, Node.js) / PERN Stack (PostgreSQL, Express, React, Node.js).
*   **Primary Goal:** High-velocity, secure, and scalable feature delivery with a premium user experience.

## 2. Universal Tech Stack & Architecture Rules
*All AI agents (Architect, Coder, Reviewer) MUST strictly obey these constraints:*

*   **Language & Validation:** Strict TypeScript. No implicit `any`. 
    *   You MUST use **Zod** for all schema validations. Every API request payload, database model, and frontend form must have a corresponding Zod schema.
*   **Frontend Ecosystem:** React 18+ with Tailwind CSS v3+. Use functional components and hooks exclusively.
*   **State Management (Strict Separation):**
    *   **Server State:** You MUST use **TanStack Query (React Query)** for all asynchronous data fetching, caching, and synchronization with the backend.
    *   **Client State:** You MUST use **Zustand** exclusively for transient UI state (e.g., multi-step forms, modal toggles, sidebar state). Do not store API responses in Zustand.
*   **Backend Ecosystem (PERN/FERN):** Node.js/Express.
    *   **PostgreSQL (PERN):** You MUST use **Prisma ORM**. All database queries must be executed via the Prisma Client to guarantee end-to-end type safety.
    *   **Firebase (FERN):** You MUST use strict `FirestoreDataConverter` objects to ensure payloads match TypeScript interfaces before hitting the database.

## 3. UI & Design System Guidelines
*When generating frontend components or scaffolding UI, adhere to this design system:*
*   **Component Library:** `shadcn/ui`. Always assume components like Buttons, Dialogs, Cards, and Inputs exist in `@/components/ui/`. Do not build custom primitive components from scratch unless a `shadcn` equivalent does not exist.
*   **Form Handling:** Use **React Hook Form** integrated with `@hookform/resolvers/zod` for all user inputs.
*   **Iconography:** Use `lucide-react`.
*   **Color Palette (Tailwind):**
    *   **Primary:** `bg-indigo-600` for primary actions (hover: `bg-indigo-700`).
    *   **Backgrounds:** `bg-slate-50` for light mode app backgrounds, `bg-white` for cards/surfaces.
    *   **Text:** `text-slate-900` for primary headings, `text-slate-500` for secondary copy.
    *   **Destructive:** `bg-red-500` or `text-red-500`.

## 4. The Kiro/Antigravity Workflow Routing
*This repository operates on a strict 3-phase AI methodology. You must guide the user through this sequence:*
1.  **Phase 1 (Planning):** If tasked to build a feature, suggest switching to **🏗️ Kiro Architect** mode to generate `requirements.md`, `design.md`, and `tasks.md`.
2.  **Phase 2 (Execution):** Once specs are approved, the user will switch to **⚡ Antigravity Coder** mode to autonomously execute the tasks.
3.  **Phase 3 (Audit):** Once coding is halted, the user will switch to **🛡️ QA Reviewer** mode to run tests and verify compliance.

## 5. Anti-Hallucination Directives
*   Do not invent libraries. If a package is not in `package.json`, ask for permission to install it.
*   Do not silently rewrite core configurations (e.g., `tsconfig.json`, `tailwind.config.js`) without explicit user approval.
*   If a user prompt contradicts the Kiro specs in `design.md` or the design guidelines above, flag the discrepancy and refuse to code until the design is officially updated.