import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LookupClientsComponent } from './lookup-clients.component';

describe('LookupClientsComponent', () => {
  let component: LookupClientsComponent;
  let fixture: ComponentFixture<LookupClientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LookupClientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LookupClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
