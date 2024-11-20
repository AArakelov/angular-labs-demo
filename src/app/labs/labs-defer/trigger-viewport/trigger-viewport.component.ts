import {Component} from '@angular/core';
import {DeferredImageComponent} from "./deferred-image/deferred-image.component";

@Component({
    selector: 'app-trigger-viewport',
    standalone: true,
    imports: [
        DeferredImageComponent
    ],
    templateUrl: './trigger-viewport.component.html',
    styleUrl: './trigger-viewport.component.scss'
})
export class TriggerViewportComponent {

}
