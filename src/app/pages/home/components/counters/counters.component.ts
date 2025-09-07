import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-counters',
  imports: [CommonModule],
  templateUrl: './counters.component.html',
  styleUrl: './counters.component.scss'
})
export class CountersComponent {
  counters = [
    { id: 1, title: '100+', text: 'Projects Completed' },
    {
      id: 2, title: '95%', text: 'Client Satisfaction'
    },
    {
      id: 3, title: '$50M+', text: 'Revenue Generated'
    },
    {
      id: 4, title: '90%', text: 'Project Success Rate'
    }
  ]
}
