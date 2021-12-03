import { Injectable } from '@angular/core';
import { Blog } from '../../interfaces';
import { Observable, of } from 'rxjs';

const mockPosts: Blog[] = [
  {
    id: 0,
    title: 'Angular 13 updates',
    description: 'description',
    likesCount: 10,
    createdAt: new Date(2021, 10, 9),
    author: {
      id: 77,
      firstName: 'Dwight',
      lastName: 'Schrute',
      imageLink:
        'https://static2.srcdn.com/wordpress/wp-content/uploads/2020/01/dwight-schrute-office-featured.jpg'
    }
  },
  {
    id: 1,
    title: 'Move on',
    description: 'description',
    likesCount: 0,
    createdAt: new Date(2020, 2, 18),
    author: {
      id: 5,
      firstName: 'Michael',
      lastName: 'Scott',
      imageLink:
        'https://nypost.com/wp-content/uploads/sites/2/2019/06/the-office-1390.jpg?quality=90&strip=all&w=1488'
    }
  },
  {
    id: 2,
    title: 'Why you need to absorb new information',
    description: 'description',
    likesCount: 72,
    createdAt: new Date(2021, 7, 27),
    author: {
      id: 12,
      firstName: 'Creed',
      lastName: 'Bratton',
      imageLink: 'https://media.altpress.com/uploads/2018/07/creed_the_office.jpg'
    }
  }
];

@Injectable({
  providedIn: 'root'
})
export class BlogCrudService {
  constructor() {}

  getBlogList(): Observable<Blog[]> {
    return of(mockPosts);
  }
}
