import { Component, OnInit, Input } from '@angular/core';

import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() title;
  public href: string = "";

  constructor(private router : Router) {}

  ngOnInit() {
    this.href = this.router.url;
    console.log(this.router.url);
  }

}
