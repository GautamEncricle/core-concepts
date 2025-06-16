import React, { useState } from 'react';

function Todo() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleAddTodo = () => {
        if (inputValue.trim() === '') return;
        setTodos([...todos, inputValue]);
        setInputValue('');
    };

    const handleDeleteTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    };

    const handleEditTodo = (index, newValue) => {
        const newTodos = todos.map((todo, i) => (i === index ? newValue : todo));
        setTodos(newTodos);
    };

    return (
        <div className="p-4 max-w-md mx-auto">
            <h1 className="text-2xl font-bold mb-4">📝 To-Do App</h1>

            <div className="flex mb-4">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="border p-2 rounded w-full mr-2"
                    placeholder="Add a task..."
                />
                <button
                    onClick={handleAddTodo}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Add Task
                </button>
            </div>

            <ul className="space-y-2">
                {todos.map((task, index) => (
                    <li
                        key={index}
                        className="p-2 border rounded flex justify-between items-center"
                    >
                        <input
                            type="text"
                            value={task}
                            onChange={(e) => handleEditTodo(index, e.target.value)}
                            className="border p-1 rounded w-full mr-2"
                        />
                        <button
                            onClick={() => handleDeleteTodo(index)}
                            className="text-red-500"
                        >
                            ❌
                        </button>
                    </li>
                ))}
            </ul>

            {todos.length > 0 && (
                <button
                    className="mt-4 text-sm text-red-600 underline"
                    onClick={() => setTodos([])}
                >
                    Clear All
                </button>
            )}
        </div>
    );
}

export default Todo;
