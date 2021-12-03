import { Component, OnInit } from '@angular/core';
import { BlogCrudService } from '../../../../core/services';
import { Observable } from 'rxjs';
import { Blog } from '../../../../core/interfaces';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  blogList$: Observable<Blog[]>;

  constructor(private blogCrudService: BlogCrudService) {}

  ngOnInit(): void {
    this.getBlogList();
  }

  private getBlogList(): void {
    this.blogList$ = this.blogCrudService.getBlogList();
  }
}
