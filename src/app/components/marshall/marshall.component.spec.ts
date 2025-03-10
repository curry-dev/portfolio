import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarshallComponent } from './marshall.component';

describe('MarshallComponent', () => {
  let component: MarshallComponent;
  let fixture: ComponentFixture<MarshallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarshallComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarshallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
