import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGoalEventComponent } from './create-goal-event.component';

describe('CreateGoalEventComponent', () => {
  let component: CreateGoalEventComponent;
  let fixture: ComponentFixture<CreateGoalEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateGoalEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGoalEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
