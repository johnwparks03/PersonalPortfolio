import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetRepos } from './projects/store/projects.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'PersonalPortfolio';

  constructor(private store: Store){}

  ngOnInit(): void {
      this.store.dispatch(GetRepos())
  }
}
