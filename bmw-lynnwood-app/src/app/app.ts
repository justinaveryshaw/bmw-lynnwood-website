import { Component, signal } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import { APIService } from './api.service';
import { firstValueFrom, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HttpClientModule],
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
