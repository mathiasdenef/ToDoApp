import { Component } from '@angular/core';
import ToDoState from './store/states/todo.state';
import { Store, select } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from './store/states/app.state';
import { ToDo } from './todo/models/todo';
import { GetAllToDoAction } from './store/actions/todo.actions';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'ToDoApp';
    todos: ToDo[];
    selectedTodo: ToDo;
    subscription: Subscription;

    constructor(private store: Store<AppState>) {

    }

    ngOnInit() {
        this.subscription = this.store.pipe(select('todo')).subscribe(
            result => {
                this.todos = result.ToDos;
                this.selectedTodo = result.SelectedToDo;
            }
        )

        console.log("test1");
        this.store.dispatch(GetAllToDoAction());
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
