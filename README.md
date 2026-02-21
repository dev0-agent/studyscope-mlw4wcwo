# StudyScope

> Track your revision progress, subject by subject.

StudyScope is a focused, distraction-free task manager designed for students. It helps you organize your syllabus into Subjects and Topics, allowing you to visualize exactly what you've revised and what's left to do. 

## Overview

Unlike generic to-do lists, StudyScope is built around the concept of "Coverage". By breaking down subjects into granular topics and tracking their status (Not Started, In Progress, Revised), you get a clear picture of your exam readiness.

## Tech Stack

- **Framework:** React + Vite
- **Styling:** Tailwind CSS
- **Components:** shadcn/ui
- **State Management:** Zustand (or React Context)
- **Persistence:** Local Storage (Client-side only)

## Features

- **Subject Organization:** Group your work by class or exam (Math, History, Science).
- **Topic Tracking:** granular task lists for every subject.
- **Progress Visualization:** Visual bars showing your completion % per subject.
- **Status Workflow:** Cycle tasks through 'To Do', 'In Progress', and 'Revised'.
- **Privacy Focused:** All data is stored locally in your browser. Nothing is sent to a server.

## Getting Started

1.  **Clone the repository**
    ```bash
    git clone <repository-url>
    cd studyscope
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start the development server**
    ```bash
    npm run dev
    ```

## Documentation

- [TASKLIST.md](./TASKLIST.md) - Detailed breakdown of development tasks.
- [LEARNINGS.md](./LEARNINGS.md) - Developer notes and architectural decisions.
- [.dev0/RULES.md](./.dev0/RULES.md) - Project coding standards.