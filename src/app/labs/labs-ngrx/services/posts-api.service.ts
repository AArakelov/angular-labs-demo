import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Post} from "../models/posts";

@Injectable({
    providedIn: 'root'
})
export class PostsApiService {
    private readonly apiUrl = 'https://jsonplaceholder.typicode.com/posts';

    constructor(private http: HttpClient) {
    }


    // Получаем список всех постов
    getPosts(): Observable<Post[]> {
        return this.http.get<Post[]>(this.apiUrl);
    }

    // Получаем один пост по его ID
    getPostById(id: number): Observable<Post> {
        return this.http.get<Post>(`${this.apiUrl}/${id}`);
    }
}
