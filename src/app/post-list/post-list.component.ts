import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  // posts = [
  //   {title: 'first post', content: 'this is the first post\'s content'},
  //   {title: 'secound post', content: 'this is the first post\'s content'},
  //   {title: 'third post', content: 'this is the first post\'s content'},
  //   {title: 'forth post', content: 'this is the first post\'s content'}
  // ];
  @Input() posts = [];


  constructor() { }

  ngOnInit() {
  }

}
