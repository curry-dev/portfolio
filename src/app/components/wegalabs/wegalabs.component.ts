import { Component } from '@angular/core';
import { ConfettiService } from '../../services/confetti.service';

@Component({
  selector: 'app-wegalabs',
  standalone: true,
  imports: [],
  templateUrl: './wegalabs.component.html',
  styleUrl: './wegalabs.component.css'
})
export class WegalabsComponent {
  constructor(public confettiService: ConfettiService) {}
}
