import {Component} from '@angular/core';

import {ColorAnimationComponent} from './components/color-animation/color-animation.component';
import {DelayedAnimationComponent} from './components/delayed-animation/delayed-animation.component';
import {BounceAnimationComponent} from './components/bounce-animation/bounce-animation.component';
import {ComplexAnimationComponent} from './components/complex-animation/complex-animation.component';
import {
  IncrementDecrementAnimationComponent
} from './components/increment-decrement-animation/increment-decrement-animation.component';

@Component({
  selector: 'app-labs-animation',
  standalone: true,
  imports: [
    ColorAnimationComponent,
    DelayedAnimationComponent,
    BounceAnimationComponent,
    ComplexAnimationComponent,
    IncrementDecrementAnimationComponent
],
  templateUrl: './labs-animation.component.html',
  styleUrl: './labs-animation.component.scss',

})
export class LabsAnimationComponent {


}
