import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetProjects } from './projects/store/projects.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'PersonalPortfolio';
  isOpen = false;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(GetProjects());
  }

  toggleDropdown(): void {
    this.isOpen = !this.isOpen;
  }

  closeDropdown(): void {
    this.isOpen = false;
  }
}
