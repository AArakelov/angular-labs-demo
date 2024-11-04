import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-conditionally-content',
  standalone: true,
  imports: [   FormsModule],
  templateUrl: './conditionally-content.component.html',
  styleUrl: './conditionally-content.component.scss'
})
export class ConditionallyContentComponent {
  username: string = ''; // Переменная для проверки условного отображения
  status: 'loading' | 'error' | 'success' = 'success';
  isActive: boolean = true; // Логическая переменная для отображения активности пользователя
  userAge: number = 20; // Переменная возраста пользователя
  user: { profile?: { name: string; email: string } } | null = {
    profile: {
      name: 'John Doe',
      email: 'john.doe@example.com'
    }
  }; // Пример сложного объекта пользователя


  loadData() {
    this.status = 'loading';
    setTimeout(() => {
      // Имитация загрузки данных
      const random = Math.random();
      if (random < 0.5) {
        this.status = 'error';
      } else {
        this.status = 'success';
      }
    }, 2000);
  }
}
