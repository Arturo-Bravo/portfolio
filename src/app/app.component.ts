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

  async toggleMenu(){
    if(this.navShow === true){
      let menu = document.getElementById('menu')
      menu?.classList.add('slide-up')
      await this.delay(300);
      menu?.classList.remove('slide-up')
    }

    this.navShow = !this.navShow
  }

  onResize(event: { target: { innerWidth: any; }; }){
    if(event.target.innerWidth > 600){
      this.navShow = false;
    }
    
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
}
