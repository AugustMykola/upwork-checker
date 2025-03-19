import { Component } from '@angular/core';
import {RouterModule, RouterOutlet} from '@angular/router';
import {ToolbarComponent} from './components/toolbar/toolbar.component';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {MessagePageComponent} from './pages/message-page/message-page.component';
import {SpinnerComponent} from './components/spinner/spinner.component';

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
  }
}
