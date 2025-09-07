import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-partners-reusable',
  imports: [CommonModule],
  templateUrl: './partners-reusable.component.html',
  styleUrl: './partners-reusable.component.scss'
})
export class PartnersReusableComponent {
partners = [
    { id: 1, image: 'images/partners/logoipsum-1.svg' },
    {
      id: 2, image: 'images/partners/logoipsum-2.svg'
    },
    {
      id: 3, image: 'images/partners/logoipsum-3.svg'
    },
    {
      id: 4, image: 'images/partners/logoipsum-4.svg'
    }
  ]
}
