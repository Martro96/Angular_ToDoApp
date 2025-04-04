import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TodoListComponent } from "./todo-list/todo-list.component";
import { TodoListItemComponent } from "./todo-list-item/todo-list-item.component";
import { TodoAddComponent } from "./todo-add/todo-add.component";
import { HttpClientModule } from "@angular/common/http";

import { ReactiveFormsModule} from '@angular/forms'


@NgModule ({
    declarations: [TodoListComponent, TodoListItemComponent, TodoAddComponent],
    imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
    exports: [TodoListComponent, TodoListItemComponent, TodoAddComponent]
})
export class TodoModule {}