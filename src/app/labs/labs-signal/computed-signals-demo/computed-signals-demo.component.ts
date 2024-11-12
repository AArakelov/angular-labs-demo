import {ChangeDetectionStrategy, Component, computed, signal} from '@angular/core';

@Component({
  selector: 'app-computed-signals-demo',
  standalone: true,
  imports: [],
  templateUrl: './computed-signals-demo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './computed-signals-demo.component.scss'
})
export class ComputedSignalsDemoComponent {
  // Создаем два writable сигнала: цена и количество
  price = signal(100); // Цена за единицу товара
  quantity = signal(2); // Количество товара

  // Создаем computed сигнал для общей стоимости
  totalCost = computed(() => {
    console.log('computed');
    return this.price() * this.quantity()
  }); // Вычисляем общую стоимость на основе price и quantity

  updatePrice(newPrice: number) {
    this.price.set(newPrice); // Обновляем цену
  }

  updateQuantity(newQuantity: number) {
    this.quantity.set(newQuantity); // Обновляем количество
  }
}
