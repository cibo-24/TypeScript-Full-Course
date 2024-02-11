import React from 'react'
import { todoType } from './appTypes'

type taskProp = {
    task: todoType;
    deleteTask(nameToDelete: string): void;
}

function TodoItem({ task, deleteTask }: taskProp) {
    return (
        <div className="card">
            <span>
                <p>{task.taskName}</p>
                <p>{task.workDay}</p>
                <button onClick={() => deleteTask(task.taskName)}>Sil</button>
            </span>
        </div>
    )
}

export default TodoItem;