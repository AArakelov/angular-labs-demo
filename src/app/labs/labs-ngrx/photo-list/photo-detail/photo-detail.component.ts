import {Component, inject} from '@angular/core';
import {PhotoStore} from '../store/photo-store.service';

@Component({
  selector: 'app-photo-detail',
  standalone: true,
  imports: [],
  templateUrl: './photo-detail.component.html',
  styleUrl: './photo-detail.component.scss'
})
export class PhotoDetailComponent {
  photoStore = inject(PhotoStore)
}
