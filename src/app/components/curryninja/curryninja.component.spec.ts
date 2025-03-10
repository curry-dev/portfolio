import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurryninjaComponent } from './curryninja.component';

describe('CurryninjaComponent', () => {
  let component: CurryninjaComponent;
  let fixture: ComponentFixture<CurryninjaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurryninjaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurryninjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
