import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  dateUpdate = new Date();
  numberLike = 0;
  numberDontlike = 0;


  @Input() title: string;
  @Input() content: string;


  constructor() {
  }

  ngOnInit() {
  }

  getNumberLike() {
    return this.numberLike;
  }

  getNumberDontlike() {
    return this.numberDontlike;
  }

  addLike() {
    return this.numberLike++;
  }

  addDontLike() {
    return this.numberDontlike++;
  }


  getRapportLike() {
    const like = this.getNumberLike();
    const dontLike = this.getNumberDontlike();
    if (like === dontLike) {
      return;
    }
    return (like > dontLike);
  }

}
