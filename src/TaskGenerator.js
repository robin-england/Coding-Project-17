import { tasks } from "./tasks.js";
import { useState } from "react";
import { FancyText } from "./FancyText.js";
import { messages } from "./messages.js";


export default function TaskList() {
    let [index, setIndex] = useState(0);        // sets index
    let currentMessage = messages[index];       // sets the current message according to the index
    let [currentTasks, setCurrentTasks] = useState(tasks); // Initializes currentTasks according to imported tasks
    let currentTask = currentTasks[index];        // sets the current task according to the index of currentTasks

    function handleClick() {
        if (index < tasks.length - 1) {     // increases index only if it is under 4
            setIndex(index + 1);
        }
        else {
            setIndex(0)                     // sets index back to 0 so the next button loops
        }
    };

    // Implement a feature to mark tasks as completed, updating the isCompleted status within the tasks array:

    function handleComplete(taskId) {
        const newTask = currentTasks.map(functionTask => {
            if (functionTask.id === taskId) {                   // Update only the current task
                return {
                    ...functionTask,
                    isCompleted: true,
                }
            } else {                                            // Leaves other tasks remain unchanged
                return functionTask;
            }
        });
        setCurrentTasks(newTask);
    }

    return (
        <>
            <div>
                <u>Current Task:</u> {" "}
                {currentTask.task} <br /><br />{'Status: '} {currentTask.isCompleted ? 'Completed ✅' : 'Pending...'}{" "}{/* Shows task as completed or pending */}
                {!currentTask.isCompleted && <button onClick={() => { handleComplete(currentTask.id) }}>Complete Task</button>}{/* Only shows button to complete task, if it is not yet complete */}
                <br /><br /><br /><br />
                <FancyText text={currentMessage} />                              {/* Displays motivational message depending on index  */}
            </div>

            <h4>
                <button onClick={handleClick}>          {/* Button to increase index and cycle through tasks */}
                    Next
                </button><br />
                ({index + 1} of {tasks.length})
            </h4>
        </>
    )
}