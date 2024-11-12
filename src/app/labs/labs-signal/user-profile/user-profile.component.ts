import {Component, inject} from '@angular/core';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent {
  userService = inject(UserService)
  // Получаем writable signals из UserService
  name = this.userService.name;
  age = this.userService.age;

  // Обработчик для обновления имени
  updateName() {
    const newName = prompt('Введите новое имя');
    if (newName) {
      this.userService.updateName(newName); // Обновляем имя пользователя
    }
  }

  // Обработчик для увеличения возраста
  incrementAge() {
    this.userService.incrementAge(); // Увеличиваем возраст пользователя
  }
}
