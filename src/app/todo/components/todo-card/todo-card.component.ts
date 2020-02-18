import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.css']
})
export class TodoCardComponent implements OnInit {

  // @Input('todo') todo: Todo; 

  constructor() { }

  ngOnInit(): void {
  }

}
