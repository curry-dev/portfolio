import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkupComponent } from './workup.component';

describe('WorkupComponent', () => {
  let component: WorkupComponent;
  let fixture: ComponentFixture<WorkupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
