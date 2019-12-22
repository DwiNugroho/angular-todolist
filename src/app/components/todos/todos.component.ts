import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos:Todo[];

  constructor(private TodoService:TodoService) { }

  ngOnInit() {
    this.TodoService.getTodos().subscribe(todos => {
      this.todos = todos
    });
  }

}
