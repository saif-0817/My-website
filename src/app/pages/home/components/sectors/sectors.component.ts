import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sectors',
  imports: [CommonModule],
  templateUrl: './sectors.component.html',
  styleUrl: './sectors.component.scss'
})
export class SectorsComponent {
  sectors = [
    { id: 1, text: 'Technology', image: 'images/technology.avif' },
    { id: 2, text: 'Healthcare', image: 'images/healthcare.avif' },
    { id: 3, text: 'Financial Services', image: 'images/financial_services.avif' },
    { id: 4, text: 'Manufacturing', image: 'images/manufacturing.avif' },
    { id: 5, text: 'Retail', image: 'images/retail-sale.avif' },
    { id: 6, text: 'Energy', image: 'images/energy.avif' },
    { id: 7, text: 'Real State', image: 'images/real-state.avif' },
    { id: 8, text: 'Education', image: 'images/education.avif' },
  ];
}
