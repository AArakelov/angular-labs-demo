import {Component} from '@angular/core';
import {asyncScheduler, firstValueFrom, interval, of} from "rxjs";
import {NgForOf, NgIf} from "@angular/common";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
    selector: 'app-labs-rxjs',
    standalone: true,
    imports: [
        NgIf,
        NgForOf
    ],
    templateUrl: './labs-rxjs.component.html',
    styleUrl: './labs-rxjs.component.scss'
})
export class LabsRxjsComponent {
    data$ = interval(1000)
        .pipe(takeUntilDestroyed())
        .subscribe((count) => console.log(count));


    // Обработчик клика
    onAsyncScheduler() {
        console.log('Before async operation');
        //
        // of('Hello from asyncScheduler!')
        //     .pipe(
        //         observeOn(asyncScheduler)  // Ожидаем следующего цикла событий
        //     )
        //     .subscribe(value => {
        //         console.log(value);  // Это будет выведено позже
        //     });
        //


        // Создаем proxyObserver
        const proxyObserver = {
            next(val: any) {
                // Ожидаем следующий цикл событий перед вызовом finalObserver.next
                asyncScheduler.schedule(
                    (x) => finalObserver.next(x), // Функция, которая будет вызвана через asyncScheduler
                    0, // Задержка в 0 мс (то есть немедленно, но в следующем цикле)
                    val // Передаем значение, которое будет обработано в finalObserver
                );
            },

            // Другие методы (например, error, complete) могут быть добавлены здесь
        };

// Создаем finalObserver
        const finalObserver = {
            next(x: any) {
                console.log('Received value:', x);  // Эта функция будет вызвана после отсрочки
            }
        };

// Пример использования
        proxyObserver.next(42);  // Это вызовет finalObserver.next(42) через asyncScheduler
        console.log('After async operation');
    }

    withoutAsyncScheduler() {
        console.log('Before subscription');
        of('Hello, World!').subscribe(value => {
            console.log(value);  // Это выполняется сразу
        });

        console.log('After subscription');
    }

    toPromise() {
        // Создаем Observable
        const observable$ = of(1, 2, 3, 4);

        // Получаем первый элемент как Promise
        firstValueFrom(observable$)
            .then(value => {
                console.log(value);  // 1
            })
            .catch(error => {
                console.error(error);
            });
    }

    // ngOnDestroy() больше не нужно для отписки
}
