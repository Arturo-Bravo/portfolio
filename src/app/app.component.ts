import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class AppComponent {
  router: Router;
  title = 'Arturo Bravo';
  navShow: boolean = false;
  constructor(private _router: Router) {
    this.router = _router
  }

  toggleMenu(){
    this.navShow = !this.navShow
  }

  onResize(event: { target: { innerWidth: any; }; }){
    if(event.target.innerWidth > 600){
      this.navShow = false;
    }
    
  }
}
