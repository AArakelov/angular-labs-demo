import {Component} from '@angular/core';
import {HeavyComponentComponent} from '../idle-demo/heavy-component/heavy-component.component';

@Component({
  selector: 'app-interaction-demo',
  standalone: true,
  imports: [
    HeavyComponentComponent
  ],
  templateUrl: './interaction-demo.component.html',
  styleUrl: './interaction-demo.component.scss'
})
export class InteractionDemoComponent {
  contentLoaded: boolean = false;

  loadContent() {
    console.log('CLICK')
    this.contentLoaded = true; // Устанавливаем флаг загрузки контента
  }
}
