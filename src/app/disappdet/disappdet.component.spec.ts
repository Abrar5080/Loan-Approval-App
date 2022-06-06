import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisappdetComponent } from './disappdet.component';

describe('DisappdetComponent', () => {
  let component: DisappdetComponent;
  let fixture: ComponentFixture<DisappdetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisappdetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisappdetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
