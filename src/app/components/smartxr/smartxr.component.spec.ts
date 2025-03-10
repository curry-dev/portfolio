import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartxrComponent } from './smartxr.component';

describe('SmartxrComponent', () => {
  let component: SmartxrComponent;
  let fixture: ComponentFixture<SmartxrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmartxrComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartxrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
