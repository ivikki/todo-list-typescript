import React, {useCallback, useState} from 'react';

interface TodoFormProps {
    onAdd(title: string):void
}

export const TodoForm: React.FC<TodoFormProps> = ({ onAdd }) => {
    const [title, setTitle] = useState<string>('');

    const changeTitle = useCallback((e: React.ChangeEvent<HTMLInputElement>) =>
        setTitle(e.target.value),
        []);

    const handlerAddTodo = useCallback((e: React.KeyboardEvent) => {
        if(e.key === "Enter") {
            onAdd(title);
            setTitle('');
        }},
        [onAdd, title]);

    return(
        <div className="input-field mt2">
            <input
                placeholder="Введите название дела"
                id="title"
                type="text"
                value={title}
                onChange={changeTitle}
                onKeyPress={handlerAddTodo}
            />
            <label htmlFor="title" className="active">Введите название дела</label>
        </div>
    )
};