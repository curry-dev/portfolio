import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-art',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    RouterLink
  ],
  templateUrl: './art.component.html',
  styleUrl: './art.component.css'
})
export class ArtComponent {

}
