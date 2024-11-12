import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // Создаем writable signals для имени и возраста
  name = signal('John Doe');
  age = signal(30);

  constructor() {
  }

  // Метод для обновления имени
  updateName(newName: string) {
    this.name.set(newName); // Используем writable signal для обновления имени
  }

  // Метод для увеличения возраста
  incrementAge() {
    this.age.update(age => age + 1); // Используем writable signal для увеличения возраста
  }
}
