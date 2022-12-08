import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-posts-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  @Input() postsData: Array<any> = [];
  @Output() deleteEvent: EventEmitter<number> = new EventEmitter();
  dateVal = new Date();
  observble = interval(1000);
  querySearch?: string;

  constructor() { }

  ngOnInit(): void {
  }

  deleteChild(id: number) {
    this.deleteEvent.emit(id);
  }

  // take100Char(body: string): string{
  //   if(body.length > 100){
  //     return body.substring(0,100) + " ...";
  //   }else{
  //     return body;
  //   }
  // }

}
