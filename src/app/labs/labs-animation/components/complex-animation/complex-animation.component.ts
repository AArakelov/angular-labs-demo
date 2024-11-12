import {Component} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {groupAnimation, sequenceAnimation, staggerAnimation, valueChangeAnimation} from '../../animations/animations';

@Component({
  selector: 'app-complex-animation',
  standalone: true,
  imports: [
    NgIf,
    NgForOf
  ],
  templateUrl: './complex-animation.component.html',
  styleUrl: './complex-animation.component.scss',
  animations: [
    valueChangeAnimation,
    groupAnimation,
    sequenceAnimation,
    staggerAnimation
  ]
})
export class ComplexAnimationComponent {
  value = 0;
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

  increment() {
    this.value++;
  }

  decrement() {
    this.value--;
  }
}
