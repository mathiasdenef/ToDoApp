import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoState } from 'src/app/store/states/todo.state';
import { add } from 'src/app/store/actions/todo.actions';
import { Todo } from '../../models/todo';

@Component({
  selector: 'todo-new',
  templateUrl: './todo-new.component.html',
  styleUrls: ['./todo-new.component.css']
})
export class TodoNewComponent implements OnInit {

  idCounter: number = 0
  message: string;

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
  }

  onClickAdd(message: string) {
    this.idCounter++;
    let todo = <Todo>{ id: this.idCounter, message: message, creationDate: new Date(), lastModified: new Date() }
    this.store.dispatch(add(todo));
  }
}
