import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {app} from '../../firebase-config';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'upwork-checker'
  constructor() {
    console.log('Firebase Initialized', app);
  }
}
