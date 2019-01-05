import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { ToDo } from '../shared/to-do.model';
import { ToDoService } from '../shared/to-do.service';
import { ToDoDialogComponent } from '../to-do-dialog/to-do-dialog.component';

@Component({
    selector: 'rtd-to-do-list',
    templateUrl: './to-do-list.component.html',
    styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
    public nextUp: ToDo;
    public toDos: ToDo[];

    constructor(
        private dialog: MatDialog,
        private toDoService: ToDoService
    ) { }

    public add(): void {
        this.dialog.open(ToDoDialogComponent, { disableClose: true })
            .afterClosed().subscribe((newItem: ToDo) => {
                if (newItem) {
                    this.toDos.push(newItem);
                }
            });
    }

    public edit(): void {
        this.dialog.open(ToDoDialogComponent, { disableClose: true })
            .afterClosed().subscribe((editedItem: ToDo) => {
                if (editedItem) {
                    const itemIndex = this.toDos.findIndex((toDo: ToDo) => toDo.id === editedItem.id);
                    this.toDos.splice(itemIndex, 1, editedItem);
                }
            });
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
