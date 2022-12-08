import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { UpdatePostComponent } from './components/update-post/update-post.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SearchPipe } from './pipes/search.pipe';
import { Search2Pipe } from './pipes/search2.pipe';
import { Show100charPipe } from './pipes/show100char.pipe';

@NgModule({
  declarations: [
    PostsComponent,
    UpdatePostComponent,
    CreatePostComponent,
    PostDetailsComponent,
    SearchPipe,
    Search2Pipe,
    Show100charPipe,
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    SharedModule
  ]
})
export class PostsModule { }
