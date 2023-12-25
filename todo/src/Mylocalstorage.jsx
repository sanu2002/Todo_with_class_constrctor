import React, { useEffect, useState } from 'react';

import './local.css'

import './index.css'



function MyLocalStorage() {
    class LocalStorage {
        constructor() {
            const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
            this.storage = { todos: storedTodos };
        }

        setStorage(todos) {
            this.storage.todos = todos;
            localStorage.setItem('todos', JSON.stringify(todos));
        }

        getStorage() {
            return this.storage.todos;
        }
    }

    const localInstance = new LocalStorage();
    const [todos, setTodos] = useState(localInstance.getStorage());
    const [newTodo, setNewTodo] = useState('');
    const [editingIndex, setEditingIndex] = useState(null);
    const [editTodo, setEditTodo] = useState('');

    const handleAddTodo = () => {
        const updatedTodos = [...todos, newTodo];
        localInstance.setStorage(updatedTodos);
        setTodos(updatedTodos);
        setNewTodo('');
    };

    const handleEditTodo = (index) => {
        setEditingIndex(index);
        setEditTodo(todos[index]);
    };

    const handleUpdateTodo = () => {
        const updatedTodos = [...todos];
        updatedTodos[editingIndex] = editTodo;
        localInstance.setStorage(updatedTodos);
        setTodos(updatedTodos);
        setEditingIndex(null);
        setEditTodo('');
    };

    const handleDeleteTodo = (index) => {
        const updatedTodos = [...todos.slice(0, index), ...todos.slice(index + 1)];
        localInstance.setStorage(updatedTodos);
        setTodos(updatedTodos);
        setEditingIndex(null);
        setEditTodo('');
    };

    useEffect(() => {
        const storedTodos = localInstance.getStorage();
        setTodos(storedTodos);
    }, []);

    return (
        <div className="todo-container bg-gradient-to-r from-cyan-500 to-blue-500">
            <ul className="todo-list">
                {todos.map((todo, index) => (
                    <li key={index} className="todo-item">
                        {editingIndex === index ? (
                            <>
                                <input
                                    type="text"
                                    value={editTodo}
                                    onChange={(e) => setEditTodo(e.target.value)}
                                    className="edit-input"
                                />
                                <button onClick={handleUpdateTodo} className="update-button">
                                    Update
                                </button>
                            </>
                        ) : (
                            <>
                                <span>{todo}</span>
                                <button onClick={() => handleEditTodo(index)} className="edit-button">
                                    Edit
                                </button>
                                <button onClick={() => handleDeleteTodo(index)} className="delete-button">
                                    Delete
                                </button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
            <div className="add-todo">
                <label>
                    New Todo:
                    <input
                        type="text"
                        value={newTodo}
                        onChange={(e) => setNewTodo(e.target.value)}
                        className="new-todo-input"
                    />
                </label>
                <button onClick={handleAddTodo} className="add-todo-button">
                    Add Todo
                </button>
            </div>
        </div>
    );
}

export default MyLocalStorage;
