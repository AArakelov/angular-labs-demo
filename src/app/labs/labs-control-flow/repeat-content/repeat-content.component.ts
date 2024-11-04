import { Component } from '@angular/core';
import {NgClass, NgForOf} from '@angular/common';

@Component({
  selector: 'app-repeat-content',
  standalone: true,
  imports: [
    NgClass,
    NgForOf
  ],
  templateUrl: './repeat-content.component.html',
  styleUrl: './repeat-content.component.scss'
})
export class RepeatContentComponent {
  items: {id: number; name: string}[] = [
    { id: 1, name: 'Элемент 1' },
    { id: 2, name: 'Элемент 2' },
    { id: 3, name: 'Элемент 3' },
  ];
  categories = [
    {
      id: 1,
      name: 'Фрукты',
      items: [
        { id: 1, name: 'Яблоко' },
        { id: 2, name: 'Банан' }
      ]
    },
    {
      id: 2,
      name: 'Овощи',
      items: [
        { id: 3, name: 'Морковь' },
        { id: 4, name: 'Брокколи' }
      ]
    }
  ];
  selectItem(item: {id: number, name: string}) {
    alert(`Вы выбрали: ${item.name}`);
  }
}
