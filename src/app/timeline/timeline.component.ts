import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

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

  tweets = [
    {
      title : 'Bse 1st Sem Cse All Subjects',
      organiser : 'Jeet Sir',
      date : new Date(),
      content: 'Aman, Anoop, Binayak submit your assignment asap!! Last timing today is 5.30 PM today'
    },
    {
      title : 'Bse 1st Sem Cse All Subjects',
      organiser : 'Jeet Sir',
      date : new Date(),
      content: 'Quiz is tomorrow be ready at 11.00 AM circulate among this your friends, defaulters won\'t be considerd'
    }
  ]
  ngOnInit(): void {
  }

}
