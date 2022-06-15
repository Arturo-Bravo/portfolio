import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  // colors: frameworks-yellow, languages-black, style-blue, other-orange, github-purple
  projects: {name: string, tags: {skill: string, color: string}[], desc: string }[] = [
    {
      name: "Steam Compare App",
      tags: [
        {skill: 'React JS', color: 'yellow'},
        {skill: 'HTML', color: 'blue'},
        {skill: 'CSS', color: 'blue'},
        {skill: 'Javascript', color: 'black'},
        {skill: 'Git', color: 'purple'},
        {skill: 'REST API', color: 'orange'}
      ],
      desc: "Created a React application for users to see insights about their steam account. Worked in a team of 3 people."
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
