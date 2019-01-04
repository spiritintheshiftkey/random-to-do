import { Component, OnInit } from '@angular/core';

import { ToDo } from '../shared/to-do.model';
import { ToDoService } from '../shared/to-do.service';

@Component({
    selector: 'rtd-to-do-list',
    templateUrl: './to-do-list.component.html',
    styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
    public nextUp: ToDo;
    public toDos: ToDo[];

    constructor(
        private toDoService: ToDoService
    ) { }

    public add(): void {
        // open dialog
    }

    public getNext(): void {
        const randomIndex = Math.floor(Math.random() * this.toDos.length);
        this.nextUp = this.toDos[randomIndex];
    }

    public ngOnInit(): void {
        this.toDoService.getActive()
            .subscribe((toDos: ToDo[]) => {
                this.toDos = toDos;
            });
    }

}
