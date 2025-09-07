import { Component } from '@angular/core';
import { PartnersReusableComponent } from "../../../../shared/components/partners-reusable/partners-reusable.component";
import { FiftyFiftyReusableComponent } from "../../../../shared/components/fifty-fifty-reusable/fifty-fifty-reusable.component";
import { ServiceDetailsService } from '../../../../shared/services/service-details.service';
import { ActivatedRoute } from '@angular/router';
import { SubTopTitle } from '../../../../shared/types/fifty-fifty-type';



@Component({
  selector: 'app-service-details',
  imports: [PartnersReusableComponent, FiftyFiftyReusableComponent],
  templateUrl: './service-details.component.html',
  styleUrl: './service-details.component.scss'
})
export class ServiceDetailsComponent {
  service: any;
  subTopTitle!: SubTopTitle;
  constructor(private srvDtls: ServiceDetailsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      const slug = params.get('slug')?.replaceAll(' ', '').toLocaleLowerCase(); // ✅ works
      console.log(slug);
      this.service = this.srvDtls.getService(slug!);

    });

    this.subTopTitle = {
      text: 'SERVICES',
      clr: 'white',
      destination: '/services'
    }
  }

}
