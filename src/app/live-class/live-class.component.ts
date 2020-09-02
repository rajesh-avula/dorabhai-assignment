import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-live-class',
  templateUrl: './live-class.component.html',
  styleUrls: ['./live-class.component.scss']
})
export class LiveClassComponent implements OnInit {

  constructor() { }
  actions = [
    {
      title : 'Like',
      icon : 'start_rate'
    },
    {
      title : 'Comment',
      icon : 'comment'
    },
    {
      title : 'Share',
      icon : 'share'
    }
  ];
  classes = [
    {
      title : 'Bse 1st Sem Cse All Subjects',
      startedDate : new Date(),
      topic : 'React Js'
    },
    {
      title : 'Bse 1st Sem Cse All Subjects',
      startedDate : new Date(),
      topic : 'Angular'
    }
  ];
  ngOnInit(): void {
  }

}
