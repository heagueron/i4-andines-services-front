import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  menu_options = [
    {"icon": "log-in", "name": "Login", "redirecTo": "/login"},
    {"icon": "clipboard", "name": "Registrarse", "redirecTo": "/signup"},
    {"icon": "filing", "name": "Servicios", "redirecTo": "/service-list"},
    {"icon": "list-box", "name": "Blog", "redirecTo": "/blog"},
    {"icon": "people", "name": "Ayuda", "redirecTo": "/help"},
    {"icon": "image", "name": "Quienes somos", "redirecTo": "/about"},
  ];
  
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
