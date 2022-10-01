import React from "react";
//components
import Todo from "../models/Todo";
import TodoItem from "./TodoItem";
//styles
import classes from "./Todos.module.css";

const Todos: React.FC<{ items: Todo[]; onRemoveTodo: ( id: string ) => void; }> = ( props ) =>
{
    return (
        <ul className={ classes.todos }>
            { props.items.map( ( item =>
                <TodoItem key={ item.id } text={ item.text } onRemoveTodo={ props.onRemoveTodo.bind( null, item.id ) } />
            ) ) }
        </ul>
    );
};

export default Todos;