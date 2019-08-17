import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  menu_options = [
    {"icon": "log-in", "name": "Login", "redirecTo": "/login"},
    {"icon": "clipboard", "name": "Registrarse", "redirecTo": "/signup"},
    {"icon": "filing", "name": "Servicios", "redirecTo": "/service-list"},
    {"icon": "list-box", "name": "Blog", "redirecTo": "/blog"},
    {"icon": "people", "name": "Ayuda", "redirecTo": "/help"},
    {"icon": "image", "name": "Quienes somos", "redirecTo": "/about"},
  ];
  
  constructor() { }

  ngOnInit() {}

}
