import {Component, inject, Injector, runInInjectionContext} from '@angular/core';
import {LoggingService} from '../../services/logging.service';

@Component({
  selector: 'app-di-example',
  standalone: true,
  imports: [],
  template: `
    <h1>Пример использования сервиса логирования</h1>
    <button (click)="logMessage()">Логировать сообщение</button>
  `,
  styles: [`
    h1 {
      color: #00796b;
    }

    button {
      padding: 10px 15px;
      background-color: #00796b;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }

    button:hover {
      background-color: #004d40;
    }
  `]
})
export class DiExampleComponent {
  // private loggingService = inject(LoggingService); // Используем функцию inject для получения сервиса
  constructor(private injector: Injector) {
  }

  logMessage() {
    runInInjectionContext(this.injector, () => {
      const loggingService = inject(LoggingService); // Используем функцию inject для получения сервиса
      loggingService.log('Кнопка была нажата!'); // Вызываем метод логирования

    })

  }
}
