export interface ITodo {
  id: number;
  title: string;
  description: string;
  status: boolean;
  firstName: string;
  lastName: string;
  email: string;
  designation: string;
}
export type TodoContextType = {
  todos: ITodo[];
  saveTodo: (todo: ITodo) => void;
  updateTodo: (id: number) => void;
};

export interface IProps {
  children: React.ReactNode;
}
