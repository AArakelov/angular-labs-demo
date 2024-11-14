import {Component} from '@angular/core';
import {delayedAnimation} from '../../animations/animations';


@Component({
  selector: 'app-delayed-animation',
  standalone: true,
  imports: [],
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
