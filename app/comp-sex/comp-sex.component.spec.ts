import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompSexComponent } from './comp-sex.component';

describe('CompSexComponent', () => {
  let component: CompSexComponent;
  let fixture: ComponentFixture<CompSexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompSexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompSexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
