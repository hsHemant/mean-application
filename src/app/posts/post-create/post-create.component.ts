import { Component } from '@angular/core';

//decorator
@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html'
})

//class
export class PostCreateComponent {
    onAddPost(){
        alert('post added:');
    }
}