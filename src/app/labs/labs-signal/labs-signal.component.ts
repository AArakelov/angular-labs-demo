import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {ComputedSignalsDemoComponent} from './computed-signals-demo/computed-signals-demo.component';
import {WritableSignalsDemoComponent} from './writable-signals-demo/writable-signals-demo.component';
import {EffectDemoComponent} from './effect-demo/effect-demo.component';
import {EqualityFunctionDemoComponent} from './equality-function-demo/equality-function-demo.component';
import {UntrackedDemoComponent} from './untracked-demo/untracked-demo.component';

@Component({
  selector: 'app-labs-signal',
  standalone: true,
  imports: [
    RouterLinkActive,
    RouterOutlet,
    RouterLink,
    UserProfileComponent,
    ComputedSignalsDemoComponent,
    WritableSignalsDemoComponent,
    EffectDemoComponent,
    EqualityFunctionDemoComponent,
    UntrackedDemoComponent
  ],
  templateUrl: './labs-signal.component.html',
  styleUrl: './labs-signal.component.scss'
})
export class LabsSignalComponent {

}
