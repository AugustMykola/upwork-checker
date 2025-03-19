import {Component, inject} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {Router} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {NavigationService} from '../../providers/navigation.service';

@Component({
  selector: 'app-toolbar',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
  providers: [NavigationService]
})

export class ToolbarComponent {
   public navigationService: NavigationService = inject(NavigationService);
}
