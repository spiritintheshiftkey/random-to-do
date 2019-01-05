import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
    selector: 'rtd-confirmation-dialog',
    templateUrl: './confirmation-dialog.component.html',
    styleUrls: ['./confirmation-dialog.component.css']
})
export class ConfirmationDialogComponent {
    public action: string;
    public name: string;

    constructor(
        private dialog: MatDialogRef<ConfirmationDialogComponent>,
        @Inject(MAT_DIALOG_DATA) data: any
    ) {
        this.action = data.action;
        this.name = data.name;
    }

    public confirm(): void {
        this.dialog.close(true);
    }
}
