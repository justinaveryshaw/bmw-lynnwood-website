import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { TopNav } from './top-nav/top-nav';
import { Banner } from "./banner/banner";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TopNav, Banner],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  private isLoading = true;
 
  constructor(private api: APIService) {}

  protected readonly title = signal('bmw-lynnwood-app');

  
}
