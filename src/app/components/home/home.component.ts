import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    RouterLink,
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  // let toggleImage = document.querySelector(".mode");
  // function changeMode() {
  // // for local
  // if (toggleImage.src == "http://127.0.0.1:5500/assets/dark-mode.png") {
  //     toggleImage.src = "http://127.0.0.1:5500/assets/light-mode.png";
  // } else if (toggleImage.src == "http://127.0.0.1:5500/assets/light-mode.png") {
  //     toggleImage.src = "http://127.0.0.1:5500/assets/dark-mode.png";
  // }
  // // for hosted
  // else if (toggleImage.src == "https://curry-dev.github.io/devankshi/assets/dark-mode.png") {
  //     toggleImage.src = "https://curry-dev.github.io/devankshi/assets/light-mode.png";
  // } else if (toggleImage.src == "https://curry-dev.github.io/devankshi/assets/light-mode.png") {
  //     toggleImage.src = "https://curry-dev.github.io/devankshi/assets/dark-mode.png";
  // }

  // let element = document.body;
  // element.classList.toggle("change-mode");
  // }

  // let image = document.querySelector("#rotateMe");
  // let rotation = 0;
  // const angle = 90;
  // function rotateImage() {
  // image.style.transition = 'all .5s';
  // rotation = (rotation + angle) % 360;
  // image.style.transform = `rotate(${rotation}deg)`;
  // }

  // <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js"></script>

  // <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
  // integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
  // crossorigin="anonymous"></script>
  // <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
  // integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
  // crossorigin="anonymous"></script>
  // <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
  // integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF"
  // crossorigin="anonymous"></script>
}
