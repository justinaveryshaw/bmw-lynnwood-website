import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-top-nav',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './top-nav.html',
  styleUrl: './top-nav.scss'
})
export class TopNav {

}
