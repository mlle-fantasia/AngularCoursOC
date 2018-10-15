import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() dateUpdate: string;
  @Input() numberLike: number;
  @Input() numberDontlike: number;


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
