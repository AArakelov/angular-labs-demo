import {Component, inject} from '@angular/core';
import {ButtonStore} from "./button.store";
import {AsyncPipe} from "@angular/common";

@Component({
    selector: 'app-button',
    standalone: true,
    imports: [
        AsyncPipe
    ],
    templateUrl: './button.component.html',
    styleUrl: './button.component.scss',
    providers: [ButtonStore]

})
export class ButtonComponent {
    buttonStore = inject(ButtonStore)
    vm$ = this.buttonStore.select(state => ({
        buttonText: state.buttonText,
        isDisabled: state.isDisabled
    }));


    // Метод для обработки клика по кнопке
    onButtonClick(event: Event) {
        this.buttonStore.onChangeEvent({source: event, isClicked: true})
        this.buttonStore!.setClicked();  // Обновляем состояние кнопки на "Clicked"
    }

    // Метод для сброса состояния кнопки
    onResetClick() {
        this.buttonStore!.resetButton();  // Сбрасываем состояние кнопки
    }
}
