import { Component } from '@angular/core';
import { ChildrenOutletContexts, Router } from '@angular/router';
import { popIn } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  host: {
    '(window:resize)': 'onResize($event)'
  },
  animations: [
    popIn
  ]
})
export class AppComponent {
  router: Router;
  title = 'Arturo Bravo';
  navShow: boolean = false;
  constructor(private _router: Router, private contexts: ChildrenOutletContexts) {
    this.router = _router
  }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
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
