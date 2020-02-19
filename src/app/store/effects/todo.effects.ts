import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, Effect } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { GetAllToDoAction, SuccessGetAllToDoAction, CreateToDoAction, DeleteToDoAction, CompleteToDoAction, UncompleteToDoAction } from '../actions/todo.actions';
import { ToDo } from 'src/app/todo/models/todo';

@Injectable()
export class ToDoEffects {

    persistStateCreateToDoAction$ = createEffect(() => this.actions$.pipe(
        ofType(CreateToDoAction),
        tap(x => {
            let currentTodos
            if (localStorage.getItem('todos')) {
                currentTodos = <ToDo[]>JSON.parse(localStorage.getItem('todos'));
            } else {
                currentTodos = [];
            }
            let todos = currentTodos.concat(x.payload);
            localStorage.setItem('todos', JSON.stringify(todos));
        })), { dispatch: false });

    persistStateDeleteToDoAction$ = createEffect(() => this.actions$.pipe(
        ofType(DeleteToDoAction),
        tap(x => {
            let currentTodos: ToDo[];
            if (localStorage.getItem('todos')) {
                currentTodos = <ToDo[]>JSON.parse(localStorage.getItem('todos'));
            } else {
                currentTodos = [];
            }
            let todos = currentTodos.filter(y => y.title != x.payload.title);
            localStorage.setItem('todos', JSON.stringify(todos));
        })), { dispatch: false });

    persistStateCompleteToDoAction$ = createEffect(() => this.actions$.pipe(
        ofType(CompleteToDoAction),
        tap(x => {
            let currentTodos: ToDo[];
            if (localStorage.getItem('todos')) {
                currentTodos = <ToDo[]>JSON.parse(localStorage.getItem('todos'));
            } else {
                currentTodos = [];
            }
            let todos = currentTodos.map(y => y.title == x.payload.title ? { ...y, isCompleted: true } : y);
            localStorage.setItem('todos', JSON.stringify(todos));
        })), { dispatch: false });

    persistStateUnompleteToDoAction$ = createEffect(() => this.actions$.pipe(
        ofType(UncompleteToDoAction),
        tap(x => {
            let currentTodos: ToDo[];
            if (localStorage.getItem('todos')) {
                currentTodos = <ToDo[]>JSON.parse(localStorage.getItem('todos'));
            } else {
                currentTodos = [];
            }
            let todos = currentTodos.map(y => y.title == x.payload.title ? { ...y, isCompleted: false } : y);
            localStorage.setItem('todos', JSON.stringify(todos));
        })), { dispatch: false });

    getAllToDos$ = createEffect(() => this.actions$.pipe(
        ofType(GetAllToDoAction),
        map(x => {
            let todos;
            if (localStorage.getItem('todos')) {
                todos = <ToDo[]>JSON.parse(localStorage.getItem('todos'));
            } else {
                todos = [];
            }
            return SuccessGetAllToDoAction({ payload: todos });
        })));

    constructor(
        private actions$: Actions
    ) {
    }
}