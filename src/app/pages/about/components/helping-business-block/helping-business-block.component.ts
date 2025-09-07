import { Component } from '@angular/core';

@Component({
  selector: 'app-helping-business-block',
  imports: [],
  templateUrl: './helping-business-block.component.html',
  styleUrl: './helping-business-block.component.scss'
})
export class HelpingBusinessBlockComponent {
detailsCard=[
  {
    id:'1', images:'images/details-card1.svg',
    cardTitle:'Our Expertise',
    cardText:'We offer specialized knowledge and skills in delivering innovative solutions tailored to your business needs, ensuring optimal results and growth.'
  },
  {
    id:'2', images:'images/details-card2.svg',
    cardTitle:'Our Approach',
    cardText:'Our method combines strategic planning with hands-on execution, focusing on collaboration and adaptability to achieve your goals effectively.'
  },
  {
    id:'3', images:'images/details-card3.svg',
    cardTitle:'Where We Operate',
    cardText:'We serve clients globally, providing top-tier consulting services in various regions, with a focus on delivering impactful results wherever you are.'
  }
]
}
