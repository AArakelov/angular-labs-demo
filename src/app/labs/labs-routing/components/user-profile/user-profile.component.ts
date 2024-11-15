import {Component} from '@angular/core';

@Component({
    selector: 'app-user-profile',
    standalone: true,
    imports: [],
    templateUrl: './user-profile.component.html',
    styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent {
    user = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        username: 'johndoe',
        location: 'New York, USA',
        avatarUrl: 'https://randomuser.me/api/portraits/men/75.jpg'
    };

    constructor() {
    }

    ngOnInit(): void {
    }

    editProfile() {
        // Logic to edit the profile (e.g., open a modal or navigate to an edit form)
        console.log('Edit profile clicked');
    }
}
