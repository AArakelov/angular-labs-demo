import {Component} from '@angular/core';
import {delayedAnimation} from '../../animations/animations';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-delayed-animation',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './delayed-animation.component.html',
  styleUrl: './delayed-animation.component.scss',
  animations: [delayedAnimation]
})
export class DelayedAnimationComponent {
  isVisible = true;

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }
}
