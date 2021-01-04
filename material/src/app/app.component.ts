import { Component} from '@angular/core';
import { PhotosService } from './services/photos.service'
import {Photo} from './models/photo'
import { PageEvent } from '@angular/material/paginator';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'material';
  photos:Photo[] = [];
  constructor(public photosServices:PhotosService){
    this.photosServices.getPhotos()
    .subscribe(
      photos=>this.photos = photos,
      err=>console.log(err));
  }
  handlePage(e: PageEvent){
    this.page_size = e.pageSize
    this.page_number = e.pageIndex + 1
  }

  page_size: number = 5 // CANTIDAD DE ELEMENTOS POR PAGINA
  page_number: number = 1
  pageSizeOptions = [5, 10, 20, 50, 100]
}
