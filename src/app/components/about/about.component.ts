import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  @ViewChild('rotateMe', { static: false }) imageRef!: ElementRef;
  rotation: number = 0;
  angle: number = 90;

  rotateImage() {
    this.rotation = (this.rotation + this.angle) % 360;
    if (this.imageRef) {
      this.imageRef.nativeElement.style.transform = `rotate(${this.rotation}deg)`;
      this.imageRef.nativeElement.style.transition = 'all .5s';
    }
  }
}
