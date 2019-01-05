import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ToDoItemComponent } from './to-do-item/to-do-item.component';
import { ToDoDialogComponent } from './to-do-dialog/to-do-dialog.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ToDoListComponent,
        ToDoItemComponent,
        ToDoDialogComponent]
})
export class ToDoModule { }
