import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.css'
})
export class IntroComponent implements OnInit {
  @Output() enter = new EventEmitter<void>();

  welcomeText = 'Welcome to my portfolio';
  displayedWelcomeText = '';
  
  showWelcome = false;
  zoomOutWelcome = false;
  
  showRole = false;
  showButton = false;
  
  fadeOutAll = false;

  ngOnInit() {
    this.startSequence();
  }

  async startSequence() {
    this.showWelcome = true;
    
    // 1. Type out welcome text (typing effect)
    for (let i = 0; i <= this.welcomeText.length; i++) {
      this.displayedWelcomeText = this.welcomeText.substring(0, i);
      await this.delay(60); // typing speed
    }
    
    // Pause so user can read
    await this.delay(1000);
    
    // 2. Zoom in and fade out welcome text
    this.zoomOutWelcome = true;
    await this.delay(800); // matches CSS animation duration
    this.showWelcome = false;
    
    // 3. Slide up and fade in Role text
    this.showRole = true;
    await this.delay(1200); // wait for role text animation to finish
    
    // 4. Show enter button
    this.showButton = true;
  }

  enterPortfolio() {
    // 5. Fade out entire screen
    this.fadeOutAll = true;
    setTimeout(() => {
      this.enter.emit();
    }, 800); // Wait for fade out animation before removing component
  }

  private delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
