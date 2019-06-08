import { Component } from '@angular/core';

//decorator
@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html'
})

//class
export class PostCreateComponent {
    newPost = 'NO CONTENT';
    // aa='test'
    onAddPost(){
        this.newPost = 'The user\'s post';
    
    }
}