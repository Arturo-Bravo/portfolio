import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  host: {class: 'fill'},
})
export class ProjectsComponent implements OnInit, OnDestroy {

  // colors: frameworks-yellow, languages-black, style-blue, other-orange, github-purple
  theProject: {name: string, pic: string, tags: {skill: string, color: string}[], desc: string, link?:string, gitLink:string } | null = null
  projects: {name: string, pic: string, tags: {skill: string, color: string}[], desc: string, link?:string, gitLink:string }[] = [
    {
      name: "Steam Compare App",
      pic: "assets/pics/steamcompare2.png",
      tags: [
        {skill: 'React', color: 'frame'},
        {skill: 'CSS', color: 'style'},
        {skill: 'HTML', color: 'style'},
        {skill: 'Bootstrap', color: 'style'},
        {skill: 'Javascript', color: 'lang'},
        {skill: 'Git', color: 'git'},
        {skill: 'REST API', color: 'other'}
      ],
      desc: `Created a React application for users to see insights about their steam account. Worked in a team of 3 people.
        This was my first time working on the front-end for a website. It was challenging at first since I was still fairly new
        to React and CSS. In the end I was satisfied with the finished product.
      `,
      link: 'https://maxoakes.github.io/steam-compare/',
      gitLink: 'https://github.com/maxoakes/steam-compare'
    },
    {
      name: "Teach Safely (PSU Senior Capstone)",
      pic: "assets/pics/hero-image.jpg",
      tags: [
        {skill: 'Vue', color: 'frame'},
        {skill: 'CSS', color: 'style'},
        {skill: 'HTML', color: 'style'},
        {skill: 'Typescript', color: 'lang'},
        {skill: 'Git', color: 'git'},
        {skill: 'API', color: 'other'}
      ],
      desc: `Worked in a team of seven people to develop a website for shop teachers to handle their classes.
        My responsibility was to work on the teacher portal, where teachers are able to create classes, add lessons and manage student records.
        Teachers are able to select from many certified lessons to add to their class. I worked on this project for 16 weeks.
      `,
      link: 'https://www.teachsafely.com/',
      gitLink: 'https://github.com/Teach-Safely-Website/tsw-teach-safely-website-yf91'
    },
    {
      name: "C-Tran Traffic Data",
      pic: "assets/pics/c-tran.png",
      tags: [
        {skill: 'Python', color: 'lang'},
        {skill: 'SQL', color: 'lang'},
        {skill: 'Kafka', color: 'other'},
        {skill: 'Data', color: 'other'},
        {skill: 'Git', color: 'git'},
        {skill: 'Pandas', color: 'frame'}
      ],
      desc: `A classmate and I Built a data pipeline for C-Tran GPS sensor data. We used the data to create visualizations using Mapbox GL JS.
			Every day, using a google cloud virtual machine, the sensor data would get automatically fetched then stored in a json file. 
      Then using Python's Beautiful Soup, it would automatically fetch stop event data, which was a seperate data set that included more
      information about the C-Tran bus and route for that day. Then after integrating both data sets together they would be loaded into the PostgreSQL database
      inside the virtual machine. Then from there we could convert any query results in a geojson format to work with Mapbox.
      <br/>
      <br/>
      This project was really cool to do. I learned a lot from it.`,
      gitLink: 'https://github.com/Arturo-Bravo/DataEngProj'
    },
    {
      name: "International Bulletin Board",
      pic: "assets/pics/worldnotes.png",
      tags: [
        {skill: 'React', color: 'frame'},
        {skill: 'Javascript', color: 'lang'},
        {skill: 'CSS', color: 'style'},
        {skill: 'HTML', color: 'style'},
        {skill: 'Git', color: 'git'},
      ],
      desc: `Built a fullstack React app with 2 classmates. My role was heavily focused on the front-end side of the project. 
      I also substantially helped to manage the work flow throughout development. Additionally, I assisted my group members 
      to better understand React. Likewise, I also learned from them and I am proud of how smoothly we worked as a team.
      `,
      gitLink: 'https://github.com/Arturo-Bravo/international-bulletin-board'
    }
    ,
    {
      name: "Kingdom of Frupal",
      pic: "assets/pics/frupal.png",
      tags: [
        {skill: 'C++', color: 'lang'},
        {skill: 'ncurses', color: 'frame'},
        {skill: 'Git', color: 'git'},
      ],
      desc: `Developed a game with 4 classmates following a scrum methodology for project management. The game was quite simple. You move around a 2d plane, finding tools,
      breaking obstacles, and finding treasure. The ultimate goal is to find the diamonds hidden somewhere in the map.
      <br/>
      <br/>
      This project is special to me because it was my first time collaborating with others with code. Thus I had to learn git. It was also interesting designing a map because
      you need to have user experience in mind. It has to be fun but challenging so the player doesn't get bored.
      `,
      gitLink: 'https://github.com/jnichols-pdx/frupal'
    },

  ]

  constructor() { }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    let elem = document.getElementsByClassName('toBlur') as HTMLCollectionOf<HTMLElement>;
    for(let i = 0; i<elem.length; i++){
      elem[i].classList.remove('blur')
      elem[i].classList.remove('unBlur')
    }
    this.theProject = null
  }

  selectProj(selected: {name: string, pic: string, tags: {skill: string, color: string}[], desc: string, link?:string, gitLink:string }){
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

    await this.delay(400);
    for(let i = 0; i<elem.length; i++){
      elem[i].classList.remove('blur')
      elem[i].classList.remove('unBlur')
    }
    this.theProject = null
  }
}
