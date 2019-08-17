import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { Service } from 'src/app/interfaces/service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  isStarting = false;
  slideOptons = {
    allowSlidePrev: false,
    allowSlideNext: false
  };

  services: Service[] = [];

  constructor( private servsService: ServiceService ) {}

  async ngOnInit() {

    // Show initial image for 2 secs.
    this.isStarting = true;

    setTimeout(() => {
      this.isStarting = false;
    }, 2000);

    // Get the full service list
    this.servsService.getAll()
      .subscribe( resp => {
        this.services = resp;
    });

  }

  quoteCleaning() {
    console.log("quoteCleaning");
  }

  readMoreAboutProfessionals() {
    console.log('readMoreAboutProfessionals');
  }

}
