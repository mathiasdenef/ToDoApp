import { ToDo } from 'src/app/todo/models/todo';

export default class ToDoState {
    ToDos: Array<ToDo>;
    SelectedToDo: ToDo;
    ToDoError: Error;
}

export const initializeState = (): ToDoState => {
    return { ToDos: [], SelectedToDo: null, ToDoError: null };
};