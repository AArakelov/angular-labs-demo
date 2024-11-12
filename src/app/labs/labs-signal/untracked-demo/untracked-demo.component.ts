import {Component, computed, effect, signal, untracked} from '@angular/core';

// Функция для симуляции untracked данных
// Симуляция запроса на сервер
function fetchDataFromServer(counterValue: number): Promise<string> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`Fetched data for counter value: ${counterValue}`);
    }, 1000);
  });
}

@Component({
  selector: 'app-untracked-demo',
  standalone: true,
  imports: [],
  templateUrl: './untracked-demo.component.html',
  styleUrl: './untracked-demo.component.scss'
})
export class UntrackedDemoComponent {
  // Сигнал с отслеживаемым состоянием
  counter = signal(0);
  isAdmin = signal(false)

  // Вычисляемый сигнал, который зависит от counter
  doubledCounter = computed(() => this.counter() * 2);

  // Эффект для выполнения запроса на сервер
  fetchDataEffect = effect(() => {
    console.log('Effect triggered', this.isAdmin());

    // Используем untracked для того, чтобы изменения не отслеживались как зависимость
    const result = untracked(() => fetchDataFromServer(this.counter()));

    result.then(data => {
      console.log(data);
    });
  });


  // Метод для обновления counter
  incrementCounter() {
    this.counter.update(value => value + 1);
    this.isAdmin.set(!this.isAdmin())
  }
}
