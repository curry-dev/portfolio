import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  image = document.querySelector("#rotateMe");
  rotation: number = 0;
  angle: number = 90;

  rotateImage() {
    this.rotation = (this.rotation + this.angle) % 360;
    this.image?.setAttribute('style', `transform: rotate(${this.rotation}deg); transition: all .5s;`);
  }
}
