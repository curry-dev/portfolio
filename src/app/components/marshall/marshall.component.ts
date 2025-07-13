import { Component } from '@angular/core';
import { ConfettiService } from '../../services/confetti.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-marshall',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './marshall.component.html',
  styleUrl: './marshall.component.css'
})
export class MarshallComponent {
  constructor(public confettiService: ConfettiService) {}

  selectedImage: string | null = null;
  openImage(path: string) { this.selectedImage = path; }
  closeImage() { this.selectedImage = null; }
}
