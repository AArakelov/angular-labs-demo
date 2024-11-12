import {Component, inject, OnInit} from '@angular/core';
import {PhotoStore} from './store/photo-store.service';
import {PhotoDetailComponent} from './photo-detail/photo-detail.component';
import {Photo} from './models/photo';

@Component({
  selector: 'app-photo-list',
  standalone: true,
  imports: [
    PhotoDetailComponent
  ],
  templateUrl: './photo-list.component.html',
  styleUrl: './photo-list.component.scss',
})
export class PhotoListComponent implements OnInit {
  readonly photoStore = inject(PhotoStore)!

  ngOnInit(): void {
    this.photoStore.loadPhotos()

  }

  deletePhoto(id: number) {
    this.photoStore.deletePhoto(id)
  }

  selectPhoto(photo: Photo) {
    this.photoStore.selectPhoto(photo)
  }
}
