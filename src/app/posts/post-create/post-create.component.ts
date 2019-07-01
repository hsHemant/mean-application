import { Component, EventEmitter, Output } from '@angular/core';

//decorator
@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.css']
})

//class
export class PostCreateComponent {
    enteredTitle = "";
    enteredContent = "";
    @Output() postCreated = new EventEmitter();

    // 'from component';
    // newPost = 'NO CONTENT';
    // aa='test'
    // onAddPost(postInput: HTMLTextAreaElement){
        onAddPost() {
            const post = {
                title:this.enteredTitle,  
                content: this.enteredContent 
            };
            
        // console.log(postInput);
        // console.dir(postInput);
        //  this.newPost = this.enteredValue;
      this.postCreated.emit(post);
    }
}