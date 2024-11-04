import {Component} from '@angular/core';

@Component({
  selector: 'app-heavy-component',
  standalone: true,
  imports: [],
  templateUrl: './heavy-component.component.html',
  styleUrl: './heavy-component.component.scss'
})
export class HeavyComponentComponent {
  largeDataArray = Array.from({length: 1000}, (_, i) => `Элемент ${i + 1}`);

}
