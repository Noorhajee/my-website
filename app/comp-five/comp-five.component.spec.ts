import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompFiveComponent } from './comp-five.component';

describe('CompFiveComponent', () => {
  let component: CompFiveComponent;
  let fixture: ComponentFixture<CompFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompFiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
