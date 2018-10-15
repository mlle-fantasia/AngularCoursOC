import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts = [
    {
      title: 'AngularJS vs Angular 2 et +',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      dateUpdate: '01/10/2018',
      numberLike: '0',
      numberDontLike: '0'
    },
    {
      title: 'Premiers pas avec Angular',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      dateUpdate: '03/09/2018',
      numberLike: '0',
      numberDontLike: '0'
    },
    {
      title: 'Angular c\'est génial',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      dateUpdate: '09/08/2018',
      numberLike: '0',
      numberDontLike: '0'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
