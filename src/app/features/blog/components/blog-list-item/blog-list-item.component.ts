import { Component, Input, OnInit } from '@angular/core';
import { Blog } from '../../../../core/interfaces';

@Component({
  selector: 'app-blog-list-item',
  templateUrl: './blog-list-item.component.html',
  styleUrls: ['./blog-list-item.component.scss']
})
export class BlogListItemComponent implements OnInit {
  @Input() blogItem: Blog;

  constructor() {}

  ngOnInit(): void {}
}
