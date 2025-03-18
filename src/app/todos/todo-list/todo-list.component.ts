import { Component, OnInit } from '@angular/core';
import { TodoDTO } from '../models/todo.dto';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';



@Component({
  selector: 'app-todo-list',
  standalone: false,
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit {
  todos: TodoDTO[] =[];

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select('todos').subscribe(todos => this.todos = todos );
  }


}
