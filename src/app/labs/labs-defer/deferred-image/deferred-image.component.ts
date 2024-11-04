import {Component} from '@angular/core';

@Component({
  selector: 'app-deferred-image',
  standalone: true,
  imports: [],
  templateUrl: './deferred-image.component.html',
  styleUrl: './deferred-image.component.scss'
})
export class DeferredImageComponent {
  isLoaded = false; // Переменная для контроля загрузки изображения

  onLoad() {
    console.log('Image loaded')
  }
}
