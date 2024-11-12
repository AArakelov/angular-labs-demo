import {Photo} from '../models/photo';
import {patchState, signalStore, withComputed, withHooks, withMethods, withState} from '@ngrx/signals';
import {computed, inject} from '@angular/core';
import {PhotoApiService} from '../../services/photo-api.service';
import {rxMethod} from '@ngrx/signals/rxjs-interop';
import {pipe, switchMap, tap} from 'rxjs';
import {tapResponse} from '@ngrx/operators';

export type PhotoState = {
  photos: Photo[];
  selectedPhoto: Photo | null;
  isLoading: boolean;

};
export const initialState: PhotoState = {
  photos: [],
  selectedPhoto: null,
  isLoading: false,
};

export const PhotoStore = signalStore(
  {providedIn: "root"},
  withState(initialState),
  withComputed(({photos, isLoading}) => ({
      photoLength: computed(() => photos().length),
      photos: computed(() => {
        return photos()
      }),
    }
  )),
  withHooks({
    // Хук для инициализации хранилища
    onInit(store) {
      console.log('Store initialized');
      // Можно выполнить дополнительную логику, например, загрузить данные
    },

    // Хук для очистки хранилища перед уничтожением
    onDestroy(store) {
      console.log('Store destroyed');
      // Очистить данные хранилища или выполнить другие действия
    }
  }),
  withMethods((store, photoApiService = inject(PhotoApiService)!) => ({
    setLoading() {
      patchState(store, (state) => ({
        ...state,
        isLoading: true
      }))
    },
    updatePhotos(photos: Photo[]) {
      patchState(store, (state) => ({
        ...state,
        photos,
        isLoading: false
      }))
    },
    updatePhotosLoading(isLoading: boolean) {
      patchState(store, (state) => ({
        ...state,
        isLoading
      }))
    },
    // Метод для редактирования фотографии
    editPhoto(updatedPhoto: Photo) {
      patchState(store, (state) => ({
        ...state,
        photos: state.photos.map((photo) =>
          photo.id === updatedPhoto.id ? updatedPhoto : photo
        ), // Заменяем фото с matching ID
      }));
    },
    // Метод для выбора фотографии
    selectPhoto(photo: Photo) {
      patchState(store, (state) => ({
        ...state,
        selectedPhoto: photo,  // Устанавливаем выбранную фотографию
      }));
    },
    loadPhotos: rxMethod<void>(
      pipe(
        tap(() => patchState(store, {isLoading: true})),
        switchMap(() => photoApiService.fetchPhotos().pipe(
          tapResponse({
            next: photos => patchState(store, {photos}),
            error: console.error,
            finalize: () => patchState(store, {isLoading: false}),
          })
        ))
      )
    ),
    deletePhoto(id: number) {
      patchState(store, (state) => ({
        ...state,
        photos: state.photos.filter((photo) => photo.id !== id),  // Фильтруем фото с нужным id
      }));
    },
  }))
)
