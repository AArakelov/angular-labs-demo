import {Component} from '@angular/core';

@Component({
  selector: 'app-conditional-switch-block',
  standalone: true,
  imports: [],
  templateUrl: './conditional-switch-block.component.html',
  styleUrl: './conditional-switch-block.component.scss'
})
export class ConditionalSwitchBlockComponent {

  status: 'loading' | 'error' | 'success' = 'loading'; // начальное значение

  // Метод для изменения статуса
  updateStatus(newStatus: 'loading' | 'error' | 'success') {
    this.status = newStatus;
  }
}
