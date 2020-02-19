import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CreateToDoAction } from 'src/app/store/actions/todo.actions';

@Component({
    selector: 'todo-new',
    templateUrl: './todo-new.component.html',
    styleUrls: ['./todo-new.component.css']
})
export class TodoNewComponent implements OnInit {
    message: string;

    constructor(private store: Store<any>) { }

    ngOnInit(): void {
    }

    onClickAdd(message: string) {
        let newToDo = { title: message, isCompleted: false };
        this.store.dispatch(CreateToDoAction({ payload: newToDo }));
    }
}
