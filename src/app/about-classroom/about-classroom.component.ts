import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-classroom',
  templateUrl: './about-classroom.component.html',
  styleUrls: ['./about-classroom.component.scss']
})
export class AboutClassroomComponent implements OnInit {

  constructor() { }
  participants = [];
  ngOnInit(): void {
    this.participants.push({
      name : 'Aman',
      status : 'I\'m available'
    });
    this.participants.push({
      name : 'Sanjay',
      status : 'Images'
    });
    this.participants.push({
      name : 'Indro',
      status : 'This theme is nice'
    });
    this.participants.push({
      name : 'Alisha',
      status : 'Nice to meet you'
    });
    this.participants.push({
      name : 'Designer',
      status : 'Next meeting tomorrow 10 A.M'
    });
  }
}
