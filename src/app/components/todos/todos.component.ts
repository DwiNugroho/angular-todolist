import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos:Todo[];

  constructor() { }

  ngOnInit() {
    this.todos = [
      {
        id: 1,
        title: 'Slicing Todos Page',
        completed: false
      },
      {
        id: 2,
        title: 'Make a Todo Item',
        completed: true
      },
      {
        id: 3,
        title: 'Create Toggle function for Handle checkbox',
        completed: false
      },
    ];
  }

}
