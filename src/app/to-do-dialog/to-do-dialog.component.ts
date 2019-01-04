import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
    selector: 'rtd-to-do-dialog',
    templateUrl: './to-do-dialog.component.html',
    styleUrls: ['./to-do-dialog.component.css']
})
export class ToDoDialogComponent {
    public action: string;
    public name: string;

    constructor(
        private dialog: MatDialogRef<ToDoDialogComponent>,
        @Inject(MAT_DIALOG_DATA) data: any
    ) {
        this.name = data.name;
        this.action = data.action;
    }

    public confirm(): void {
        this.dialog.close(true);
    }
}

