import {Component, effect, signal} from '@angular/core';

@Component({
  selector: 'app-effect-demo',
  standalone: true,
  imports: [],
  templateUrl: './effect-demo.component.html',
  styleUrl: './effect-demo.component.scss'
})
export class EffectDemoComponent {
  // Создаем signal для счетчика
  count = signal(0);

  // Создаем signal для данных пользователя
  userData = signal<{ name: string, age: number }>({name: 'John', age: 30});

  // Эффект для отслеживания изменений в count
  countEffect = effect(() => {
    console.log(`Count changed: ${this.count()}`);
  });

  // Эффект для отслеживания изменений в userData
  userDataEffect = effect(() => {
    console.log(`User data changed:`, this.userData());
  });

  // Метод для изменения count
  increment() {
    this.count.update(value => value + 1);
  }

  // Метод для изменения userData
  updateUser() {
    this.userData.update(data => ({name: 'Jane', age: data.age + 1}));
  }
}
