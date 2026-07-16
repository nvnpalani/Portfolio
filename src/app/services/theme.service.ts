import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  isDarkMode = signal<boolean>(false);
  primaryColor = signal<string>('#157945'); // Default Green

  // Predefined colors
  defaultColors = [
    { name: 'Green', value: '#157945' },
    { name: 'Blue', value: '#2563eb' },
    { name: 'Purple', value: '#7c3aed' },
    { name: 'Orange', value: '#ea580c' }
  ];

  constructor() {
    this.initTheme();
  }

  private initTheme() {
    // Check local storage or system preference for dark mode
    const storedDarkMode = localStorage.getItem('darkMode');
    if (storedDarkMode) {
      this.setDarkMode(storedDarkMode === 'true');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.setDarkMode(prefersDark);
    }

    // Check local storage for primary color
    const storedColor = localStorage.getItem('primaryColor');
    if (storedColor) {
      this.setPrimaryColor(storedColor);
    }
  }

  toggleDarkMode() {
    this.setDarkMode(!this.isDarkMode());
  }

  setDarkMode(isDark: boolean) {
    this.isDarkMode.set(isDark);
    localStorage.setItem('darkMode', String(isDark));
    
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  setPrimaryColor(hexColor: string) {
    this.primaryColor.set(hexColor);
    localStorage.setItem('primaryColor', hexColor);
    document.documentElement.style.setProperty('--primary-base', hexColor);
  }
}
