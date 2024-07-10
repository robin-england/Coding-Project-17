import { tasks } from "./tasks.js";
import { useState } from "react";
import { FancyText } from "./FancyText.js";
import { messages } from "./messages.js";


export default function TaskList() {
    let [index, setIndex] = useState(0);
    let currentMessage = messages[index];
    let [currentTasks, setCurrentTasks] = useState(tasks);
    let currentTask = currentTasks[index];

    function handleClick() {
        if (index < tasks.length - 1) {
            setIndex(index + 1);
        }
        else {
            setIndex(0)
        }
    };

    // Implement a feature to mark tasks as completed, updating the isCompleted status within the tasks array:
    function handleComplete(taskId) {
        const newTask = currentTasks.map(functionTask => {
            if (functionTask.id === taskId) {
                // Update only the current task
                return {
                    ...functionTask,
                    isCompleted: true,
                }
            } else {
                // Other tasks remain unchanged
                return functionTask;
            }
        });
        setCurrentTasks(newTask);
    }

    return (
        <>
            <div>
                <u>Current Task:</u><br />
                {currentTask.task} {' - '} {currentTask.isCompleted ? 'Completed ✅' : 'Pending'}{" "}
                {!currentTask.isCompleted && <button onClick={() => { handleComplete(currentTask.id) }}>Complete Task</button>}
                <br /><br />
                <FancyText text={currentMessage} />
            </div>

            <h4>
                <button onClick={handleClick}>
                    Next
                </button><br />
                ({index + 1} of {tasks.length})
            </h4>
        </>
    )
}