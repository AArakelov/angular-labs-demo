import {Component}                from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-labs-di',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './labs-di.component.html',
  styleUrl: './labs-di.component.scss'
})
export class LabsDiComponent {

}
