import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposentSelecteurComponent } from './composent-selecteur.component';

describe('ComposentSelecteurComponent', () => {
  let component: ComposentSelecteurComponent;
  let fixture: ComponentFixture<ComposentSelecteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComposentSelecteurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComposentSelecteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
