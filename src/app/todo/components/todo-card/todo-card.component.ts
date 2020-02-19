import { Component, OnInit, Input } from '@angular/core';
import { ToDo } from '../../models/todo';

@Component({
  selector: 'todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.css']
})
export class TodoCardComponent implements OnInit {

  @Input('todo') todo: ToDo; 

  constructor() { }

  ngOnInit(): void {
  }

}
