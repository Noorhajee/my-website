import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompEightComponent } from './comp-eight.component';

describe('CompEightComponent', () => {
  let component: CompEightComponent;
  let fixture: ComponentFixture<CompEightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompEightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
