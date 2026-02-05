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
  protected readonly title = signal('bmw-lynnwood-app');
}
