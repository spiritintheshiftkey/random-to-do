import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import { ToDo } from '../shared/to-do.model';

@Component({
    selector: 'rtd-to-do-dialog',
    templateUrl: './to-do-dialog.component.html',
    styleUrls: ['./to-do-dialog.component.css']
})
export class ToDoDialogComponent {
    public data: ToDo;

    constructor(
        private dialog: MatDialogRef<ToDoDialogComponent>,
        @Inject(MAT_DIALOG_DATA) data: any
    ) {
        this.data = { ...data }; // Copy item so changes can be cancelled
    }

    public save(): void {
        this.dialog.close(this.data);
    }
}
