import { createReducer, on } from '@ngrx/store';
import { TodoDTO } from './models/todo.dto';
import { createTodo, completeTodo, editTodo, deleteTodo } from './todo.actions';
import { Action } from '@ngrx/store';


export const InitialState: TodoDTO[] = [ new TodoDTO('Terminar práctica 2')];

const _todoReducer = createReducer(
    InitialState, 
    on(createTodo, (state, { title }) => [...state, new TodoDTO(title)]),
    on(completeTodo, (state, {id}) => {
        return state.map((todo) => {
            if(todo.id === id) {
                return {
                    ...todo,
                    done: true,
                };
            } else {
                return todo
            }
        })

    }),
    on(editTodo, (state, {id, title}) => {
        return state.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    title: title
                };
            } else {
                return todo;
            }
        });
    }),
    on(deleteTodo, (state, {id}) => state.filter( todo => todo.id !== id))
);

export function todoReducer(state: TodoDTO[] | undefined, action: Action) {
    return _todoReducer(state, action);
}
