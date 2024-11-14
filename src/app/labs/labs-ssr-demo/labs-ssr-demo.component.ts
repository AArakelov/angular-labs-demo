import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NgForOf} from "@angular/common";

@Component({
    selector: 'app-labs-ssr-demo',
    standalone: true,
    imports: [
        NgForOf
    ],
    templateUrl: './labs-ssr-demo.component.html',
    styleUrl: './labs-ssr-demo.component.scss'
})
export class LabsSsrDemoComponent {
    title = 'SSR Demo';
    data: any[] = [];

    constructor(private http: HttpClient) {
    }

    ngOnInit(): void {
        this.loadData();
    }

    // Метод для загрузки данных (например, с API)
    loadData() {
        this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts').subscribe(response => {
            this.data = response;
        });
    }
}
