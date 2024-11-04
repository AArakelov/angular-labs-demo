import {Component} from '@angular/core';
import {NgClass} from '@angular/common';
import {DeferredImageComponent} from './deferred-image/deferred-image.component';

@Component({
  selector: 'app-labs-defer',
  standalone: true,
  imports: [
    NgClass,
    DeferredImageComponent
  ],
  templateUrl: './labs-defer.component.html',
  styleUrl: './labs-defer.component.scss'
})
export class LabsDeferComponent {
}
