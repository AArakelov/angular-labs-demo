import {Component} from '@angular/core';
import {bounceAnimation} from '../../animations/animations';


@Component({
  selector: 'app-bounce-animation',
  standalone: true,
  imports: [],
  templateUrl: './bounce-animation.component.html',
  styleUrl: './bounce-animation.component.scss',
  animations: [bounceAnimation]
})
export class BounceAnimationComponent {
  isVisible = true;

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }
}
