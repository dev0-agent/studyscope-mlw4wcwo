# Task List

This file shows the current progress of all tasks in this project.
It is automatically updated by dev0 as tasks are completed.

---

## Phase 1

- [ ] ⏳ **Define Data Types and State Management Store**
  Create the TypeScript interfaces for `Subject` (id, name, color, topics) and `Topic` (id, title, status). Implement a global store (using Zustand or Context) that handles CRUD operations for subjects and topics. Include a middleware or `useEffect` to persist this state to `localStorage` automatically.

- [ ] ⏳ **Create Application Layout and Navigation**
  Implement the main App Shell. Create a Sidebar (or responsive drawer) that lists available Subjects and a link to the 'Dashboard'. The main content area should render the active view. Use `react-router-dom` for navigation between the Dashboard and individual Subject views.

## Phase 2

- [ ] ⏳ **Implement Dashboard View**
  Create the landing page (Dashboard). It should display a grid of cards, one for each Subject. Each card should show the Subject name and a summary of progress (e.g., '3/10 topics revised'). Include a button to 'Add New Subject' which opens a dialog.

- [ ] ⏳ **Implement Subject Creation and Management**
  Build the logic and UI for adding, renaming, and deleting Subjects. Use a shadcn/ui Dialog for the creation form. Ensure deleting a subject warns the user that all contained topics will be lost.

- [ ] ⏳ **Implement Subject Detail View and Topic List**
  Create the view for a single Subject. This should list all Topics associated with that subject. Use a clean list or table layout. Include an input field or button at the top to quickly add new Topics to the list.

- [ ] ⏳ **Implement Topic Status Toggling**
  Add interactivity to the Topic items. Users should be able to toggle status between 'Not Started', 'In Progress', and 'Revised'. Use a dropdown or a cycle-click badge for the status. Updating status should immediately reflect in the store.

## Phase 3

- [ ] ⏳ **Add Progress Visualization**
  Implement a visual Progress Bar component. Add this to both the Dashboard Subject Cards and the Subject Detail View header. Calculate percentage based on (Revised Topics / Total Topics).

- [ ] ⏳ **Implement Topic Filtering and Sorting**
  Add controls to the Subject Detail view to filter topics (e.g., 'Show only Not Revised') and sort them (e.g., Alphabetical or by Status). This helps students focus on what is left to do.

## Phase 4

- [ ] ⏳ **Polish UI and Empty States**
  Add friendly empty states when a user has no subjects or a subject has no topics. Improve the styling of the status badges (e.g., Green for Revised, Yellow for In Progress). Ensure mobile responsiveness for the sidebar and grid.

---

_Last updated by dev0 automation_
