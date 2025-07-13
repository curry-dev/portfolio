import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-curryninja',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './curryninja.component.html',
  styleUrl: './curryninja.component.css'
})
export class CurryninjaComponent {
 images: { path: string }[] = [
   { path: 'animals.jpg' },
   { path: 'broken.jpg' },
   { path: 'Delilah.jpg' },
   { path: 'levi.jpg' },
   { path: 'itadori + nobara + megumi.jpg' },
   { path: 'mikey.jpg' },
   { path: 'pjo-tto.jpg' },
   { path: 'picnic-final.jpg' },
   { path: 'megumi-blooming.jpg' },
   { path: 'cdrama.jpg' },
   { path: 'canvasdropart-dtiys.jpg' },
   { path: 'chihiro-haku.jpg' }
 ];

  selectedImage: string | null = null;
  openImage(path: string) { this.selectedImage = path; }
  closeImage() { this.selectedImage = null; }
}
