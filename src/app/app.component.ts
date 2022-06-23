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
    this.navShow = !this.navShow
    let menu = document.getElementById('menu')
    let elems = document.getElementsByClassName('cover-link') as HTMLCollectionOf<HTMLElement>;
    let x = document.getElementById('close')
    if(this.navShow === true){
      menu?.classList.add('hv100')
      // make text visible
      for(let i=0; i<elems.length; i++){
        elems[i].style.color = "#80191c"
      }
      x!.style.color = "#80191c"
    } else{
      menu?.classList.remove('hv100')
      // make text transparent
      for(let i=0; i<elems.length; i++){
        elems[i].style.color = "transparent"
      }
      // await this.delay(300)
      x!.style.color = "transparent"
    }
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
