import {Component} from '@angular/core';
import {scaleAndColorAnimation} from '../../animations/animations';

@Component({
  selector: 'app-color-animation',
  standalone: true,
  imports: [],
  templateUrl: './color-animation.component.html',
  styleUrl: './color-animation.component.scss',
  animations: [scaleAndColorAnimation]
})
export class ColorAnimationComponent {
  state = 'small';
  isVisible = true;

  toggleState() {
    this.state = this.state === 'small' ? 'large' : 'small';
  }
}
