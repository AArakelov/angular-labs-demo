import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-labs-control-flow',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive

  ],
  templateUrl: './labs-control-flow.component.html',
  styleUrl: './labs-control-flow.component.scss'
})
export class LabsControlFlowComponent {

}
