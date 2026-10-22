import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css'],
})
export class BlogDetailComponent implements OnInit {
  blogContent: string = '';

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
  ) {}

  ngOnInit(): void {
    const blogID = this.route.snapshot.paramMap.get('id');
    console.log(blogID);
    if (blogID) {
      this.http
        .get(`assets/blogs/${blogID}.html`, { responseType: 'text' })
        .subscribe({
          next: (htmlData) => {
            this.blogContent = htmlData;
          },
          error: () => {
            this.blogContent = '<h1>What are you doing here </h1>';
          },
        });
    }
  }
}
