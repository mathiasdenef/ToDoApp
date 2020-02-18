import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';
import { TodoState } from 'src/app/store/states/todo.state';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

@Component({
    selector: 'todo-table',
    templateUrl: './todo-table.component.html',
    styleUrls: ['./todo-table.component.css']
})
export class TodoTableComponent implements OnInit {

    todos: Todo[];
    columnsToDisplay = ['buttons', 'id', 'message', 'creationDate'];

    todoSubscription: Subscription;

    constructor(private store: Store<{ todo: TodoState }>) { }

    ngOnInit(): void {
        this.initTodos();
        this.todoSubscription = this.store.pipe(select('todo'), select('todos')).subscribe(
            result => {
                this.todos = result;
                console.log("component", result);
            }
        );
    }

    ngOnDestroy() {
        this.todoSubscription.unsubscribe();
    }

    initTodos() {
        this.todos = [
            { id: 1, message: "This is my first todo", creationDate: new Date(), lastModified: new  Date() },
            { id: 2, message: "This is my second todo", creationDate: new Date(), lastModified: new  Date() },
            { id: 3, message: "This is my third todo", creationDate: new Date(), lastModified: new  Date() }
        ];
    }

}
