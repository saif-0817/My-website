import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceDetailsService {

  services = [
  {
    id:'BusinessWebsiteAudit',
    hero: {
      topTitle: 'Business Website Audit',
      bigTitle:'Business Website Audit',
      description: 'Assess your website’s performance and provide improvement recommendations.',
      image: 'images/hero.avif'
    },
    offerService: {
      image: 'images/service-offer.jpg',
      offerService: [
        {
          type: 'Performance Analysis',
          details: 'Assess website speed, functionality, and user experience.'
        },
        {
          type: 'Usability Review',
          details: 'Evaluate navigation, accessibility, and user interface.'
        },
        {
          type: 'Technical Audit',
          details: 'Identify and fix issues related to SEO, mobile compatibility, and security.'
        },
        {
          type: 'Recommendations Report',
          details: 'Receive a detailed report with actionable insights and improvement strategies.'
        }
      ]
    },
    fifty50First:{
      topTitle:'Conversion Rate Optimization',
      bigTitle:'Why It Matters',
      description:'CRO helps maximize the effectiveness of your website by turning more visitors into customers, increasing your return on investment. It ensures that your site is optimized for the best possible user experience and conversion rates.',
      image:'images/service-details.jpg',
      background: '#edf0f6',
    dynamicOrder: true,
    textEnd:true
    },
     fifty50Second:{
      topTitle:'Conversion Rate Optimization',
      bigTitle:'Aditional Benefits',
      description:'Sed lorem ut nulla tortor sit eget felis. Integer malesuada curabitur vel interdum leo justo at ultricies. Sitt aliquet tempus elementum ac nibh lorem nulla morbi nullam. Tincidunt massa amet sagittis aliquam turpis volutpat. Vitae aliquam malesuada varius felis. Risus aliquam aliquam consequat habitant. Id elit turpis amet vel at',
      descriptionSecond:'Effective CRO strategies lead to higher customer satisfaction and increased revenue. By continuously testing and optimizing, you can adapt to user preferences and market conditions, keeping your website competitive and effective.',
      image:'images/service-offer.jpg',
       background: '#171d2f',
      dynamicOrder:true
    }
  }
];


getService(id:string){

return this.services.find(service => service.id.toLowerCase().includes(id))
}
}
