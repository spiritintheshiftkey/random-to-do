import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { ToDoRouting } from './to-do.routing';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ToDoItemComponent } from './to-do-item/to-do-item.component';
import { ToDoDialogComponent } from './to-do-dialog/to-do-dialog.component';
import { ToDoComponent } from './to-do.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        ToDoRouting
    ],
    declarations: [
        ToDoListComponent,
        ToDoItemComponent,
        ToDoDialogComponent,
        ToDoComponent]
})
export class ToDoModule { }
