import { Component, OnInit, Input, Output, input } from '@angular/core';
import { TodoDTO } from '../models/todo.dto';
import { FormControl, Validators } from '@angular/forms';
import { AppState } from '../../app.reducer';
import { Store } from '@ngrx/store';
import { completeTodo, deleteTodo, editTodo } from '../todo.actions';

@Component({
  selector: 'app-todo-list-item',
  standalone: false,
  templateUrl: './todo-list-item.component.html',
  styleUrl: './todo-list-item.component.css'
})
export class TodoListItemComponent implements OnInit {
  @Input() todo!: TodoDTO;
  titleInput!: FormControl;
  isEditing: boolean = false;

  constructor (private store: Store<AppState>) {}

  ngOnInit(): void {
    this.titleInput = new FormControl(this.todo.title, Validators.required);
  }
  completeTask() : void {
    this.store.dispatch(completeTodo({id: this.todo.id}));
  }
  editTask(): void {
    this.isEditing = true;
    this.titleInput.setValue(this.todo.title);
  }
  deleteTask(): void {
    this.store.dispatch(deleteTodo({id: this.todo.id}))
  }
  submitTask(): void{
    this.isEditing = false;
    if (!this.titleInput.invalid && this.titleInput.value !== this.todo.title) {
      this.store.dispatch(
        editTodo({id: this.todo.id, title: this.titleInput.value})
      );
    }
  }
}

