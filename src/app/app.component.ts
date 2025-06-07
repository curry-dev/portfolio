import { Component, HostListener } from '@angular/core';
import { RouterOutlet, RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    RouterLink,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
  targetX = 0;
  targetY = 0;
  imageX = 0;
  imageY = 0;
  speed = 5;
  hasReached = true;

  constructor() {
    this.animate();
  }

  onMouseMove(event: MouseEvent) {
    this.targetX = event.pageX;
    this.targetY = event.pageY;
    this.hasReached = false;
  }

  animate() {
    const animateStep = () => {
      const dx = this.targetX - this.imageX;
      const dy = this.targetY - this.imageY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance > this.speed) {
        const angle = Math.atan2(dy, dx);
        this.imageX += Math.cos(angle) * this.speed;
        this.imageY += Math.sin(angle) * this.speed;
        this.hasReached = false;
      } else {
        this.imageX = this.targetX;
        this.imageY = this.targetY;
        this.hasReached = true;
      }

      requestAnimationFrame(animateStep);
    };
    animateStep();
  }


  toggleDarkMode() {
    document.body.classList.toggle('change-mode');
    const modeImage = document.querySelector('.mode') as HTMLImageElement;
    if (document.body.classList.contains('change-mode')) {
      modeImage.src = './assets/emojis/light-mode.png';
    } else {
      modeImage.src = './assets/emojis/dark-mode.png';
    }
  }
  
}
