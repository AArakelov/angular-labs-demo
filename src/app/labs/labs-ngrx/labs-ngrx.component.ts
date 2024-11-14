import {Component} from '@angular/core';
import {PhotoListComponent} from './photo-list/photo-list.component';
import {ButtonComponent} from "./button/button.component";

@Component({
    selector: 'app-labs-ngrx',
    standalone: true,
    imports: [
        PhotoListComponent,
        ButtonComponent
    ],
    templateUrl: './labs-ngrx.component.html',
    styleUrl: './labs-ngrx.component.scss'
})
export class LabsNgrxComponent {

}
