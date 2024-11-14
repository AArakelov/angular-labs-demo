import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  busy: boolean = false;
  i = 0

  ngOnInit() {
  }


}
