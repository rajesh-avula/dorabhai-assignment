import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
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
      pages : 78,
      topic : 'React Js',
      date : new Date()
    },
    {
      title : 'Bse 1st Sem Cse All Subjects',
      pages : 90,
      topic : 'Angular',
      date : new Date()
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
