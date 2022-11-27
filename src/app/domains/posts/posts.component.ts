import { Component, OnInit } from '@angular/core';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts : Array<any> = [];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts(): void {
    this.postService.getAllPosts().subscribe((response: any)=>{
      this.posts = response;
    });
  }

  deletePostById(id:number): void{
    this.postService.deletePostById(id).subscribe((response: any)=>{
      // this.loadPosts();
      this.posts = this.posts.filter(post => post.id !== id)
    });
  }



}
