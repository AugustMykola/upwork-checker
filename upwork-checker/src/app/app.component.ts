import { Component } from '@angular/core';
import {RouterModule, RouterOutlet} from '@angular/router';
import {app} from '../../firebase-config';
import {ToolbarComponent} from './components/toolbar/toolbar.component';
import {routes} from './app.routes';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {MessagePageComponent} from './pages/message-page/message-page.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterModule,
    RouterOutlet,
    ToolbarComponent,
    HomePageComponent,
    MessagePageComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'upwork-checker'
  constructor() {
    console.log('Firebase Initialized', app);
  }
}
