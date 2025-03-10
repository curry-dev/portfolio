import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-tech',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    RouterLink
  ],
  templateUrl: './tech.component.html',
  styleUrl: './tech.component.css'
})
export class TechComponent {

}
