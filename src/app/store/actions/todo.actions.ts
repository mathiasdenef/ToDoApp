import { createAction, props } from '@ngrx/store';
import { Todo } from 'src/app/todo/models/todo';

export const add = createAction('[todo-table Component] Add item to list', props<Todo>());
// export const remove = createAction('[todo-table Component] Remove item from list');
// export const update = createAction('[todo-table Component] Update item from list');
// export const select = createAction('[todo-table Component] Select item from list');