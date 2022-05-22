import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialiistDataComponent } from './specialiist-data.component';

describe('SpecialiistDataComponent', () => {
  let component: SpecialiistDataComponent;
  let fixture: ComponentFixture<SpecialiistDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialiistDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialiistDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
