import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RlazyLoadComponent } from './rlazy-load.component';

describe('RlazyLoadComponent', () => {
  let component: RlazyLoadComponent;
  let fixture: ComponentFixture<RlazyLoadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RlazyLoadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RlazyLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
