import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
    selector: 'rtd-date-time-dialog',
    templateUrl: './date-time-dialog.component.html',
    styleUrls: ['./date-time-dialog.component.css']
})
export class DateTimeDialogComponent {
    public date: Date;
    public time: string;

    constructor(
        private dialog: MatDialogRef<DateTimeDialogComponent>
    ) {
        this.date = new Date();
        this.time = this.date.toTimeString();
    }

    public save(): void {
        const dateTimeString = `${this.date.toLocaleDateString()} ${this.time}`;
        const dateTime = new Date(dateTimeString);
        this.dialog.close(dateTime);
    }

}
