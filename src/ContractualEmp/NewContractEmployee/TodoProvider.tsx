import * as React from 'react';
import {
  TodoContextType,
  ITodo,
  IProps,
} from './contractEmployeeTypes';
import { createContext } from 'react';

export const TodoContext = createContext<TodoContextType | null>(
  null
);

interface IProps1 {
  children: React.ReactNode;
}
const TodoProvider = ({ children }: IProps) => {
  const [todos, setTodos] = React.useState<ITodo[]>([
    {
      id: 1,
      title: 'post 1',
      description: 'this is a description',
      status: false,
      firstName: 'Rahul',
      lastName: 'Patil',
      email: 'rP@gmail.com',
      designation: 'web Developer',
    },
  ]);
  const saveTodo = (todo: ITodo) => {
    const newTodo: ITodo = {
      id: Math.random(), // not really unique - but fine for this example
      title: todo.title,
      description: todo.description,
      status: false,
      firstName: todo.firstName,
      lastName: todo.lastName,
      email: todo.email,
      designation: todo.designation,
    };
    setTodos([...todos, newTodo]);
  };
  const updateTodo = (id: number) => {
    todos.filter((todo: ITodo) => {
      if (todo.id === id) {
        todo.status = true;
        setTodos([...todos]);
      }
    });
  };
  return (
    <TodoContext.Provider value={{ todos, saveTodo, updateTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
