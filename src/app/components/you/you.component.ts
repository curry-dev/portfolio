import { Component } from '@angular/core';
import { ConfettiService } from '../../services/confetti.service';

@Component({
  selector: 'app-you',
  standalone: true,
  imports: [],
  templateUrl: './you.component.html',
  styleUrl: './you.component.css'
})
export class YouComponent {
  constructor(public confettiService: ConfettiService) {}
}
