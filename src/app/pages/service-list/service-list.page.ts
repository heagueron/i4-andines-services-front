import { Component, OnInit } from '@angular/core';

import { Service } from 'src/app/interfaces/service';
import { ServiceService } from 'src/app/services/service.service';


@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.page.html',
  styleUrls: ['./service-list.page.scss'],
})
export class ServiceListPage implements OnInit {

  services: Service[] = [];

  constructor( private servsService: ServiceService ) { }

  ngOnInit() {

    // Get the full service list
    this.servsService.getAll()
      .subscribe( resp => {
        this.services = resp;
    });
    
  }

}
