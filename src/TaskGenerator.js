import { tasks } from "./tasks.js";
import { useState } from "react";
import { FancyText } from "./FancyText.js";
import { messages } from "./messages.js";


export default function TaskList() {
    let [index, setIndex] = useState(0);
    let currentTask = tasks[index];
    let currentMessage = messages[index];

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
                <FancyText title text="Task List"/>

            <div>
                <u>Current Task:</u><br />
                {currentTask.task} {' - '} {currentTask.isCompleted ? 'Completed ✅' : 'Pending'}
                <br/><br/>
                <FancyText text={ currentMessage }/>
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


