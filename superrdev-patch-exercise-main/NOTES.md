# Technical Exercise Findings & Notes

## Bug Fixes & Improvements

### 1. Status Filter Enum Typo Fix
- **Issue:** In `StatusFilter.jsx`, the option value for "In Progress" had a typo (`"TN_PROGRESS"` instead of `"IN_PROGRESS"`), causing filter requests to fail against backend status enums.
- **How Found:** UI inspection showed selecting "In Progress" yielded no filtered results or threw API mismatch issues.
- **What Changed:** Corrected `value="TN_PROGRESS"` to `value="IN_PROGRESS"`.
- **Why:** To ensure alignment with the backend's expected `TaskStatus` enum parameters.

### 2. Task Selection & Details View Navigation
- **Issue:** `TaskTable.jsx` lacked an explicit click handler on task titles, and `App.jsx` was missing the state logic to render task details when clicked.
- **How Found:** Interacting with the task title links in the table did not trigger any navigation or detail panel.
- **What Changed:** Added `onTaskSelect` prop and click handler to `TaskTable.jsx`. Updated `App.jsx` with `selectedTask` state and conditional rendering for detailed view.
- **Why:** To fulfill core requirement for task navigation and detail view inspection.