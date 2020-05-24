import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  MovieData: any;
  name: string = undefined;
  profile: boolean;

  constructor(private http: HttpClient, private moviesData: MovieService) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.moviesData.getMoviesData(this.name).subscribe((data) => {
      this.MovieData = data;
      this.MovieData = this.MovieData.Search;
      console.log('data', this.MovieData);
    });
  }
}
