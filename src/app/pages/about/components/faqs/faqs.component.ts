import { Component } from '@angular/core';
import { AccordionModule } from 'ngx-bootstrap/accordion';





@Component({
  selector: 'app-faqs',
  imports: [
    AccordionModule,

  ],
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.scss'
})
export class FaqsComponent {
  panel = [
    {
      id: 'collapseOne',
      header: 'What types of businesses do you consult for?', content: 'We provide consulting services for a wide range of industries, including technology, finance, healthcare, manufacturing, and more. Our solutions are tailored to meet the unique needs of each sector.'
    },
    {
      id: 'collapseTwo',
      header: 'How do I get started with your consulting services?', content: 'Simply contact us through our website or call us directly. We will schedule an initial consultation to understand your needs and discuss how our services can benefit your business.'
    },
    {
      id: 'collapseThree',
      header: 'How long does it take to see results from your consulting services?', content: 'Our approach involves a thorough analysis of your current situation, followed by the development of customized strategies. We focus on collaboration and continuous feedback to ensure effective solutions.'
    },
    {
      id: 'collapseFour',
      header: 'What are your fees for consulting services?', content: 'Our fees are based on the complexity and scope of the consulting services required. We offer flexible pricing models and provide detailed proposals and estimates during the initial consultation.'
    }

  ]

}
