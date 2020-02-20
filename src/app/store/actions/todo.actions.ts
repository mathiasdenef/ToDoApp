import { createAction, props } from '@ngrx/store';
import { ToDo } from 'src/app/todo/models/todo';

export const GetAllToDoAction = createAction('[ToDo] - Get All ToDo');

export const CreateToDoAction = createAction(
    '[ToDo] - Create ToDo',
    props<{ payload: ToDo }>()
);

export const DeleteToDoAction = createAction(
    '[ToDo] - Delete ToDo',
    props<{ payload: ToDo }>()
);

export const SelectToDoAction = createAction(
    '[ToDo] - Select ToDo',
    props<ToDo>()
);

export const CompleteToDoAction = createAction(
    '[ToDo] - Complete ToDo',
    props<{ payload: ToDo }>()
);

export const UncompleteToDoAction = createAction(
    '[ToDo] - Uncomplete ToDo',
    props<{ payload: ToDo }>()
);

export const BeginGetToDoAction = createAction('[ToDo] - Begin Get ToDo');

export const SuccessGetAllToDoAction = createAction(
    '[ToDo] - Success Get All ToDo',
    props<{ payload: ToDo[] }>()
);

export const BeginCreateToDoAction = createAction(
    '[ToDo] - Begin Create ToDo',
    props<{ payload: ToDo }>()
);

export const SuccessCreateToDoAction = createAction(
    '[ToDo] - Success Create ToDo',
    props<{ payload: ToDo }>()
);

export const ErrorToDoAction = createAction('[ToDo] - Error', props<{ payload: Error }>());