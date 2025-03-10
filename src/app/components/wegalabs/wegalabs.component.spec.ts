import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WegalabsComponent } from './wegalabs.component';

describe('WegalabsComponent', () => {
  let component: WegalabsComponent;
  let fixture: ComponentFixture<WegalabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WegalabsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WegalabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
