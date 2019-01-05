import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ToDoComponent } from './to-do.component';

import { ToDoListComponent } from './to-do-list/to-do-list.component';

export const routes: Routes = [
    {
        path: '',
        component: ToDoComponent,
        children: [
            { path: 'list', component: ToDoListComponent },
            { path: '', redirectTo: 'list', pathMatch: 'full' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [
    ]
})
export class ToDoRouting { }
