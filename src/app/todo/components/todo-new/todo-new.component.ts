import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { CreateToDoAction, ErrorToDoAction } from 'src/app/store/actions/todo.actions';
import { ToDo } from '../../models/todo';

@Component({
    selector: 'todo-new',
    templateUrl: './todo-new.component.html',
    styleUrls: ['./todo-new.component.css']
})
export class TodoNewComponent implements OnInit {
    message: string;
    todos: ToDo[];
    constructor(private store: Store<any>) { }

    ngOnInit(): void {
        this.store.pipe(select('todo'), select('ToDos')).subscribe(
            result => {
                this.todos = result;
            }
        );
    }

    ngOnDestroy() {

    }

    onClickAdd(message: string) {
        let newToDo = { title: message, isCompleted: false };
        if (!this.todos.map(x => x.title).includes(message)) {
            this.store.dispatch(CreateToDoAction({ payload: newToDo }));
        } else {
            this.store.dispatch(ErrorToDoAction({ payload: new Error("Message already exists") }));
        }
        this.message = undefined;
    }
}
