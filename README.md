# React + TypeScript Pomodoro Timer

![Task Manager Screenshot](/public/screenshotPC.png)

A Pomodoro Timer application built with React and TypeScript. It allows you to start and stop timers for different tasks and keeps track of the timer history, including the status of each task.

## Features

- Start Timer: Enter the task name and the desired time (between 5 and 60 minutes) and click the "Start" button to begin the timer.
- Stop Timer: Click the "Stop" button to pause the active timer.
- Delete tasks: Click on the delete button (bin icon) next to a task to remove it from the list.
- Timer History: View the list of previously started tasks, including their status (stopped, finished, or in progress).
- Local Storage: Timer history and active timers are stored in the browser's local storage for persistence.

## Technologies Used

- React: JavaScript library for building user interfaces.
- TypeScript: Superset of JavaScript that adds static typing.
- Vite: Fast development server and bundler.
- Styled Components: CSS-in-JS library for styling React components.
- React Router: Library for declarative routing in React applications.
- react-hook-form: Form validation library for React.
- zod: TypeScript-first schema validation library.
- date-fns: Modern JavaScript date utility library.
- immer: Library for working with immutable data structures with ease.
- phosphor-react: Icon library for React applications.

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/PERicci/Task-Manager.git`
2. Navigate to the project directory: `cd Timer`
3. Install dependencies:
    Using npm: `npm install`
    Using Yarn: `yarn install`
4. Start the development server:
    Using npm: `npm run dev`
    Using Yarn: `yarn dev`
5. Open your browser and visit `http://localhost:3001/Timer`