import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { createTodo } from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  standalone: false,
  templateUrl: './todo-add.component.html',
  styleUrl: './todo-add.component.css'
})
export class TodoAddComponent implements OnInit {

  titleInput: FormControl; 
  
  constructor( private store: Store<AppState>) {
      this.titleInput = new FormControl('', Validators.required);
  }
  
  ngOnInit(): void {}

  addTodoTask(): void {
    if (this.titleInput.valid) {
      this.store.dispatch(createTodo({title: this.titleInput.value}))
      this.titleInput.reset();
    }
  }
}
