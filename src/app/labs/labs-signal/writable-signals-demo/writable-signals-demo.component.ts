import {Component, signal} from '@angular/core';

@Component({
  selector: 'app-writable-signals-demo',
  standalone: true,
  imports: [],
  templateUrl: './writable-signals-demo.component.html',
  styleUrl: './writable-signals-demo.component.scss'
})
export class WritableSignalsDemoComponent {
  // Создаем writable сигнал для счетчика
  counter = signal(0);

  increment() {
    this.counter.update(count => count + 1); // Увеличиваем значение счетчика
  }

  decrement() {
    this.counter.update(count => count - 1); // Уменьшаем значение счетчика
  }
}
