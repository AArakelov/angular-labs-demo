import {Component} from '@angular/core';
import {HeavyComponentComponent} from './heavy-component/heavy-component.component';


@Component({
  selector: 'app-idle-demo',
  standalone: true,
  imports: [
    HeavyComponentComponent
],
  templateUrl: './idle-demo.component.html',
  styleUrl: './idle-demo.component.scss'
})
export class IdleDemoComponent {
  busy: boolean = false;

  constructor() {
    this.performHeavyTask();
  }

  startBusyTask() {
    this.busy = true;
    this.performHeavyTask();
  }

  performHeavyTask() {
    setTimeout(() => {
      // Блокирующая операция
      for (let i = 0; i < 6009; i++) {
        console.log(i)
      } // Простой блокирующий цикл
      this.busy = false
    }, 3000); // Задержка перед началом выполнения тяжелой задачи
  }
}
