import { Component, Input } from '@angular/core';
import { serviceOffersType } from '../../types/services-type';
import { Router } from '@angular/router';



@Component({
  selector: 'app-service-card',
  imports: [],
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.scss'
})
export class ServiceCardComponent {
  @Input()
  serviceCard!: serviceOffersType;

  constructor(private router:Router){

  }

  srvDtls(dtls: string) {
  // dtls = 'business-website-audit'
  console.log(dtls)
  this.router.navigate(['/services', 'Business Website Audit']);
}
}
