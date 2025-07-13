import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  @ViewChild('rotateMe', { static: false }) imageRef!: ElementRef;
  rotation: number = 0;
  angle: number = 90;

  images: { path: string, caption: string }[] = [
    { path: 'we-local-day1.jpg', caption: 'The time I got the opportunity to present my research poster at WE LOCAL 23! #day1' },
    { path: 'we-local-day2.jpg', caption: '#day2 of WE LOCAL 23' },
    { path: 'ideathon.jpeg', caption: 'We won an appreciation award for our idea at the MITWPU hackathon!' },
    { path: 'appreciation-award.jpg', caption: 'Appreciation award from the department of Computer Science! - MIT 2023' },
    { path: 'new-student-convocation.jpeg', caption: 'New student convocation ceremony at University of Southern California!' },
    { path: 'president-folt.jpeg', caption: 'I got a picture with the president of USC, Carol Folt!' },
    { path: 'hack-night.jpeg', caption: 'Pitching my personal project at hack-night - USC HackSC 2024!' },
    { path: 'athena-hacks.JPG', caption: 'My first 24hr in-person hackathon at USC - AthenaHacks 2025!' },
    { path: 'diamond-hacks2.JPG', caption: 'Working on my solo project in UCSD DiamondHacks 2025!' },
    { path: 'diamond-hacks.JPG', caption: 'Demoing my project at UCDC DiamondHacks 2025!' },
    { path: 'lahacks.jpeg', caption: 'Demoing my solo project at UCLA LAHacks 2025!' },
    { path: 'graduation-ceremony.jpeg', caption: 'Graduation ceremony at USC!' },
    { path: 'beforevsafter.jpeg', caption: ':)' }
  ];

  rotateImage() {
    this.rotation = (this.rotation + this.angle) % 360;
    if (this.imageRef) {
      this.imageRef.nativeElement.style.transform = `rotate(${this.rotation}deg)`;
      this.imageRef.nativeElement.style.transition = 'all .5s';
    }
  }
}
