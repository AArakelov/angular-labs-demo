// Вынесение анимации в константы
import {animate, group, query, sequence, stagger, state, style, transition, trigger} from '@angular/animations';

export const scaleAndColorAnimation = trigger('scaleAndColor', [
  state('small', style({
    transform: 'scale(0.5)',
    backgroundColor: 'blue'
  })),
  state('large', style({
    transform: 'scale(1)',
    backgroundColor: 'green'
  })),
  transition('small <=> large', [
    animate('300ms ease-in-out')
  ])
]);


// Вынесение анимации в константы
export const delayedAnimation = trigger('delayedScale', [
  transition(':enter', [
    style({transform: 'scale(0)', backgroundColor: 'red'}),
    animate('500ms 300ms ease-in-out', style({
      transform: 'scale(1)',
      backgroundColor: 'yellow'
    }))
  ])
]);
// Вынесение анимации с пользовательской кривой Безье
export const bounceAnimation = trigger('bounce', [
  transition(':enter', [
    style({transform: 'scale(0)', backgroundColor: '#ff5722'}),
    animate('600ms 200ms cubic-bezier(0.68, -0.55, 0.27, 1.55)', style({
      transform: 'scale(1)',
      backgroundColor: '#3f51b5'
    }))
  ]),
  transition(':leave', [
    animate('600ms cubic-bezier(0.68, -0.55, 0.27, 1.55)', style({
      transform: 'scale(0)',
      backgroundColor: '#ff5722'
    }))
  ])
]);
// Вынесение сложной анимации в константы
export const complexAnimation = trigger('complexAnimation', [
  transition(':enter', [
    style({transform: 'scale(0)', backgroundColor: 'blue'}),
    animate('600ms 100ms ease-in-out', style({
      transform: 'scale(1) translateX(100px)',
      backgroundColor: 'green'
    }))
  ]),
  transition(':leave', [
    animate('600ms ease-out', style({
      transform: 'scale(0)',
      backgroundColor: 'blue'
    }))
  ])
]);
// Вынесение анимации в константы
export const valueChangeAnimation = trigger('valueChange', [
  transition(':increment', [
    style({transform: 'scale(1)', backgroundColor: 'blue'}),
    animate('300ms ease-in', style({transform: 'scale(1.2)', backgroundColor: 'green'}))
  ]),
  transition(':decrement', [
    style({transform: 'scale(1)', backgroundColor: 'red'}),
    animate('300ms ease-out', style({transform: 'scale(0.8)', backgroundColor: 'orange'}))
  ])
]);

export const groupAnimation = trigger('groupAnimation', [
  transition(':enter', [
    group([
      animate('0.5s', style({transform: 'translateX(100px)'})),
      animate('1s', style({opacity: 1}))
    ])
  ])
]);

export const sequenceAnimation = trigger('sequenceAnimation', [
  transition(':enter', [
    sequence([
      animate('0.3s', style({opacity: 1})),
      animate('0.5s', style({transform: 'translateX(0)'}))
    ])
  ])
]);
export const staggerAnimation = trigger('listAnimation', [
  transition(':enter', [
    query('.item', [
      style({opacity: 0, transform: 'translateY(-20px)'}),
      stagger('100ms', animate('300ms ease-out', style({opacity: 1, transform: 'translateY(0)'})))
    ], {optional: true})
  ])
])
