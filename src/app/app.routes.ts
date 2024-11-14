import {Routes} from '@angular/router';

export const routes: Routes = [
    {
        path: 'control-flow',
        loadComponent: () => import('./labs/labs-control-flow/labs-control-flow.component')
            .then(c => c.LabsControlFlowComponent),
        children: [
            {
                path: 'conditionally-content',
                loadComponent: () => import('./labs/labs-control-flow/conditionally-content/conditionally-content.component')
                    .then(c => c.ConditionallyContentComponent)
            },
            {
                path: 'repeat-content',
                loadComponent: () => import('./labs/labs-control-flow/repeat-content/repeat-content.component')
                    .then(c => c.RepeatContentComponent)
            }, {
                path: 'conditional-switch-block',
                loadComponent: () => import('./labs/labs-control-flow/conditional-switch-block/conditional-switch-block.component')
                    .then(c => c.ConditionalSwitchBlockComponent)
            },

            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'conditionally-content'
            }
        ]
    },
    {
        path: 'labs-components', loadComponent: () => import('./labs/labs-components/labs-components.component')
            .then(c => c.LabsComponentsComponent)
    },
    {
        path: 'labs-defer', loadComponent: () => import('./labs/labs-defer/labs-defer.component')
            .then(c => c.LabsDeferComponent),
        children: [
            {
                path: 'idle-demo',
                loadComponent: () => import('./labs/labs-defer/idle-demo/idle-demo.component').then(c => c.IdleDemoComponent)
            },
            {
                path: 'trigger-viewport',
                loadComponent: () => import('./labs/labs-defer/trigger-viewport/trigger-viewport.component').then(c => c.TriggerViewportComponent)
            }, {
                path: 'interaction-demo',
                loadComponent: () => import('./labs/labs-defer/interaction-demo/interaction-demo.component').then(c => c.InteractionDemoComponent)
            },

        ]
    },
    {
        path: 'di-demo',
        loadComponent: () => import('./labs/labs-di/labs-di.component').then(c => c.LabsDiComponent),
        children: [
            {
                path: 'inject',
                loadComponent: () => import('./labs/labs-di/inject-function/inject-function.component').then(c => c.InjectFunctionComponent)
            }
        ]
    },
    {
        path: 'labs-signals',
        loadComponent: () => import('./labs/labs-signal/labs-signal.component').then(c => c.LabsSignalComponent),
    },
    {
        path: 'labs-animation',
        loadComponent: () => import('./labs/labs-animation/labs-animation.component').then(c => c.LabsAnimationComponent),
    },
    {
        path: 'labs-ngrx',
        loadComponent: () => import('./labs/labs-ngrx/labs-ngrx.component').then(c => c.LabsNgrxComponent),
    },
    {
        path: 'labs-ssr',
        loadComponent: () => import('./labs/labs-ssr-demo/labs-ssr-demo.component').then(c => c.LabsSsrDemoComponent),
    }
];
