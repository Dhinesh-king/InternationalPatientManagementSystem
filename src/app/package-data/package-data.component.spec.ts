import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageDataComponent } from './package-data.component';

describe('PackageDataComponent', () => {
  let component: PackageDataComponent;
  let fixture: ComponentFixture<PackageDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackageDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
