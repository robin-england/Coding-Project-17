// U63166005
// Coding Project #17
// Task Management and Motivation App Challenge Using React

import TaskList from "./TaskGenerator.js";
import { FancyText } from "./FancyText.js";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <>
        <FancyText title text="Task List" />
        <TaskList />
        <br /><br />
        <section className="footer">
          Thank you for visiting my Task List page!
          <p>© Robin England 2024</p>
        </section>
      </>
    </div>
  )
}