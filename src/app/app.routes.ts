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
      }
    ]
  },
];
