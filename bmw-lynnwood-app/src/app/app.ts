import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { APIService } from './api.service';
import { firstValueFrom, Observable } from 'rxjs';

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

  public async getFilterMenu() {
    let menuData;
    try {
      menuData = await firstValueFrom(this.api.getMenuList());
      this.isLoading = false;
    
    } catch (error) {
      this.isLoading = false;
    }
    console.debug('menu data: ', menuData);
  }

  
}
