import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounteractionsComponent } from './counteractions.component';

describe('CounteractionsComponent', () => {
  let component: CounteractionsComponent;
  let fixture: ComponentFixture<CounteractionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounteractionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CounteractionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
