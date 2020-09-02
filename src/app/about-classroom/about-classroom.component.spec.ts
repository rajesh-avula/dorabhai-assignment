import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutClassroomComponent } from './about-classroom.component';

describe('AboutClassroomComponent', () => {
  let component: AboutClassroomComponent;
  let fixture: ComponentFixture<AboutClassroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutClassroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutClassroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
