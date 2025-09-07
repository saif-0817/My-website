import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogDetailsService {

  constructor() { }

  blogs = [
    { id: 1, topTitle: 'Blogs', bigTitle: 'Zeal Consulting Expands Services with New Sustainability Consulting Division', description: 'Zeal Consulting is excited to announce the launch of its new Sustainability Consulting Division, aimed at helping businesses integrate sustainable practices. Services include sustainability strategy development, environmental impact assessments, and regulatory compliance support, empowering companies to make a positive environmental impact.' }
  ]
}
