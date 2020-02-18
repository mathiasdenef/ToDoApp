import { createReducer, on } from "@ngrx/store";
import { add } from '../actions/todo.actions';
import cloneDeep from 'lodash/clonedeep';
import { TodoState } from '../states/todo.state';

export const initialState: TodoState = { todos: [], selectedTodo: null };

const _todoReducer = createReducer(initialState,
    on(add, (state, todo) => {
        state.todos.push(todo);
        let cloneState = cloneDeep(state);
        console.log("deep copy state", cloneState);
        return cloneState;
    })
);

export function todoReducer(state, action) {
    return _todoReducer(state, action);
}