import React, { useState } from 'react';
import "../../assets/task.css";

function TrelloTask() {
    const [columns, setColumns] = useState<Array<{ tasks: { name: string, description: string }[] }>>([]);
    const [taskNameInputs, setTaskNameInputs] = useState<string[]>(['']);
    const [taskDescriptionInputs, setTaskDescriptionInputs] = useState<string[]>(['']);

    const handleTaskNameChange = (event: React.ChangeEvent<HTMLInputElement>, columnIndex: number) => {
        const newInputs = [...taskNameInputs];
        newInputs[columnIndex] = event.target.value;
        setTaskNameInputs(newInputs);
    };

    const handleTaskDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>, columnIndex: number) => {
        const newInputs = [...taskDescriptionInputs];
        newInputs[columnIndex] = event.target.value;
        setTaskDescriptionInputs(newInputs);
    };

    const deleteTask = (columnIndex: number, taskIndex: number) => {
        const updatedColumns = [...columns];
        updatedColumns[columnIndex].tasks.splice(taskIndex, 1);
        setColumns(updatedColumns);
    };

    const addColumn = () => {
        setColumns([...columns, { tasks: [] }]);
        setTaskNameInputs([...taskNameInputs, '']);
        setTaskDescriptionInputs([...taskDescriptionInputs, '']);
    };

    const addTaskToColumn = (columnIndex: number) => {
        const updatedColumns = [...columns];
        updatedColumns[columnIndex].tasks.push({ name: taskNameInputs[columnIndex], description: taskDescriptionInputs[columnIndex] });
        setColumns(updatedColumns);
        setTaskNameInputs([...taskNameInputs.slice(0, columnIndex), '', ...taskNameInputs.slice(columnIndex + 1)]);
        setTaskDescriptionInputs([...taskDescriptionInputs.slice(0, columnIndex), '', ...taskDescriptionInputs.slice(columnIndex + 1)]);
    };

    return (
        <div className="container mt-4">
            <button className="btn btn-primary mb-3 " onClick={addColumn}>Add Column</button>
            <div className="card-columns d-flex">
                {columns.map((column, columnIndex) => (
                    <div className="card d" key={columnIndex}>
                        <div className="card-body">
                            <h5 className="card-title">Column {columnIndex + 1}</h5>
                            {column.tasks.map((task, taskIndex) => (
                                <div className="card mb-2" key={taskIndex}>
                                    <div className="card-body">
                                        <h5 className="card-title">{task.name}</h5>
                                        <p className="card-text">{task.description}</p>
                                        <button className="btn btn-danger" onClick={() => deleteTask(columnIndex, taskIndex)}>Delete</button>
                                    </div>
                                </div>
                            ))}
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Task Name"
                                    value={taskNameInputs[columnIndex]}
                                    onChange={(event) => handleTaskNameChange(event, columnIndex)}
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Task Description"
                                    value={taskDescriptionInputs[columnIndex]}
                                    onChange={(event) => handleTaskDescriptionChange(event, columnIndex)}
                                />
                            </div>
                            <button className="btn btn-primary mb-3" onClick={() => addTaskToColumn(columnIndex)}>Add Task</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TrelloTask;
