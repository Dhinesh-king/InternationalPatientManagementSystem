import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitiateClaimComponent } from './initiate-claim.component';

describe('InitiateClaimComponent', () => {
  let component: InitiateClaimComponent;
  let fixture: ComponentFixture<InitiateClaimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitiateClaimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InitiateClaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
