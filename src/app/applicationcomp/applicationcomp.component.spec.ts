import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationcompComponent } from './applicationcomp.component';

describe('ApplicationcompComponent', () => {
  let component: ApplicationcompComponent;
  let fixture: ComponentFixture<ApplicationcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationcompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
