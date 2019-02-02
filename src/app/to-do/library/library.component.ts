import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { ToDo } from '../shared/to-do.model';
import { ToDoService } from '../shared/to-do.service';
import { ToDoDialogComponent } from '../to-do-dialog/to-do-dialog.component';

@Component({
    selector: 'rtd-library',
    templateUrl: './library.component.html',
    styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
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

    public ngOnInit(): void {
        this.toDoService.getAll()
            .subscribe((toDos: ToDo[]) => {
                this.toDos = toDos;
            });
    }

    public save(changedToDos: ToDo[]): void {
        this.toDoService.setData(changedToDos);
        this.toDoService.getAll()
            .subscribe((toDos: ToDo[]) => {
                this.toDos = toDos;
            });
    }

}
