import { Component, OnInit,  } from '@angular/core';
import { CreatePostModel } from './create-post.model';


@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
model = new CreatePostModel();
meta = new CreatePostModel();


  constructor() { }

  ngOnInit() {
    this.meta.setLabels();
  }
  logForm(){
    console.log(this.model)
  }

}
