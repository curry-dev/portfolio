import { Component } from '@angular/core';
import { ConfettiService } from '../../services/confetti.service';

@Component({
  selector: 'app-workup',
  standalone: true,
  imports: [],
  templateUrl: './workup.component.html',
  styleUrl: './workup.component.css'
})
export class WorkupComponent {
  constructor(public confettiService: ConfettiService) {}
}
