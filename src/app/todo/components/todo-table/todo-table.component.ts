import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import ToDoState from 'src/app/store/states/todo.state';
import { ToDo } from '../../models/todo';
import { DeleteToDoAction, SelectToDoAction, CompleteToDoAction, UncompleteToDoAction } from 'src/app/store/actions/todo.actions';

@Component({
    selector: 'todo-table',
    templateUrl: './todo-table.component.html',
    styleUrls: ['./todo-table.component.css']
})
export class TodoTableComponent implements OnInit {

    todos: ToDo[];
    columnsToDisplay = ['buttons', 'title'];

    todoSubscription: Subscription;

    constructor(private store: Store<{ todo: ToDoState }>) { }
    // constructor() { }

    ngOnInit(): void {
        this.todoSubscription = this.store.pipe(select('todo'), select('ToDos')).subscribe(
            result => {
                this.todos = result;
            });


    }

    ngOnDestroy() {
        this.todoSubscription.unsubscribe();
    }

    selectToDo(todo: ToDo) {
        this.store.dispatch(SelectToDoAction(todo));
    }

    deleteToDo(todo: ToDo) {
        this.store.dispatch(DeleteToDoAction({ payload: todo }));
    }

    completeToDo(todo: ToDo) {
        this.store.dispatch(CompleteToDoAction({ payload: todo }));
    }

    uncompleteToDo(todo: ToDo) {
        this.store.dispatch(UncompleteToDoAction({ payload: todo }));
    }
}
