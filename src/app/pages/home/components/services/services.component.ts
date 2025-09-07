import { Component } from '@angular/core';
import { ServicesReusableComponent } from "../../../../shared/components/services-reusable/services-reusable.component";
import { ServicesType } from '../../../../shared/types/services-type';

@Component({
  selector: 'app-services',
  imports: [ServicesReusableComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  servicesServiceContent: ServicesType = {
    topTitle: 'Business consulting',
    bigTitle: 'What services do we offer for your business',
    description: 'See how our tailored solutions can boost your business. From planning to support, we provide the expertise to drive your success.',
    serviceOffers: [
      { 
        id: 1, 
        offerTitle: 'Business Website Audit', 
        offerDescription: 'Assess your website’s performance and provide improvement recommendations.', 
        offerBlueIcon: 'images/audit-blue.svg',  
        offerGreyIcon: 'images/audit.svg' 
      },
      { 
        id: 2, 
        offerTitle: 'Strategic Website Planning', 
        offerDescription: 'Create a strategy to align your website with business goals and audience needs.', 
        offerBlueIcon: 'images/planning-blue.svg',  
        offerGreyIcon: 'images/planning.svg'  
      },
      { 
        id: 3, 
        offerTitle: 'Competitive Analysis', 
        offerDescription: 'Review competitors’ sites to uncover opportunities for differentiation.', 
        offerBlueIcon: 'images/analysis-blue.svg', 
        offerGreyIcon: 'images/analysis.svg' 
      },
      { 
        id: 4, 
        offerTitle: 'Conversion Rate Optimization', 
        offerDescription: 'Enhance design and functionality to boost user engagement and conversions.', 
        offerBlueIcon: 'images/cro-blue.svg', 
        offerGreyIcon: 'images/cro.svg' 
      },
      { 
        id: 5, 
        offerTitle: 'Brand Positioning and Messaging', 
        offerDescription: 'Develop content and visuals to clearly communicate your brand’s value.', 
        offerBlueIcon: 'images/messaging-blue.svg', 
        offerGreyIcon: 'images/messaging.svg' 
      },
      { 
        id: 6, 
        offerTitle: 'Website Analytics and Reporting', 
        offerDescription: 'Measure performance with detailed analytics and reporting to drive data-based decisions.', 
        offerBlueIcon: 'images/analysis-blue.svg', 
        offerGreyIcon: 'images/analysis.svg' 
      }
    ]
  };
}
