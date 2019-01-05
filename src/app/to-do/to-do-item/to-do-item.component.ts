import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'rtd-to-do-item',
    templateUrl: './to-do-item.component.html',
    styleUrls: ['./to-do-item.component.css']
})
export class ToDoItemComponent implements OnInit {
    @Input() public title: string;

    constructor() { }

    ngOnInit() {
    }

}
