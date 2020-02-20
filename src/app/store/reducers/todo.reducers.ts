import ToDoState, { initializeState } from '../states/todo.state';
import { createReducer, on, Action } from '@ngrx/store';
import * as ToDoActions from '../actions/todo.actions';
import { ToDo } from 'src/app/todo/models/todo';

export const intialState = initializeState();

const reducer = createReducer(
    intialState,
    on(ToDoActions.GetAllToDoAction, state => {
        return state;
    }),
    on(ToDoActions.CreateToDoAction, (state: ToDoState, { payload }) => {
        return { ...state, ToDos: [...state.ToDos, payload], SelectedToDo: null, ToDoError: null };
    }),
    on(ToDoActions.DeleteToDoAction, (state: ToDoState, { payload }) => {
        return { ...state, ToDos: [...state.ToDos.filter(x => x.title !== payload.title)], SelectedToDo: null, ToDoError: null };
    }),
    on(ToDoActions.SelectToDoAction, (state: ToDoState, todo: ToDo) => {
        return { ...state, SelectedToDo: todo, ToDoError: null };
    }),
    on(ToDoActions.CompleteToDoAction, (state: ToDoState, { payload }) => {
        return { ...state, ToDos: [...state.ToDos.map(x => x.title == payload.title ? { ...x, isCompleted: true } : x)], SelectedToDo: null, ToDoError: null };
    }),
    on(ToDoActions.UncompleteToDoAction, (state: ToDoState, { payload }) => {
        return { ...state, ToDos: [...state.ToDos.map(x => x.title == payload.title ? { ...x, isCompleted: false } : x)], SelectedToDo: null, ToDoError: null };
    }),
    on(ToDoActions.SuccessGetAllToDoAction, (state: ToDoState, { payload }) => {
        return { ...state, ToDos: payload };
    }),
    on(ToDoActions.SuccessCreateToDoAction, (state: ToDoState, { payload }) => {
        return { ...state, ToDos: [...state.ToDos, payload], ToDoError: null };
    }),
    on(ToDoActions.ErrorToDoAction, (state: ToDoState, { payload }) => {
        return { ...state, ToDoError: payload };
    })
);

export function ToDoReducer(state: ToDoState | undefined, action: Action) {
    return reducer(state, action);
}