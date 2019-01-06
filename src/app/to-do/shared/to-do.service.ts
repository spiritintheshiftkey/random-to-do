import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ToDo } from './to-do.model';

const FAKE_TODOS: ToDo[] = [
    { id: 1, title: 'Dishes', active: true },
    { id: 3, title: 'Chores', active: false, reactivate: new Date('2019-01-05') },
    { id: 2, title: 'Draw', active: true }
];

@Injectable({
    providedIn: 'root'
})
export class ToDoService {
    private allToDos: ToDo[] = FAKE_TODOS;

    public getActive(): Observable<ToDo[]> {
        this.checkForReactivation();
        return of(this.allToDos.filter((toDo: ToDo) => toDo.active));
    }

    public checkForReactivation(): void {
        const now = new Date();
        this.allToDos.forEach((toDo: ToDo) => {
            if (toDo.reactivate < now) {
                toDo.reactivate = undefined;
                toDo.active = true;
            }
        });
    }

    public setData(data: ToDo[]): void {
        data.forEach((editedToDo: ToDo) => {
            const index = this.allToDos.findIndex((existingToDo: ToDo) => existingToDo.id === editedToDo.id);
            if (index > -1) {
                this.allToDos[index] = editedToDo;
            } else {
                editedToDo.id = this.allToDos.length;
                this.allToDos.push(editedToDo);
            }
        });
    }
}
