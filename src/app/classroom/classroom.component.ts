import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.scss']
})
export class ClassroomComponent implements OnInit {
  sections = [];

  constructor(private router: Router) { }
  classroom = {
    title : 'Bse 1st Sem Cse',
    subjects : 'All Subjects',
    organiser : 'Jeet Sir',
    materials : 0,
    posts : 15,
    members : 4
  };
  ngOnInit(): void {
    this.sections.push({
      title : 'Timeline',
      icon : 'wifi',
      path : 'timeline'
    });
    this.sections.push({
      title : 'Live Class',
      icon : 'tv',
      path : 'liveclass'
    });
    this.sections.push({
      title : 'Notes',
      icon : 'menu_book',
      path : 'notes'
    });
    this.sections.push({
      title : 'Assignment',
      icon : 'book_online',
      path : 'assignment'
    });
    this.sections.push({
      title : 'Test',
      icon : 'description',
      path : 'test'
    });
    this.sections.push({
      title : 'Attendance',
      icon : 'perm_identity',
      path : 'attendance'
    });
    this.sections.push({
      title : 'Apply for Leave',
      icon : 'schedule',
      path : 'applyleave'
    });
  }
  onclick = (section) => {
    this.router.navigateByUrl(section.title);
  }
}
