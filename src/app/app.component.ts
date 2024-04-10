import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'it-works-modules-ui';

  collapsed = signal(false);
  sidenavWidth = computed(() => this.collapsed() ? '64px' :  '300px');

  toggleSidenav(): void {
    this.collapsed.set(!this.collapsed());
  }
}
