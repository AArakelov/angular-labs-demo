import {Component}                                  from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-labs-defer',
  standalone: true,
  imports: [
    RouterLinkActive,
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './labs-defer.component.html',
  styleUrl: './labs-defer.component.scss'
})
export class LabsDeferComponent {
}
