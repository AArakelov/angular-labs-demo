import {Injectable} from '@angular/core';
import {ComponentStore} from '@ngrx/component-store';
import {tap} from "rxjs";

interface ButtonState {
    isClicked: boolean;  // Флаг, который определяет, была ли кнопка нажата
    isDisabled: boolean; // Флаг, который определяет, активна ли кнопка
    buttonText: string;  // Текст, отображаемый на кнопке
}

const initialState: ButtonState = {
    isClicked: false,
    isDisabled: false,
    buttonText: 'Click me'
};

@Injectable()
export class ButtonStore extends ComponentStore<ButtonState> {
    // Селекторы для состояния
    readonly isClicked$ = this.select(state => state.isClicked);

    // Методы для обновления состояния
    readonly setClicked = this.updater((state) => ({
        ...state,
        isClicked: true,
        isDisabled: true, // Кнопка становится неактивной после нажатия
        buttonText: 'Clicked' // Текст меняется на "Clicked"
    }));
    readonly resetButton = this.updater((state) => ({
        ...state,
        isClicked: false,
        isDisabled: false, // Кнопка снова становится активной
        buttonText: 'Click me' // Текст возвращается к исходному
    }));
    onChangeEvent = this.effect<{
        source: Event;
        isClicked: boolean;
    }>((event$) => {
        return event$.pipe(
            tap<{ source: Event; isClicked: boolean }>((event) => {
                event.source.stopPropagation();
            })
        );
    });

    constructor() {
        super(initialState);
    }
}
