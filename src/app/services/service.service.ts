import { Injectable } from '@angular/core';

import { Service } from '../interfaces/service';

import { of } from 'rxjs';

const services = [
  {"id": 1, "title": "Limpiezas", "image_path": "/assets/images/cleaning2.jpg"},
  {"id": 2, "title": "Ensamblado", "image_path": "/assets/images/ensambling2.jpg"},
  {"id": 3, "title": "Plomeria", "image_path": "/assets/images/plumber.jpg"},
  {"id": 1, "title": "Electricidad", "image_path": "/assets/images/electricity.jpg"},
  {"id": 1, "title": "Jardineria", "image_path": "/assets/images/garden1.jpg"},
  {"id": 1, "title": "Pintura", "image_path": "/assets/images/paint2.jpg"}
];

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
 
  constructor() { }

  getAll() {
    console.log('getAll', services);
    const source = of( services );
    return source;
  }



}
