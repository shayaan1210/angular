import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgAttributeComponent } from './ng-attribute.component';

describe('NgAttributeComponent', () => {
  let component: NgAttributeComponent;
  let fixture: ComponentFixture<NgAttributeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgAttributeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgAttributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
