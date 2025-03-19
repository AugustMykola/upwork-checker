import {inject, Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable()
export class NavigationService {
  private router: Router = inject(Router);

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
