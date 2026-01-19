1. This document serves as a personal checklist to keep track of important tasks so I don’t forget anything.

2. I’ll be updating it only after a few commits.

3. Initially I was thinking to use only notes but now this is gonna be the draft of my official documentation.

## STATER NOTES

- [x] Initial commit with README default
- [x] Create develop branch
- [x] Push the project into develop branch
- [x] Change develop as default branch in repository
- [x] Create the feature/project-setup branch
- [x] Clean the project, install tailwind and shadcn dependencies
- [x] Pull Request and Merge
- [x] Crete a new branch to start feature/github-api
- [x] Create the api instance with axios and test
- [x] Start creating the routes and update the name of the css file for an idiomatic structure
- [x] Create the starter type of the user
- [x] Start creating the profile page and the components of them
- [x] Authenticate the api to check if social accounts is included in the data
- [x] Finish the fetch valid username and redirect to profile page (choose between useNavigation, link of form), the best scenario is useNavigation
  - Link does not pick the "Enter"
  - Form does not know about zustand and to save the username
  - useNavigation is the best option to navigate after zustand
- [x] Separate the providers into a distinct directory for scalability

## MISSING / QUICK REMINDS

> Some notes to not forgot to do and quick reminders

- [ ] Add the endpoint '/social_accounts' to fetch the social accounts
- [ ] Chevron down icon for accordion also blue
- [ ] Add social accounts for users in additional data component
- [ ] In HomePage I use the global state directly in the input instead of local.

## REVIEW / REFINE

> I am already a little bit late with this challenge because I spent most of the time trying to master it. There is a section dedicated to talk more about it.

- [ ] Refactor page files - maybe change their name to page.tsx

## WORKFLOW ROADMAP

1. Enter the username on the homepage.
2. Save the data with zustand.
3. Redirect to the profile page and use react query to fetch the data using zustand store.

## ERRORS

1. Installed the wrong dependency, instead of vite installed @tanstack/vue-query, my mistake. I saw only the "V" and pick that one. Only saw when started to create the hook to fetch the userData. (FIXED)

## IMPORTANT

The options of filter are not an object because of the complexity related to this challenge, it was not necessary, using readonly T generic type to fix this complexity and show as captalized classname value but it can be used as if has any different label from the filter value.

```
export type FilterOption<T extends string> = {
  label: string
  value: T
}
```
