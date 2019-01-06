import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material';

import { ToDo } from '../shared/to-do.model';
import { DateTimeDialogComponent } from 'src/app/shared/date-time-dialog/date-time-dialog.component';

@Component({
    selector: 'rtd-to-do-item',
    templateUrl: './to-do-item.component.html',
    styleUrls: ['./to-do-item.component.css']
})
export class ToDoItemComponent {
    @Output() public changed = new EventEmitter<ToDo>();
    @Input() public toDo: ToDo;
    @Input() public nextUp: boolean;

    constructor(
        private dialog: MatDialog
    ) { }

    public complete(): void {
        this.toDo.active = false;
        this.changed.emit(this.toDo);
    }

    public schedule(type: string): void {
        const now = new Date();
        switch (type) {
            case 'hour':
                this.toDo.reactivate = new Date(now.setHours(now.getHours() + 1));
                this.complete();
                break;
            case 'day':
                const tomorrowSameTime = new Date(now.setDate(now.getDate() + 1));
                this.toDo.reactivate = new Date(tomorrowSameTime.setHours(9, 0, 0));
                this.complete();
                break;
            case 'custom':
            default:
                const dialogRef = this.dialog.open(DateTimeDialogComponent);
                dialogRef.afterClosed().subscribe((dateTime: Date) => {
                    if (dateTime) {
                        this.toDo.reactivate = dateTime;
                        this.complete();
                    }
                });
                break;
        }
    }
}
