import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorIntl} from '@angular/material/paginator';
//FROM US
import { AppComponent } from './app.component';
import { CustomMatPaginatorIntl } from './paginator-es';
import { PhotosService } from './services/photos.service'
import { MaterialModule } from './material.module';
import { PaginatePipe } from './pipes/paginate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PaginatePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [
    PhotosService,
    {
      provide: MatPaginatorIntl, 
      useClass: CustomMatPaginatorIntl
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
