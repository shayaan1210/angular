import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgClassAttComponent } from './ng-class-att.component';

describe('NgClassAttComponent', () => {
  let component: NgClassAttComponent;
  let fixture: ComponentFixture<NgClassAttComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgClassAttComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgClassAttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
