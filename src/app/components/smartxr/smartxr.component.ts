import { Component } from '@angular/core';
import { ConfettiService } from '../../services/confetti.service';

@Component({
  selector: 'app-smartxr',
  standalone: true,
  imports: [],
  templateUrl: './smartxr.component.html',
  styleUrl: './smartxr.component.css'
})
export class SmartxrComponent {
  constructor(public confettiService: ConfettiService) {}
}
