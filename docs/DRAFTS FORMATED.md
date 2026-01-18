## Purpose of This Document

This document started as a **personal checklist** to help me keep track of important tasks and avoid forgetting things.

Over time, it evolved:

- At first, it was meant to be just quick notes.
- After a few commits, I realized it could work as a **draft for the official project documentation**.
- From now on, it will be updated periodically, not after every single commit.

---

## Project Setup & Initial Progress

### Repository & Branching

- Initial commit with default README
- Create `develop` branch
- Push project to `develop`
- Set `develop` as the default branch
- Create `feature/project-setup` branch

### Project Configuration

- Clean the project structure
- Install Tailwind CSS and shadcn/ui dependencies
- Open Pull Request and merge into `develop`

---

## GitHub API Feature Development

### Initial Setup

- Create `feature/github-api` branch
- Create and test API instance using Axios
- Start defining routes
- Rename CSS file to follow a more idiomatic structure
- Create initial `User` type

### Profile & UI

- Start building the profile page
- Create profile-related components
- Authenticate API requests to check if social accounts are included
- Create reusable `SearchInput` component
- Create profile layout
- Add UI components: Drawer, Label, DropdownMenu, ButtonGroup

### Navigation & State Decisions

- Implement username validation and redirect to profile page
- Navigation options considered:
  - `Link` → does not submit on **Enter**
  - `Form` → does not integrate well with Zustand state
  - `useNavigation` → **best option** when combined with Zustand
- Use `useNavigation` as the final solution
- Separate providers into a dedicated directory for scalability

### Routing

- Evaluate dynamic routes
- Switch from static routes to dynamic routes for better scalability and data management

---

## Missing Tasks & Quick Reminders

> Short reminders of things that still need attention

- Add `/social_accounts` endpoint to fetch user social accounts
- Animate NavLink underline and fix blink issue
- Make accordion chevron-down icon blue as well
- Validate additional user data before rendering
- Display social accounts in the “additional data” component
- Fix typo in `SearchInput` component
- On HomePage, use global state directly instead of local input state
- Remove unused components
- Add Postman collection
- Refactor page files (possibly rename to `page.tsx`)

---

## Workflow Roadmap

1. User enters a GitHub username on the homepage
2. Username is stored using Zustand
3. User is redirected to the profile page
4. Profile page fetches data using React Query and Zustand state

---

## Errors & Lessons Learned

1. Installed the wrong dependency:
   - Installed `@tanstack/vue-query` instead of the React version.
   - Mistake happened because I only noticed the “V” in the package name.
   - Discovered the issue when starting to implement the data-fetching hook.
   - **Status:** Fixed ✅
