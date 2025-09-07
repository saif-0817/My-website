import { Component } from '@angular/core';

@Component({
  selector: 'app-teams',
  imports: [],
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.scss'
})
export class TeamsComponent {
 experts = [
  {
    id: 1,
    name: 'Alex Jhonson',
    field: 'Senior Business Strategist',
    image: 'images/experts/expert1.avif'
  },
  {
    id: 2,
    name: 'Sophia Martinez',
    field: 'Marketing Consultant',
    image: 'images/experts/expert2.avif'
  },
  {
    id: 3,
    name: 'David Kim',
    field: 'Financial Advisor',
    image: 'images/experts/expert3.avif'
  },
  {
    id: 4,
    name: 'Emma Williams',
    field: 'Human Resource Specialist',
    image: 'images/experts/expert4.avif'
  },
  {
    id: 5,
    name: 'James Anderson',
    field: 'Technology Solutions Architect',
    image: 'images/experts/expert5.avif'
  },
  {
    id: 6,
    name: 'Olivia Brown',
    field: 'Project Management Expert',
    image: 'images/experts/expert4.avif'
  },
  {
    id: 7,
    name: 'Michael Chen',
    field: 'Data Science Consultant',
    image:  'images/experts/expert6.avif'
  },
  {
    id: 8,
    name: 'Ava Patel',
    field: 'Legal & Compliance Advisor',
    image: 'images/experts/expert1.avif'
  }
];

}
