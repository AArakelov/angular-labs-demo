import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-labs-components',
    standalone: true,
    imports: [],
    templateUrl: './labs-components.component.html',
    styleUrl: './labs-components.component.scss'
})
export class LabsComponentsComponent {
    @Input() contact!: number;
    @Input() productCategory!: string;
}
