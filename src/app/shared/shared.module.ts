import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

// import { NgxChartsModule } from '@swimlane/ngx-charts';
import { Ng2PaginationModule } from 'ng2-pagination';
// C import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

import { MaterialModule } from '../material/material.module';

import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { DateTimeDialogComponent } from './date-time-dialog/date-time-dialog.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        CommonModule,
        FormsModule,
        FlexLayoutModule,
        MaterialModule,
        ReactiveFormsModule,
        RouterModule
    ],
    exports: [
        BrowserAnimationsModule,
        // ChartsModule,
        CommonModule,
        // ColumnSplitPipe,
        ConfirmationDialogComponent,
        FlexLayoutModule,
        FormsModule,
        HttpClientModule,
        MaterialModule,
        Ng2PaginationModule,
        // NgxMatSelectSearchModule,
        NotFoundComponent,
        RouterModule
    ],
    declarations: [
        // ColumnSplitPipe,
        ConfirmationDialogComponent,
        NotFoundComponent,
        ConfirmationDialogComponent,
        DateTimeDialogComponent
    ],
    entryComponents: [
        ConfirmationDialogComponent,
        DateTimeDialogComponent
    ]
})
export class SharedModule { }
