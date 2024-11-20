import {Component} from '@angular/core';
import {NgClass} from '@angular/common';
import {HeavyComponentComponent} from './idle-demo/heavy-component/heavy-component.component';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';

@Component({
    selector: 'app-labs-defer',
    standalone: true,
    imports: [
        NgClass,
        HeavyComponentComponent,
        RouterLinkActive,
        RouterOutlet,
        RouterLink
    ],
    templateUrl: './labs-defer.component.html',
    styleUrl: './labs-defer.component.scss'
})
export class LabsDeferComponent {
}
