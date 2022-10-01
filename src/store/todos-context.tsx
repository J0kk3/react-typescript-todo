import React from "react";
//hooks
import { useState } from "react";
//components
import Todo from "../models/Todo";

type TodosContextObj =
    {
        items: Todo[];
        addTodo: ( text: string ) => void;
        removeTodo: ( id: string ) => void;
    };

type Props =
    {
        children: React.ReactNode;
    };

export const TodosContext = React.createContext<TodosContextObj>(
    {
        items: [],
        addTodo: () => { },
        removeTodo: ( id: string ) => { }
    } );

const TodosContextProvider: React.FC<Props> = ( { children } ) =>
{
    const [ todos, setTodos ] = useState<Todo[]>( [] );

    const addTodoHandler = ( todoText: string ) =>
    {
        const newTodo = new Todo( todoText );

        setTodos( ( prevTodos ) =>
        {
            return prevTodos.concat( newTodo );
        } );
    };

    const removeTodoHandler = ( todoId: string ) =>
    {
        setTodos( ( prevTodos ) =>
        {
            return prevTodos.filter( todo => todo.id !== todoId );
        } );
    };

    const contextValue: TodosContextObj = {

        items: todos,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler
    };

    return (
        <TodosContext.Provider value={ contextValue }>
            { children }
        </TodosContext.Provider>
    );
};

export default TodosContextProvider;