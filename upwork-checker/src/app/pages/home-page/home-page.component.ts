import {Component, inject} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {Router} from '@angular/router';
import {NavigationService} from '../../providers/navigation.service';

@Component({
  selector: 'app-home-page',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  providers: [NavigationService]
})
export class HomePageComponent {
  navigationService: NavigationService = inject(NavigationService);
}
