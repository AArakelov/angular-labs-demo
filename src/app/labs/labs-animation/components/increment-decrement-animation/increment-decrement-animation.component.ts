import {Component} from '@angular/core';

@Component({
  selector: 'app-increment-decrement-animation',
  standalone: true,
  imports: [],
  templateUrl: './increment-decrement-animation.component.html',
  styleUrl: './increment-decrement-animation.component.scss',
  animations: []
})
export class IncrementDecrementAnimationComponent {
  value = 0;

  increment() {
    this.value++;
  }

  decrement() {
    this.value--;
  }
}
