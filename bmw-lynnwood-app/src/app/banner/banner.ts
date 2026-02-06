import { Component } from '@angular/core';
// import { RouterLink, RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';


import { TopNav } from '../top-nav/top-nav';

@Component({
  selector: 'app-banner',
  imports: [
    RouterLink,
    // RouterOutlet,
    TopNav
  ],
  templateUrl: './banner.html',
  styleUrl: './banner.scss'
})
export class Banner {

}
