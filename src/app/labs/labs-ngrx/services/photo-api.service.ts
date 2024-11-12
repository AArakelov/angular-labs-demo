import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {Photo} from '../photo-list/models/photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoApiService {

  private readonly apiUrl = 'https://jsonplaceholder.typicode.com/photos';

  constructor(
    private http: HttpClient,
  ) {
  }

  // Fetch photos from the API
  fetchPhotos(): Observable<Photo[]> {
    return this.http.get<Photo[]>(this.apiUrl).pipe(map(photos => photos.slice(0, 10)));
  }
}
