import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  getMoviesData(name = 'avengers') {
    return this.http.get(`https://www.omdbapi.com/?s=${name}&apikey=a981167b`);
  }
}
