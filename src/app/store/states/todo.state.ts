import { ToDo } from 'src/app/todo/models/todo';

export default class ToDoState {
    ToDos: Array<ToDo>;
    ToDoError: Error;
}

export const initializeState = (): ToDoState => {
    return { ToDos: Array<ToDo>(), ToDoError: null };
};