import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisregdetComponent } from './disregdet.component';

describe('DisregdetComponent', () => {
  let component: DisregdetComponent;
  let fixture: ComponentFixture<DisregdetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisregdetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisregdetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
