import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalahkaarComponent } from './salahkaar.component';

describe('SalahkaarComponent', () => {
  let component: SalahkaarComponent;
  let fixture: ComponentFixture<SalahkaarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalahkaarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalahkaarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
