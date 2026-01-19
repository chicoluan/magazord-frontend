# GitHub Profile Explorer

A frontend application built to explore GitHub user profiles, repositories, and starred projects using the GitHub REST API. This project was developed as part of a technical challenge, with a strong focus on **architecture decisions**, **state management**, and **scalability**.

---

## Purpose

This document started as a **personal checklist** to track development progress. As the project matured, it evolved into a **structured and professional README**, suitable for technical review by recruiters and engineers.

The goal is to clearly communicate:

- How the project was built
- Why certain technical decisions were made
- The current state of the implementation
- Remaining improvements

---

## Tech Stack

- **React + TypeScript**
- **Vite**
- **Zustand** – global state (filters, shared UI state)
- **@tanstack/react-query** – server state and caching
- **Axios** – API client
- **Tailwind CSS** – styling
- **shadcn/ui** – reusable UI components

---

How to Run the Project Locally

To run the project on your machine:

```
npm install
npm run dev
```

The application will be available locally after the development server starts.

The application was also deployed on vercel [Here](https://magazord-frontend.vercel.app/)

---

## Project Structure & Workflow

### Branching Strategy

- `develop` as the default branch
- Feature-based branches for isolated development

Example:

- `feature/project-setup`
- `feature/github-api`

This approach ensures clean pull requests and easier code review.

---

## Core Features

### User Flow

1. User enters a GitHub username on the homepage
2. Username is validated
3. User is redirected to the profile page
4. Profile data is fetched via React Query
5. Filters are managed globally using Zustand

---

### Profile Page

- User basic information
- Additional data (conditionally rendered)
- Social accounts (planned improvement)

---

### Repositories

- List of user repositories
- List of starred repositories
- Pagination
- Filters:
  - Language
  - Repository type

- Filters are applied **via query parameters**, not local filtering

---

## GitHub API Integration

### Search & Filtering Strategy

Repositories are fetched using the GitHub Search API:

- **Endpoint:** `GET /search/repositories`
- **Query construction example:**

```
q=user:USERNAME+language:LANGUAGE
```

This approach ensures:

- Better performance
- Accurate filtering
- API-aligned behavior

---

### Filter Type Design

Filter options are implemented using a generic, readonly-friendly type to keep flexibility while avoiding unnecessary complexity:

```ts
export type FilterOption<T extends string> = {
  label: string
  value: T
}
```

This allows the UI to display user-friendly labels while keeping strict control over filter values.

---

## Routing Decisions

- Initially started with static routes
- Migrated to **dynamic routes** for better scalability and data management
- Username is no longer required in global state
- Zustand is now focused on **filters and UI-related state**

---

## State Management Decisions

- **Zustand**: filters, shared UI state
- **React Query**: server state, caching, refetching

### Navigation Choice

Different approaches were evaluated for navigation after username submission:

- `Link` → does not submit on **Enter**
- `Form` → poor integration with global state
- `useNavigation` → **chosen solution**, clean and predictable with Zustand

---

## UI & UX Improvements

- Fixed layout overflow issues
- Sticky navbar and profile card
- Responsive filter drawer
- Pagination adjustments
- Mirrored filters across views

---

## Known Issues & Improvements

### Pending Tasks

- Add `/social_accounts` endpoint integration
- Display social accounts in profile additional data
- Update global state to reflect item counts in navigation
- Improve filter behavior on resize
- Animate NavLink underline without blink
- Remove unused components
- Add Postman collection
- Refactor page file naming (e.g. `page.tsx`)

---

## Errors & Lessons Learned

- Installed `@tanstack/vue-query` instead of the React version
  - Mistake identified during hook implementation
  - Fixed immediately

This reinforced the importance of carefully validating dependencies, especially in multi-framework ecosystems.

---

## API Collection

API Collection

A GitHub API collection is available inside the docs directory.

This collection can be used to:

Inspect the endpoints used in the project

Understand request parameters and query construction

Test the GitHub API outside the **application**

---

## Final Notes

This project prioritizes **clarity**, **maintainability**, and **real-world architectural decisions** over unnecessary abstractions.

It reflects how I approach frontend challenges in production environments: analyzing trade-offs, validating assumptions, and iterating with scalability in mind.

Feel free to explore the codebase and reach out with any questions.
