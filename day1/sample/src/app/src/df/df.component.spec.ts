import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DfComponent } from './df.component';

describe('DfComponent', () => {
  let component: DfComponent;
  let fixture: ComponentFixture<DfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
