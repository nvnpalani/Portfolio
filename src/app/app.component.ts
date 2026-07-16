import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IntroComponent } from './module/intro/intro.component';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, IntroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Protfolio';
  showIntro = true;
  themeService = inject(ThemeService);
  isThemeDropdownOpen = false;
  isMobileMenuOpen = false;

  onIntroComplete() {
    this.showIntro = false;
  }

  toggleThemeDropdown() {
    this.isThemeDropdownOpen = !this.isThemeDropdownOpen;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
}
