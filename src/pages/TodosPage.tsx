import React, {useEffect, useState} from 'react';
import {TodoForm} from "../components/TodoForm";
import {TodoList} from "../components/TodoList";
import {ITodo} from "../interface";

export const TodosPage: React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[];
        setTodos(saved);
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]);

    const addTodoHandler = (title: string) => {
        const todo: ITodo = {
            title: title,
            id: Date.now(),
            completed: false
        };
        setTodos(prev => [todo, ...prev])
    };

    const handleToggle = (id: number) => {
        setTodos(prev => prev.map(todo => {
                if(todo.id === id) {
                    return {
                        title: todo.title,
                        completed: !todo.completed,
                        id: todo.id
                    }
                }
                return todo;
            }
        ))
    };

    const handleRemove = (id: number) => {
        const shouldRemove = window.confirm("Вы уверены, что хотите удалить элемент?");
        if(shouldRemove){
            setTodos(prev => prev.filter(todo => todo.id !== id));
        }
    };
    return (
        <>
            <TodoForm onAdd={addTodoHandler} />
            <TodoList todos={todos} onToggle={handleToggle} onRemove={handleRemove} />
        </>
    )
};