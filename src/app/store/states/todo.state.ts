import { Todo } from 'src/app/todo/models/todo';

export interface TodoState {
    todos: Todo[];
    selectedTodo: Todo;
}