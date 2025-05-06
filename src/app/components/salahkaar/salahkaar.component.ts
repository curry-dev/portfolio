import { Component } from '@angular/core';
import { ConfettiService } from '../../services/confetti.service';

@Component({
  selector: 'app-salahkaar',
  standalone: true,
  imports: [],
  templateUrl: './salahkaar.component.html',
  styleUrl: './salahkaar.component.css'
})
export class SalahkaarComponent {
  constructor(public confettiService: ConfettiService) {}
}
