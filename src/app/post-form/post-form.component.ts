import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  @Output()
  onAdd: EventEmitter<Post> = new EventEmitter<Post>()

  @ViewChild('titleInput')
  inputRef: ElementRef

  title = ''
  text = ''

  constructor() { }

  ngOnInit() {
  }

  addPost(){
    if (this.text.trim() && this.title.trim()){
      const post: Post = {
        title: this.title,
        text: this.text
      }

      this.onAdd.emit(post)
      this.title = this.text = ''
    } 
  }

  focusTitle(){
    this.inputRef.nativeElement.focus();
  }

}
