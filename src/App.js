// U63166005
// Coding Project #17
// Task Management and Motivation App Challenge Using React

import TaskList from "./TaskGenerator.js";
import { FancyText } from "./FancyText.js";
import "./App.css";

export default function App() {
  return (
    <>
      <FancyText title text="Task List" />
      <TaskList />
    </>
  )
}