import { Component } from '@angular/core';

@Component({
    selector: 'rtd-root',
    template: '<router-outlet></router-outlet>'
})
export class AppComponent {
    title = 'Random To-Do List';
}
