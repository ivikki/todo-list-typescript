import React, {useMemo} from 'react';
import {ITodo} from '../interface';

interface TodoListProps {
    todos: ITodo[],
    onToggle(id: number): void,
    onRemove(id: number): void
}

export const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onRemove }) => {

    const preparedTodos = useMemo(() => todos.map(todo => ({
        ...todo,
        handleToggle: () => onToggle(todo.id),
        handleRemove: (e: React.MouseEvent) => {
            e.preventDefault();
            onRemove(todo.id);
        }
    })), [todos, onToggle, onRemove]);

    return(
        <ul>
            {preparedTodos.map(todo =>
                <li className={`todo ${todo.completed ? "completed" : ""}`} key={todo.id}>
                    <label>
                        <input type="checkbox" onChange={todo.handleToggle}/>
                        <span>{todo.title}</span>
                        <i className="material-icons red-text" onClick={todo.handleRemove}>delete</i>
                    </label>
                </li>
            )}
        </ul>
    )
};