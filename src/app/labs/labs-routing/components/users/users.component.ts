import {Component} from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
    selector: 'app-users',
    standalone: true,
    imports: [
        NgForOf
    ],
    templateUrl: './users.component.html',
    styleUrl: './users.component.scss'
})
export class UsersComponent {
    users: { name: string }[] = [{name: 'John'}, {name: 'Jane'}]
}
