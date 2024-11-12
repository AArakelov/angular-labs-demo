import {Component} from '@angular/core';
import {DiExampleComponent} from '../components/di-example/di-example.component';

@Component({
  selector: 'app-inject-function',
  standalone: true,
  imports: [
    DiExampleComponent
  ],
  templateUrl: './inject-function.component.html',
  styleUrl: './inject-function.component.scss'
})
export class InjectFunctionComponent {

}
