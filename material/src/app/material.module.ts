import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
    imports: [
        MatButtonModule,
        MatCardModule,
        MatPaginatorModule,
       
    ],
    exports: [
        MatButtonModule,
        MatCardModule,
        MatPaginatorModule,
       
    ]
})
export class MaterialModule{}