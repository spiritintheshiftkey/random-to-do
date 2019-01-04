import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ToDoListComponent } from './to-do-list/to-do-list.component';

export const routes: Routes = [
    { path: '/list', component: ToDoListComponent }
];

@NgModule({
    exports: [RouterModule],
    imports: [
        RouterModule.forRoot(routes)
    ]
})
export class AppRouting { }
