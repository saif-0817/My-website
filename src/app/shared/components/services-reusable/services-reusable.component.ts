import { Component, Input } from '@angular/core';
import type { ServicesType } from '../../types/services-type';
import { ServiceCardComponent } from '../service-card/service-card.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-services-reusable',
  imports: [ServiceCardComponent, RouterLink, CommonModule],
  templateUrl: './services-reusable.component.html',
  styleUrl: './services-reusable.component.scss'
})
export class ServicesReusableComponent {

  @Input()
  servicesContent: ServicesType = {};

  // serviceOffers = [
  //   { id: 1, title: 'Business Website Audit', description: 'Assess your website’s performance and provide improvement recommendations.', icon: 'images/audit' },
  //   { id: 2, title: 'Strategic Website Planning', description: 'Create a strategy to align your website with business goals and audience needs.', icon: 'images/planning' },
  //   { id: 3, title: 'Competitive Analysis', description: 'Review competitors’ sites to uncover opportunities for differentiation.', icon: 'images/analysis' },
  //   { id: 4, title: 'Conversion Rate Optimization', description: 'Enhance design and functionality to boost user engagement and conversions.', icon: 'images/cro' },
  //   { id: 5, title: 'Brand Positioning and Messaging', description: 'Develop content and visuals to clearly communicate your brand’s value.', icon: 'images/messaging' },
  //   { id: 6, title: 'Business Websit Website Analytics and Reporting', description: 'Develop content and visuals to clearly communicate your brand’s value.', icon: 'images/planning' }

  // ]
}
