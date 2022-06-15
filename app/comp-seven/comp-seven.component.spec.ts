import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompSevenComponent } from './comp-seven.component';

describe('CompSevenComponent', () => {
  let component: CompSevenComponent;
  let fixture: ComponentFixture<CompSevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompSevenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
