import { tasks } from "./tasks.js";
import { useState } from "react";

export default function TaskList() {
    let [index, setIndex] = useState(0);
    let currentTask = tasks[index];

    function handleClick() {
        if (index < tasks.length - 1) {
            setIndex(index + 1);
        }
        else {
            setIndex(0)
        }
    };

    return (
        <>
            <h2>Task List:</h2>

            <div>
                <u>Current Task:</u><br />
                {currentTask.task} {' - '} {currentTask.isCompleted ? 'Completed ✅' : 'Pending'}
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


