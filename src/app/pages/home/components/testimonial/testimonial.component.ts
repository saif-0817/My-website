import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselModule, type OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-testimonial',
  imports: [CarouselModule, CommonModule],
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.scss'
})
export class TestimonialComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    nav: false,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },

  }

  carouselItems = [
    { id: 1, title: 'Voices of Our Satisfied Clients', description: 'Working with Zeal Consulting was a game-changer for our healthcare practice. Their tailored strategies improved our operational efficiency and patient satisfaction.', image: 'images/professional_blazer.avif', name: 'Alex Johnson', desiganation: 'CEO / Innovate Tech' },
    { id: 2, title: 'Voices of Our Satisfied Clients', description: 'Working with Zeal Consulting was a game-changer for our healthcare practice. Their tailored strategies improved our operational efficiency and patient satisfaction.', image: 'images/young-business-women.avif', name: 'Maria Lopez', desiganation: 'Founder / HealthFirst Clinics' },
    { id: 3, title: 'Voices of Our Satisfied Clients', description: 'Working with Zeal Consulting was a game-changer for our healthcare practice. Their tailored strategies improved our operational efficiency and patient satisfaction.', image: 'images/work-planning-strategy 2.avif', name: 'David Kim', desiganation: 'CFO / EcoEnergy Solutions' },
    {
      id: 4, title: 'Voices of Our Satisfied Clients', description: 'Working with Zeal Consulting was a game-changer for our healthcare practice. Their tailored strategies improved our operational efficiency and patient satisfaction.', image: 'images/home-carousel4.avif', name: 'Emily Chen', desiganation: 'Director / Retail Innovations'
    },
    {
      id: 5, title: 'Voices of Our Satisfied Clients', description: 'Working with Zeal Consulting was a game-changer for our healthcare practice. Their tailored strategies improved our operational efficiency and patient satisfaction.', image: 'images/home-carousel5.avif', name: 'Ryan Patel', desiganation: 'Managing Director /  Urban Real Estate'
    }
  ];

  blogs = [
    { id: 1, image: 'images/home-blog1.jpg', date: '20.10.24', text: 'Zeal Consulting Expands Services with New Sustainability Consulting Division' },
    { id: 2, image: 'images/home-blog2.jpg', date: '15.10.24', text: 'Upcoming Webinar: Leveraging Data Analytics for Business Growth' },
    { id: 3, image: 'images/home-blog3.jpg', date: '10.10.24', text: 'Zeal Consulting Achieves ISO 9001 Certification for Quality Management' }
  ]
}
