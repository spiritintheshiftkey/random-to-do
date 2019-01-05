import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ToDo } from './to-do.model';

const FAKE_TODOS: ToDo[] = [
    { id: 1, title: 'Dishes', active: true },
    { id: 3, title: 'Chores', active: false },
    { id: 2, title: 'Draw', active: true }
];

@Injectable({
    providedIn: 'root'
})
export class ToDoService {

    constructor() { }

    public getActive(): Observable<ToDo[]> {
        return of(FAKE_TODOS.filter((toDo: ToDo) => toDo.active));
    }
}
