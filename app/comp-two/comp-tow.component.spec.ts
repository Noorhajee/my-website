import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompTowComponent } from './comp-tow.component';

describe('CompTowComponent', () => {
  let component: CompTowComponent;
  let fixture: ComponentFixture<CompTowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompTowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompTowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
