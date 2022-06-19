import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  // colors: frameworks-yellow, languages-black, style-blue, other-orange, github-purple
  theProject: {name: string, pic: string, tags: {skill: string, color: string}[], desc: string, link?:string } | null = null
  projects: {name: string, pic: string, tags: {skill: string, color: string}[], desc: string, link?:string }[] = [
    {
      name: "Steam Compare App",
      pic: "../../assets/pics/steamcompare2.png",
      tags: [
        {skill: 'React', color: 'frame'},
        {skill: 'CSS', color: 'style'},
        {skill: 'Bootstrap', color: 'style'},
        {skill: 'Javascript', color: 'lang'},
        {skill: 'Git', color: 'git'},
        {skill: 'REST API', color: 'other'}
      ],
      desc: "Created a React application for users to see insights about their steam account. Worked in a team of 3 people.",
      link: 'https://maxoakes.github.io/steam-compare/'
    },
    {
      name: "Teach Safely (PSU Senior Capstone)",
      pic: "../../assets/pics/hero-image.jpg",
      tags: [
        {skill: 'Vue', color: 'frame'},
        {skill: 'CSS', color: 'style'},
        {skill: 'Typescript', color: 'lang'},
        {skill: 'Git', color: 'git'},
        {skill: 'API', color: 'other'}
      ],
      desc: "Worked in a team of seven people to develop a website for shop teachers to handle their classes and lessons.",
      link: 'https://www.teachsafely.com/'
    },
    {
      name: "C-Tran Traffic Data",
      pic: "../../assets/pics/c-tran.png",
      tags: [
        {skill: 'Python', color: 'lang'},
        {skill: 'SQL', color: 'lang'},
        {skill: 'Kafka', color: 'other'},
        {skill: 'Data', color: 'other'},
        {skill: 'Git', color: 'git'},
        {skill: 'Pandas', color: 'frame'}
      ],
      desc: `Built a data pipeline for C-Tran GPS sensor data. Used the data to create visualizations using Mapbox GL JS.
			Loaded daily sensor data onto a SQL database.`
    },
    {
      name: "Kingdom of Frupal",
      pic: "../../assets/pics/frupal.png",
      tags: [
        {skill: 'C++', color: 'lang'},
        {skill: 'ncurses', color: 'frame'},
        {skill: 'Git', color: 'git'},
      ],
      desc: `Developed a game with 4 other people following a scrum methodology for project management.`
    },

  ]

  constructor() { }

  ngOnInit(): void {
  }

  selectProj(selected: {name: string, pic: string, tags: {skill: string, color: string}[], desc: string, link?:string }){
    this.theProject = selected

    let elem = document.getElementsByClassName('toBlur') as HTMLCollectionOf<HTMLElement>;
    for(let i = 0; i<elem.length; i++){
      elem[i].classList.add('blur');
    }
  }
  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
  async closeProj(){
    let elem = document.getElementsByClassName('toBlur') as HTMLCollectionOf<HTMLElement>;
    for(let i = 0; i<elem.length; i++){
      elem[i].classList.add('unBlur')
    }

    let fade = document.getElementById('feature');
    fade?.classList.add('unFade')

    await this.delay(600);
    for(let i = 0; i<elem.length; i++){
      elem[i].classList.remove('blur')
      elem[i].classList.remove('unBlur')
    }
    this.theProject = null
  }
}
