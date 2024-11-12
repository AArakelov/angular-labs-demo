import {Component, computed, signal} from '@angular/core';

// Кастомная функция равенства для объектов пользователя
function customEqualityFunction(prevValue: any, nextValue: any): boolean {
  return prevValue.id === nextValue.id && prevValue.name === nextValue.name;
}

@Component({
  selector: 'app-equality-function-demo',
  standalone: true,
  imports: [],
  templateUrl: './equality-function-demo.component.html',
  styleUrl: './equality-function-demo.component.scss'
})
export class EqualityFunctionDemoComponent {
  // Создаем сигнал с объектом user, используя кастомную функцию равенства
  user = signal({id: 1, name: 'John Doe'}, {equal: customEqualityFunction});

  
  // Создаем вычисляемый сигнал, который зависит от user
  userInfo = computed(() => {
    console.log('Recomputing userInfo');
    const user = this.user();
    return `User: ${user.name}, ID: ${user.id}`;
  });

  // Метод для обновления данных пользователя
  updateUser() {
    console.log('Updating user data...');
    this.user.update(prev => {
      const newUser = {
        id: prev.id === 1 ? 2 : 1, // Изменяем id
        name: prev.name === 'John Doe' ? 'Jane Smith' : 'John Doe' // Изменяем имя
      };
      console.log('New user data:', newUser);
      return newUser;
    });
  }
}
