import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

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
    // let todo = <ToDo>{ id: this.idCounter, message: message, creationDate: new Date(), lastModified: new Date() }
    // this.store.dispatch(add(todo));
  }
}
