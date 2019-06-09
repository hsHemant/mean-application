import { Component } from '@angular/core';

//decorator
@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.css']
})

//class
export class PostCreateComponent {
    enteredValue = '';
    // 'from component';
    newPost = 'NO CONTENT';
    // aa='test'
    // onAddPost(postInput: HTMLTextAreaElement){
        onAddPost() {
        // console.log(postInput);
        // console.dir(postInput);
         this.newPost = this.enteredValue;
    
    }
}